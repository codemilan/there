// @flow
// Local
// - Queries
import currentUser from './currentUser'

const userResolvers = {
  Query: {
    currentUser,
  },

  Mutation: {},
}

export default userResolvers
