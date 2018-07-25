// @flow
import type { GraphQLContext } from '../../graphql'

const userResolvers = {
  Query: {
    currentUser: () => 'It`s current User! Say Hi.',
    users: (_: any, args: any, ctx: GraphQLContext, info: any) => {
      return ctx.db.query.users({})
    },
  },

  Mutation: {},
}

export default userResolvers
