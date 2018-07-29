// @flow
import type { GraphQLContext } from '../../graphql'

export default (_: any, __: any, { user }: GraphQLContext) => user || null
