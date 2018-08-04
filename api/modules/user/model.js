// @flow
// Local
import db from '../../db'
import type { UserCreateInput, User, ID_Input } from 'shared/prisma/types'

export const getUserByEmail = (email: string) =>
  db.query.user({ where: { email } })

export const storeNewUser = (user: UserCreateInput) =>
  db.mutation.createUser({ data: user })

export const saveUserProvider = (
  userId: ID_Input,
  providerMethodKey: string,
  providerId: string,
) =>
  db.mutation.updateUser({
    where: { id: userId },
    data: { [providerMethodKey]: providerId },
  })

/**
 * Used for sign in / sign up
 */
export const createOrFindUser = async (
  user: Object,
  providerMethodKey: ?'googleProviderId',
): Promise<User | {}> => {
  // 1.
  // First chek if user is already signed up, by searching for it
  let userPromise: Promise<any> = Promise.resolve({})
  if (user.id) {
    userPromise = db.query.user({ where: { id: user.id } })
  } else if (providerMethodKey && user[providerMethodKey]) {
    // User is trying to sign in using Google or another SSO
    userPromise = db.query
      .user({
        where: { [providerMethodKey]: user[providerMethodKey] },
      })
      .then(storedUser => {
        if (storedUser) {
          return storedUser
        }

        // If user with SSO provider isn't found, fallback to email match
        // since user might be using another provider with the same email
        if (user.email) {
          return getUserByEmail(user.email)
        } else {
          return Promise.resolve({})
        }
      })
  } else if (user.email) {
    userPromise = getUserByEmail(user.email)
  }

  // 2.
  // Create user or return the found user, and if needed update provider methods
  try {
    const storedUser = await userPromise
    // if a user is found with an id or email, return the user in the db
    if (storedUser && storedUser.id) {
      // if a user is signing in with a second auth method from what their user was created with, store the new auth method
      if (!storedUser[providerMethodKey] && providerMethodKey) {
        return saveUserProvider(
          storedUser.id,
          providerMethodKey,
          user[providerMethodKey],
        ).then(() => Promise.resolve(storedUser))
      } else {
        return storedUser
      }
    }

    // if no user exists, create a new one with the oauth profile data
    return storeNewUser(user)
  } catch (err) {
    if (user.id) {
      console.error(err)
      return new Error(`No user found for id ${user.id}.`)
    }
    return storeNewUser(user)
  }
}
