// @flow
import user from './user/resolvers'

export default {
  Query: {
    ...user.Query,
  },

  Mutation: {
    ...user.Mutation,
  },
}
