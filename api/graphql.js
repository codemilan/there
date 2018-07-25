// @flow
const debug = require('debug')('api:graphql')
import path from 'path'
import depthLimit from 'graphql-depth-limit'
import { importSchema } from 'graphql-import'
import { ApolloServer } from 'apollo-server-express'
import { Prisma } from 'prisma-binding'

// Local
import resolvers from './modules/resolvers'

// Types
import type { Query, Mutation, Subscription } from 'prisma/generated'

const prisma = new Prisma({
  // Datamodel; It's different from our API `typedefs`
  typeDefs: path.resolve(__dirname, '../prisma/generated.graphql'),
  endpoint:
    process.env.NODE_ENV === 'development'
      ? `http://prisma:4466`
      : process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: debug.enabled,
})

// All GraphQL API type defenitions
const typeDefs = importSchema(path.resolve(__dirname, './schema.graphql'))

export type GraphQLContext = {
  db: { query: Query, mutation: Mutation, subscription: Subscription },
}

export const applyGraphQlMiddleware = (serverRegistration: any) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    validationRules: [depthLimit(10)],
    tracing: true,
    context: (): GraphQLContext => ({
      db: prisma,
    }),
  })

  server.applyMiddleware(serverRegistration)
  debug('Applied Apollo middleware to the app!')
}
