// @flow
const debug = require('debug')('api:graphql')
import path from 'path'
import depthLimit from 'graphql-depth-limit'
import { importSchema } from 'graphql-import'
import { ApolloServer } from 'apollo-server-express'

// Local
import resolvers from './modules/resolvers'
import type { User } from 'shared/prisma/types'
import db, { type Db } from './db'

const IS_PROD = process.env.NODE_ENV === 'development'

// All GraphQL API type defenitions
const typeDefs = importSchema(path.resolve(__dirname, './schema.graphql'))

export type GraphQLContext = { db: Db, user: ?User }

export const applyGraphQlMiddleware = (serverRegistration: any) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    validationRules: [depthLimit(10)],
    tracing: true,
    engine: IS_PROD ? { apiKey: process.env.APOLLO_ENGINE_API_KEY } : null,
    context: ({ req }): GraphQLContext => ({
      db,
      user: req.user || null,
    }),
  })

  server.applyMiddleware(serverRegistration)
  debug('Applied Apollo middleware to the app!')
}
