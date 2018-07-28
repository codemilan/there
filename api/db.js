// @flow
const debug = require('debug')('api:db')
import path from 'path'
import { Prisma } from 'prisma-binding'

// Local
import type { Query, Mutation, Subscription, Exists } from 'prisma/generated'

const IS_PROD = process.env.NODE_ENV === 'production'

export interface Db {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
  exists: Exists;
}

const db: Db = new Prisma({
  // Datamodel; It's different from our API `typedefs`
  typeDefs: path.resolve(__dirname, '../prisma/generated.graphql'),
  endpoint: IS_PROD ? process.env.PRISMA_ENDPOINT : `http://prisma:4466`,
  secret: process.env.PRISMA_SECRET,
  debug: debug.enabled,
})

export default db
