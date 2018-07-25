/**
 * @flow
 */
import type { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import type { IResolvers } from 'graphql-tools/dist/Interfaces'
import type { Options } from 'graphql-binding'
import type { BasePrismaOptions as BPOType } from 'prisma-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
  workspaceMembers(
    args: {
      where?: WorkspaceMemberWhereInput,
      orderBy?: WorkspaceMemberOrderByInput,
      skip?: Int,
      after?: String,
      before?: String,
      first?: Int,
      last?: Int,
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<WorkspaceMember[]>;
  groups(
    args: {
      where?: GroupWhereInput,
      orderBy?: GroupOrderByInput,
      skip?: Int,
      after?: String,
      before?: String,
      first?: Int,
      last?: Int,
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<Group[]>;
  userVacations(
    args: {
      where?: UserVacationWhereInput,
      orderBy?: UserVacationOrderByInput,
      skip?: Int,
      after?: String,
      before?: String,
      first?: Int,
      last?: Int,
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<UserVacation[]>;
  userWorkHourses(
    args: {
      where?: UserWorkHoursWhereInput,
      orderBy?: UserWorkHoursOrderByInput,
      skip?: Int,
      after?: String,
      before?: String,
      first?: Int,
      last?: Int,
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<UserWorkHours[]>;
  workspaces(
    args: {
      where?: WorkspaceWhereInput,
      orderBy?: WorkspaceOrderByInput,
      skip?: Int,
      after?: String,
      before?: String,
      first?: Int,
      last?: Int,
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<Workspace[]>;
  users(
    args: {
      where?: UserWhereInput,
      orderBy?: UserOrderByInput,
      skip?: Int,
      after?: String,
      before?: String,
      first?: Int,
      last?: Int,
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<User[]>;
  workspaceMember(
    args: { where: WorkspaceMemberWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<WorkspaceMember | null>;
  group(
    args: { where: GroupWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<Group | null>;
  userVacation(
    args: { where: UserVacationWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<UserVacation | null>;
  userWorkHours(
    args: { where: UserWorkHoursWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<UserWorkHours | null>;
  workspace(
    args: { where: WorkspaceWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<Workspace | null>;
  user(
    args: { where: UserWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<User | null>;
  workspaceMembersConnection(
    args: {
      where?: WorkspaceMemberWhereInput,
      orderBy?: WorkspaceMemberOrderByInput,
      skip?: Int,
      after?: String,
      before?: String,
      first?: Int,
      last?: Int,
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<WorkspaceMemberConnection>;
  groupsConnection(
    args: {
      where?: GroupWhereInput,
      orderBy?: GroupOrderByInput,
      skip?: Int,
      after?: String,
      before?: String,
      first?: Int,
      last?: Int,
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<GroupConnection>;
  userVacationsConnection(
    args: {
      where?: UserVacationWhereInput,
      orderBy?: UserVacationOrderByInput,
      skip?: Int,
      after?: String,
      before?: String,
      first?: Int,
      last?: Int,
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<UserVacationConnection>;
  userWorkHoursesConnection(
    args: {
      where?: UserWorkHoursWhereInput,
      orderBy?: UserWorkHoursOrderByInput,
      skip?: Int,
      after?: String,
      before?: String,
      first?: Int,
      last?: Int,
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<UserWorkHoursConnection>;
  workspacesConnection(
    args: {
      where?: WorkspaceWhereInput,
      orderBy?: WorkspaceOrderByInput,
      skip?: Int,
      after?: String,
      before?: String,
      first?: Int,
      last?: Int,
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<WorkspaceConnection>;
  usersConnection(
    args: {
      where?: UserWhereInput,
      orderBy?: UserOrderByInput,
      skip?: Int,
      after?: String,
      before?: String,
      first?: Int,
      last?: Int,
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<UserConnection>;
  node(
    args: { id: ID_Output },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<Node | null>;
}

export interface Mutation {
  createWorkspaceMember(
    args: { data: WorkspaceMemberCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<WorkspaceMember>;
  createGroup(
    args: { data: GroupCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<Group>;
  createUserVacation(
    args: { data: UserVacationCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<UserVacation>;
  createUserWorkHours(
    args: { data: UserWorkHoursCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<UserWorkHours>;
  createWorkspace(
    args: { data: WorkspaceCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<Workspace>;
  createUser(
    args: { data: UserCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<User>;
  updateWorkspaceMember(
    args: {
      data: WorkspaceMemberUpdateInput,
      where: WorkspaceMemberWhereUniqueInput,
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<WorkspaceMember | null>;
  updateGroup(
    args: { data: GroupUpdateInput, where: GroupWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<Group | null>;
  updateUserVacation(
    args: {
      data: UserVacationUpdateInput,
      where: UserVacationWhereUniqueInput,
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<UserVacation | null>;
  updateUserWorkHours(
    args: {
      data: UserWorkHoursUpdateInput,
      where: UserWorkHoursWhereUniqueInput,
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<UserWorkHours | null>;
  updateWorkspace(
    args: { data: WorkspaceUpdateInput, where: WorkspaceWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<Workspace | null>;
  updateUser(
    args: { data: UserUpdateInput, where: UserWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<User | null>;
  deleteWorkspaceMember(
    args: { where: WorkspaceMemberWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<WorkspaceMember | null>;
  deleteGroup(
    args: { where: GroupWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<Group | null>;
  deleteUserVacation(
    args: { where: UserVacationWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<UserVacation | null>;
  deleteUserWorkHours(
    args: { where: UserWorkHoursWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<UserWorkHours | null>;
  deleteWorkspace(
    args: { where: WorkspaceWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<Workspace | null>;
  deleteUser(
    args: { where: UserWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<User | null>;
  upsertWorkspaceMember(
    args: {
      where: WorkspaceMemberWhereUniqueInput,
      create: WorkspaceMemberCreateInput,
      update: WorkspaceMemberUpdateInput,
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<WorkspaceMember>;
  upsertGroup(
    args: {
      where: GroupWhereUniqueInput,
      create: GroupCreateInput,
      update: GroupUpdateInput,
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<Group>;
  upsertUserVacation(
    args: {
      where: UserVacationWhereUniqueInput,
      create: UserVacationCreateInput,
      update: UserVacationUpdateInput,
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<UserVacation>;
  upsertUserWorkHours(
    args: {
      where: UserWorkHoursWhereUniqueInput,
      create: UserWorkHoursCreateInput,
      update: UserWorkHoursUpdateInput,
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<UserWorkHours>;
  upsertWorkspace(
    args: {
      where: WorkspaceWhereUniqueInput,
      create: WorkspaceCreateInput,
      update: WorkspaceUpdateInput,
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<Workspace>;
  upsertUser(
    args: {
      where: UserWhereUniqueInput,
      create: UserCreateInput,
      update: UserUpdateInput,
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<User>;
  updateManyWorkspaceMembers(
    args: {
      data: WorkspaceMemberUpdateInput,
      where?: WorkspaceMemberWhereInput,
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<BatchPayload>;
  updateManyGroups(
    args: { data: GroupUpdateInput, where?: GroupWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<BatchPayload>;
  updateManyUserVacations(
    args: { data: UserVacationUpdateInput, where?: UserVacationWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<BatchPayload>;
  updateManyUserWorkHourses(
    args: { data: UserWorkHoursUpdateInput, where?: UserWorkHoursWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<BatchPayload>;
  updateManyWorkspaces(
    args: { data: WorkspaceUpdateInput, where?: WorkspaceWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<BatchPayload>;
  updateManyUsers(
    args: { data: UserUpdateInput, where?: UserWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<BatchPayload>;
  deleteManyWorkspaceMembers(
    args: { where?: WorkspaceMemberWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<BatchPayload>;
  deleteManyGroups(
    args: { where?: GroupWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<BatchPayload>;
  deleteManyUserVacations(
    args: { where?: UserVacationWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<BatchPayload>;
  deleteManyUserWorkHourses(
    args: { where?: UserWorkHoursWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<BatchPayload>;
  deleteManyWorkspaces(
    args: { where?: WorkspaceWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<BatchPayload>;
  deleteManyUsers(
    args: { where?: UserWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<BatchPayload>;
}

export interface Subscription {
  workspaceMember(
    args: { where?: WorkspaceMemberSubscriptionWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<AsyncIterator<WorkspaceMemberSubscriptionPayload | null>>;
  group(
    args: { where?: GroupSubscriptionWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<AsyncIterator<GroupSubscriptionPayload | null>>;
  userVacation(
    args: { where?: UserVacationSubscriptionWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<AsyncIterator<UserVacationSubscriptionPayload | null>>;
  userWorkHours(
    args: { where?: UserWorkHoursSubscriptionWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<AsyncIterator<UserWorkHoursSubscriptionPayload | null>>;
  workspace(
    args: { where?: WorkspaceSubscriptionWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<AsyncIterator<WorkspaceSubscriptionPayload | null>>;
  user(
    args: { where?: UserSubscriptionWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<AsyncIterator<UserSubscriptionPayload | null>>;
}

export interface Exists {
  WorkspaceMember(where?: WorkspaceMemberWhereInput): Promise<boolean>;
  Group(where?: GroupWhereInput): Promise<boolean>;
  UserVacation(where?: UserVacationWhereInput): Promise<boolean>;
  UserWorkHours(where?: UserWorkHoursWhereInput): Promise<boolean>;
  Workspace(where?: WorkspaceWhereInput): Promise<boolean>;
  User(where?: UserWhereInput): Promise<boolean>;
}

interface Prisma {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
  exists: Exists;
  request(query: string, variables?: { [key: string]: any }): Promise<any>;
  delegate(
    operation: 'query' | 'mutation',
    fieldName: string,
    args: {
      [key: string]: any,
    },
    infoOrQuery?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<any>;
  delegateSubscription(
    fieldName: string,
    args?: {
      [key: string]: any,
    },
    infoOrQuery?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<AsyncIterator<any>>;
  getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BPOType): T;
}
/**
 * Type Defs
 */

const typeDefs = `type AggregateGroup {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateUserVacation {
  count: Int!
}

type AggregateUserWorkHours {
  count: Int!
}

type AggregateWorkspace {
  count: Int!
}

type AggregateWorkspaceMember {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

type Group implements Node {
  id: ID!
  workspace(where: WorkspaceWhereInput): Workspace!
  members(where: WorkspaceMemberWhereInput, orderBy: WorkspaceMemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WorkspaceMember!]
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type GroupConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GroupEdge]!
  aggregate: AggregateGroup!
}

input GroupCreateInput {
  name: String!
  workspace: WorkspaceCreateOneInput!
  members: WorkspaceMemberCreateManyWithoutGroupsInput
}

input GroupCreateManyWithoutMembersInput {
  create: [GroupCreateWithoutMembersInput!]
  connect: [GroupWhereUniqueInput!]
}

input GroupCreateWithoutMembersInput {
  name: String!
  workspace: WorkspaceCreateOneInput!
}

"""An edge in a connection."""
type GroupEdge {
  """The item at the end of the edge."""
  node: Group!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GroupOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GroupPreviousValues {
  id: ID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type GroupSubscriptionPayload {
  mutation: MutationType!
  node: Group
  updatedFields: [String!]
  previousValues: GroupPreviousValues
}

input GroupSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GroupSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GroupSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GroupSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GroupWhereInput
}

input GroupUpdateInput {
  name: String
  workspace: WorkspaceUpdateOneInput
  members: WorkspaceMemberUpdateManyWithoutGroupsInput
}

input GroupUpdateManyWithoutMembersInput {
  create: [GroupCreateWithoutMembersInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  delete: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutMembersInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutMembersInput!]
}

input GroupUpdateWithoutMembersDataInput {
  name: String
  workspace: WorkspaceUpdateOneInput
}

input GroupUpdateWithWhereUniqueWithoutMembersInput {
  where: GroupWhereUniqueInput!
  data: GroupUpdateWithoutMembersDataInput!
}

input GroupUpsertWithWhereUniqueWithoutMembersInput {
  where: GroupWhereUniqueInput!
  update: GroupUpdateWithoutMembersDataInput!
  create: GroupCreateWithoutMembersInput!
}

input GroupWhereInput {
  """Logical AND on all given filters."""
  AND: [GroupWhereInput!]

  """Logical OR on all given filters."""
  OR: [GroupWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GroupWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  workspace: WorkspaceWhereInput
  members_every: WorkspaceMemberWhereInput
  members_some: WorkspaceMemberWhereInput
  members_none: WorkspaceMemberWhereInput
}

input GroupWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createWorkspaceMember(data: WorkspaceMemberCreateInput!): WorkspaceMember!
  createGroup(data: GroupCreateInput!): Group!
  createUserVacation(data: UserVacationCreateInput!): UserVacation!
  createUserWorkHours(data: UserWorkHoursCreateInput!): UserWorkHours!
  createWorkspace(data: WorkspaceCreateInput!): Workspace!
  createUser(data: UserCreateInput!): User!
  updateWorkspaceMember(data: WorkspaceMemberUpdateInput!, where: WorkspaceMemberWhereUniqueInput!): WorkspaceMember
  updateGroup(data: GroupUpdateInput!, where: GroupWhereUniqueInput!): Group
  updateUserVacation(data: UserVacationUpdateInput!, where: UserVacationWhereUniqueInput!): UserVacation
  updateUserWorkHours(data: UserWorkHoursUpdateInput!, where: UserWorkHoursWhereUniqueInput!): UserWorkHours
  updateWorkspace(data: WorkspaceUpdateInput!, where: WorkspaceWhereUniqueInput!): Workspace
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteWorkspaceMember(where: WorkspaceMemberWhereUniqueInput!): WorkspaceMember
  deleteGroup(where: GroupWhereUniqueInput!): Group
  deleteUserVacation(where: UserVacationWhereUniqueInput!): UserVacation
  deleteUserWorkHours(where: UserWorkHoursWhereUniqueInput!): UserWorkHours
  deleteWorkspace(where: WorkspaceWhereUniqueInput!): Workspace
  deleteUser(where: UserWhereUniqueInput!): User
  upsertWorkspaceMember(where: WorkspaceMemberWhereUniqueInput!, create: WorkspaceMemberCreateInput!, update: WorkspaceMemberUpdateInput!): WorkspaceMember!
  upsertGroup(where: GroupWhereUniqueInput!, create: GroupCreateInput!, update: GroupUpdateInput!): Group!
  upsertUserVacation(where: UserVacationWhereUniqueInput!, create: UserVacationCreateInput!, update: UserVacationUpdateInput!): UserVacation!
  upsertUserWorkHours(where: UserWorkHoursWhereUniqueInput!, create: UserWorkHoursCreateInput!, update: UserWorkHoursUpdateInput!): UserWorkHours!
  upsertWorkspace(where: WorkspaceWhereUniqueInput!, create: WorkspaceCreateInput!, update: WorkspaceUpdateInput!): Workspace!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyWorkspaceMembers(data: WorkspaceMemberUpdateInput!, where: WorkspaceMemberWhereInput): BatchPayload!
  updateManyGroups(data: GroupUpdateInput!, where: GroupWhereInput): BatchPayload!
  updateManyUserVacations(data: UserVacationUpdateInput!, where: UserVacationWhereInput): BatchPayload!
  updateManyUserWorkHourses(data: UserWorkHoursUpdateInput!, where: UserWorkHoursWhereInput): BatchPayload!
  updateManyWorkspaces(data: WorkspaceUpdateInput!, where: WorkspaceWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  deleteManyWorkspaceMembers(where: WorkspaceMemberWhereInput): BatchPayload!
  deleteManyGroups(where: GroupWhereInput): BatchPayload!
  deleteManyUserVacations(where: UserVacationWhereInput): BatchPayload!
  deleteManyUserWorkHourses(where: UserWorkHoursWhereInput): BatchPayload!
  deleteManyWorkspaces(where: WorkspaceWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

enum PermissionTags {
  ADMIN
  MEMBER
  GUEST
}

type Query {
  workspaceMembers(where: WorkspaceMemberWhereInput, orderBy: WorkspaceMemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WorkspaceMember]!
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group]!
  userVacations(where: UserVacationWhereInput, orderBy: UserVacationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserVacation]!
  userWorkHourses(where: UserWorkHoursWhereInput, orderBy: UserWorkHoursOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserWorkHours]!
  workspaces(where: WorkspaceWhereInput, orderBy: WorkspaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Workspace]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  workspaceMember(where: WorkspaceMemberWhereUniqueInput!): WorkspaceMember
  group(where: GroupWhereUniqueInput!): Group
  userVacation(where: UserVacationWhereUniqueInput!): UserVacation
  userWorkHours(where: UserWorkHoursWhereUniqueInput!): UserWorkHours
  workspace(where: WorkspaceWhereUniqueInput!): Workspace
  user(where: UserWhereUniqueInput!): User
  workspaceMembersConnection(where: WorkspaceMemberWhereInput, orderBy: WorkspaceMemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WorkspaceMemberConnection!
  groupsConnection(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GroupConnection!
  userVacationsConnection(where: UserVacationWhereInput, orderBy: UserVacationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserVacationConnection!
  userWorkHoursesConnection(where: UserWorkHoursWhereInput, orderBy: UserWorkHoursOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserWorkHoursConnection!
  workspacesConnection(where: WorkspaceWhereInput, orderBy: WorkspaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WorkspaceConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  workspaceMember(where: WorkspaceMemberSubscriptionWhereInput): WorkspaceMemberSubscriptionPayload
  group(where: GroupSubscriptionWhereInput): GroupSubscriptionPayload
  userVacation(where: UserVacationSubscriptionWhereInput): UserVacationSubscriptionPayload
  userWorkHours(where: UserWorkHoursSubscriptionWhereInput): UserWorkHoursSubscriptionPayload
  workspace(where: WorkspaceSubscriptionWhereInput): WorkspaceSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
  firstName: String!
  profilePhoto: String
  email: String!
  username: String
  contactInfo: String
  profession: String
  timezone: String!
  baseCity: String
  baseCountry: String
  baseLatitude: Float
  baseLongitude: Float
  daysOff: [Int!]!
  memberOf(where: WorkspaceMemberWhereInput, orderBy: WorkspaceMemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WorkspaceMember!]
  vacations(where: UserVacationWhereInput, orderBy: UserVacationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserVacation!]
  workHours(where: UserWorkHoursWhereInput): UserWorkHours
  googleProviderId: String
  pendingSetup: Boolean
  deletedAt: DateTime
  lastSeen: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreatedaysOffInput {
  set: [Int!]
}

input UserCreateInput {
  name: String!
  firstName: String!
  profilePhoto: String
  email: String!
  username: String
  contactInfo: String
  profession: String
  timezone: String!
  baseCity: String
  baseCountry: String
  baseLatitude: Float
  baseLongitude: Float
  googleProviderId: String
  pendingSetup: Boolean
  deletedAt: DateTime
  lastSeen: DateTime
  daysOff: UserCreatedaysOffInput
  memberOf: WorkspaceMemberCreateManyWithoutUserInput
  vacations: UserVacationCreateManyWithoutUserInput
  workHours: UserWorkHoursCreateOneWithoutUserInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutMemberOfInput {
  create: UserCreateWithoutMemberOfInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutVacationsInput {
  create: UserCreateWithoutVacationsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutWorkHoursInput {
  create: UserCreateWithoutWorkHoursInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutMemberOfInput {
  name: String!
  firstName: String!
  profilePhoto: String
  email: String!
  username: String
  contactInfo: String
  profession: String
  timezone: String!
  baseCity: String
  baseCountry: String
  baseLatitude: Float
  baseLongitude: Float
  googleProviderId: String
  pendingSetup: Boolean
  deletedAt: DateTime
  lastSeen: DateTime
  daysOff: UserCreatedaysOffInput
  vacations: UserVacationCreateManyWithoutUserInput
  workHours: UserWorkHoursCreateOneWithoutUserInput
}

input UserCreateWithoutVacationsInput {
  name: String!
  firstName: String!
  profilePhoto: String
  email: String!
  username: String
  contactInfo: String
  profession: String
  timezone: String!
  baseCity: String
  baseCountry: String
  baseLatitude: Float
  baseLongitude: Float
  googleProviderId: String
  pendingSetup: Boolean
  deletedAt: DateTime
  lastSeen: DateTime
  daysOff: UserCreatedaysOffInput
  memberOf: WorkspaceMemberCreateManyWithoutUserInput
  workHours: UserWorkHoursCreateOneWithoutUserInput
}

input UserCreateWithoutWorkHoursInput {
  name: String!
  firstName: String!
  profilePhoto: String
  email: String!
  username: String
  contactInfo: String
  profession: String
  timezone: String!
  baseCity: String
  baseCountry: String
  baseLatitude: Float
  baseLongitude: Float
  googleProviderId: String
  pendingSetup: Boolean
  deletedAt: DateTime
  lastSeen: DateTime
  daysOff: UserCreatedaysOffInput
  memberOf: WorkspaceMemberCreateManyWithoutUserInput
  vacations: UserVacationCreateManyWithoutUserInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  firstName_ASC
  firstName_DESC
  profilePhoto_ASC
  profilePhoto_DESC
  email_ASC
  email_DESC
  username_ASC
  username_DESC
  contactInfo_ASC
  contactInfo_DESC
  profession_ASC
  profession_DESC
  timezone_ASC
  timezone_DESC
  baseCity_ASC
  baseCity_DESC
  baseCountry_ASC
  baseCountry_DESC
  baseLatitude_ASC
  baseLatitude_DESC
  baseLongitude_ASC
  baseLongitude_DESC
  googleProviderId_ASC
  googleProviderId_DESC
  pendingSetup_ASC
  pendingSetup_DESC
  deletedAt_ASC
  deletedAt_DESC
  lastSeen_ASC
  lastSeen_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  firstName: String!
  profilePhoto: String
  email: String!
  username: String
  contactInfo: String
  profession: String
  timezone: String!
  baseCity: String
  baseCountry: String
  baseLatitude: Float
  baseLongitude: Float
  daysOff: [Int!]!
  googleProviderId: String
  pendingSetup: Boolean
  deletedAt: DateTime
  lastSeen: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  name: String
  firstName: String
  profilePhoto: String
  email: String
  username: String
  contactInfo: String
  profession: String
  timezone: String
  baseCity: String
  baseCountry: String
  baseLatitude: Float
  baseLongitude: Float
  googleProviderId: String
  pendingSetup: Boolean
  deletedAt: DateTime
  lastSeen: DateTime
  daysOff: UserUpdatedaysOffInput
  memberOf: WorkspaceMemberUpdateManyWithoutUserInput
  vacations: UserVacationUpdateManyWithoutUserInput
  workHours: UserWorkHoursUpdateOneWithoutUserInput
}

input UserUpdatedaysOffInput {
  set: [Int!]
}

input UserUpdateInput {
  name: String
  firstName: String
  profilePhoto: String
  email: String
  username: String
  contactInfo: String
  profession: String
  timezone: String
  baseCity: String
  baseCountry: String
  baseLatitude: Float
  baseLongitude: Float
  googleProviderId: String
  pendingSetup: Boolean
  deletedAt: DateTime
  lastSeen: DateTime
  daysOff: UserUpdatedaysOffInput
  memberOf: WorkspaceMemberUpdateManyWithoutUserInput
  vacations: UserVacationUpdateManyWithoutUserInput
  workHours: UserWorkHoursUpdateOneWithoutUserInput
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneWithoutMemberOfInput {
  create: UserCreateWithoutMemberOfInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutMemberOfDataInput
  upsert: UserUpsertWithoutMemberOfInput
}

input UserUpdateOneWithoutVacationsInput {
  create: UserCreateWithoutVacationsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutVacationsDataInput
  upsert: UserUpsertWithoutVacationsInput
}

input UserUpdateOneWithoutWorkHoursInput {
  create: UserCreateWithoutWorkHoursInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutWorkHoursDataInput
  upsert: UserUpsertWithoutWorkHoursInput
}

input UserUpdateWithoutMemberOfDataInput {
  name: String
  firstName: String
  profilePhoto: String
  email: String
  username: String
  contactInfo: String
  profession: String
  timezone: String
  baseCity: String
  baseCountry: String
  baseLatitude: Float
  baseLongitude: Float
  googleProviderId: String
  pendingSetup: Boolean
  deletedAt: DateTime
  lastSeen: DateTime
  daysOff: UserUpdatedaysOffInput
  vacations: UserVacationUpdateManyWithoutUserInput
  workHours: UserWorkHoursUpdateOneWithoutUserInput
}

input UserUpdateWithoutVacationsDataInput {
  name: String
  firstName: String
  profilePhoto: String
  email: String
  username: String
  contactInfo: String
  profession: String
  timezone: String
  baseCity: String
  baseCountry: String
  baseLatitude: Float
  baseLongitude: Float
  googleProviderId: String
  pendingSetup: Boolean
  deletedAt: DateTime
  lastSeen: DateTime
  daysOff: UserUpdatedaysOffInput
  memberOf: WorkspaceMemberUpdateManyWithoutUserInput
  workHours: UserWorkHoursUpdateOneWithoutUserInput
}

input UserUpdateWithoutWorkHoursDataInput {
  name: String
  firstName: String
  profilePhoto: String
  email: String
  username: String
  contactInfo: String
  profession: String
  timezone: String
  baseCity: String
  baseCountry: String
  baseLatitude: Float
  baseLongitude: Float
  googleProviderId: String
  pendingSetup: Boolean
  deletedAt: DateTime
  lastSeen: DateTime
  daysOff: UserUpdatedaysOffInput
  memberOf: WorkspaceMemberUpdateManyWithoutUserInput
  vacations: UserVacationUpdateManyWithoutUserInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutMemberOfInput {
  update: UserUpdateWithoutMemberOfDataInput!
  create: UserCreateWithoutMemberOfInput!
}

input UserUpsertWithoutVacationsInput {
  update: UserUpdateWithoutVacationsDataInput!
  create: UserCreateWithoutVacationsInput!
}

input UserUpsertWithoutWorkHoursInput {
  update: UserUpdateWithoutWorkHoursDataInput!
  create: UserCreateWithoutWorkHoursInput!
}

type UserVacation implements Node {
  id: ID!
  user(where: UserWhereInput): User!
  from: DateTime!
  to: DateTime!
  timezone: String!
  city: String
  country: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type UserVacationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserVacationEdge]!
  aggregate: AggregateUserVacation!
}

input UserVacationCreateInput {
  from: DateTime!
  to: DateTime!
  timezone: String!
  city: String
  country: String
  user: UserCreateOneWithoutVacationsInput!
}

input UserVacationCreateManyWithoutUserInput {
  create: [UserVacationCreateWithoutUserInput!]
  connect: [UserVacationWhereUniqueInput!]
}

input UserVacationCreateWithoutUserInput {
  from: DateTime!
  to: DateTime!
  timezone: String!
  city: String
  country: String
}

"""An edge in a connection."""
type UserVacationEdge {
  """The item at the end of the edge."""
  node: UserVacation!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserVacationOrderByInput {
  id_ASC
  id_DESC
  from_ASC
  from_DESC
  to_ASC
  to_DESC
  timezone_ASC
  timezone_DESC
  city_ASC
  city_DESC
  country_ASC
  country_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserVacationPreviousValues {
  id: ID!
  from: DateTime!
  to: DateTime!
  timezone: String!
  city: String
  country: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserVacationSubscriptionPayload {
  mutation: MutationType!
  node: UserVacation
  updatedFields: [String!]
  previousValues: UserVacationPreviousValues
}

input UserVacationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserVacationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserVacationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserVacationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserVacationWhereInput
}

input UserVacationUpdateInput {
  from: DateTime
  to: DateTime
  timezone: String
  city: String
  country: String
  user: UserUpdateOneWithoutVacationsInput
}

input UserVacationUpdateManyWithoutUserInput {
  create: [UserVacationCreateWithoutUserInput!]
  connect: [UserVacationWhereUniqueInput!]
  disconnect: [UserVacationWhereUniqueInput!]
  delete: [UserVacationWhereUniqueInput!]
  update: [UserVacationUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [UserVacationUpsertWithWhereUniqueWithoutUserInput!]
}

input UserVacationUpdateWithoutUserDataInput {
  from: DateTime
  to: DateTime
  timezone: String
  city: String
  country: String
}

input UserVacationUpdateWithWhereUniqueWithoutUserInput {
  where: UserVacationWhereUniqueInput!
  data: UserVacationUpdateWithoutUserDataInput!
}

input UserVacationUpsertWithWhereUniqueWithoutUserInput {
  where: UserVacationWhereUniqueInput!
  update: UserVacationUpdateWithoutUserDataInput!
  create: UserVacationCreateWithoutUserInput!
}

input UserVacationWhereInput {
  """Logical AND on all given filters."""
  AND: [UserVacationWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserVacationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserVacationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  from: DateTime

  """All values that are not equal to given value."""
  from_not: DateTime

  """All values that are contained in given list."""
  from_in: [DateTime!]

  """All values that are not contained in given list."""
  from_not_in: [DateTime!]

  """All values less than the given value."""
  from_lt: DateTime

  """All values less than or equal the given value."""
  from_lte: DateTime

  """All values greater than the given value."""
  from_gt: DateTime

  """All values greater than or equal the given value."""
  from_gte: DateTime
  to: DateTime

  """All values that are not equal to given value."""
  to_not: DateTime

  """All values that are contained in given list."""
  to_in: [DateTime!]

  """All values that are not contained in given list."""
  to_not_in: [DateTime!]

  """All values less than the given value."""
  to_lt: DateTime

  """All values less than or equal the given value."""
  to_lte: DateTime

  """All values greater than the given value."""
  to_gt: DateTime

  """All values greater than or equal the given value."""
  to_gte: DateTime
  timezone: String

  """All values that are not equal to given value."""
  timezone_not: String

  """All values that are contained in given list."""
  timezone_in: [String!]

  """All values that are not contained in given list."""
  timezone_not_in: [String!]

  """All values less than the given value."""
  timezone_lt: String

  """All values less than or equal the given value."""
  timezone_lte: String

  """All values greater than the given value."""
  timezone_gt: String

  """All values greater than or equal the given value."""
  timezone_gte: String

  """All values containing the given string."""
  timezone_contains: String

  """All values not containing the given string."""
  timezone_not_contains: String

  """All values starting with the given string."""
  timezone_starts_with: String

  """All values not starting with the given string."""
  timezone_not_starts_with: String

  """All values ending with the given string."""
  timezone_ends_with: String

  """All values not ending with the given string."""
  timezone_not_ends_with: String
  city: String

  """All values that are not equal to given value."""
  city_not: String

  """All values that are contained in given list."""
  city_in: [String!]

  """All values that are not contained in given list."""
  city_not_in: [String!]

  """All values less than the given value."""
  city_lt: String

  """All values less than or equal the given value."""
  city_lte: String

  """All values greater than the given value."""
  city_gt: String

  """All values greater than or equal the given value."""
  city_gte: String

  """All values containing the given string."""
  city_contains: String

  """All values not containing the given string."""
  city_not_contains: String

  """All values starting with the given string."""
  city_starts_with: String

  """All values not starting with the given string."""
  city_not_starts_with: String

  """All values ending with the given string."""
  city_ends_with: String

  """All values not ending with the given string."""
  city_not_ends_with: String
  country: String

  """All values that are not equal to given value."""
  country_not: String

  """All values that are contained in given list."""
  country_in: [String!]

  """All values that are not contained in given list."""
  country_not_in: [String!]

  """All values less than the given value."""
  country_lt: String

  """All values less than or equal the given value."""
  country_lte: String

  """All values greater than the given value."""
  country_gt: String

  """All values greater than or equal the given value."""
  country_gte: String

  """All values containing the given string."""
  country_contains: String

  """All values not containing the given string."""
  country_not_contains: String

  """All values starting with the given string."""
  country_starts_with: String

  """All values not starting with the given string."""
  country_not_starts_with: String

  """All values ending with the given string."""
  country_ends_with: String

  """All values not ending with the given string."""
  country_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  user: UserWhereInput
}

input UserVacationWhereUniqueInput {
  id: ID
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  profilePhoto: String

  """All values that are not equal to given value."""
  profilePhoto_not: String

  """All values that are contained in given list."""
  profilePhoto_in: [String!]

  """All values that are not contained in given list."""
  profilePhoto_not_in: [String!]

  """All values less than the given value."""
  profilePhoto_lt: String

  """All values less than or equal the given value."""
  profilePhoto_lte: String

  """All values greater than the given value."""
  profilePhoto_gt: String

  """All values greater than or equal the given value."""
  profilePhoto_gte: String

  """All values containing the given string."""
  profilePhoto_contains: String

  """All values not containing the given string."""
  profilePhoto_not_contains: String

  """All values starting with the given string."""
  profilePhoto_starts_with: String

  """All values not starting with the given string."""
  profilePhoto_not_starts_with: String

  """All values ending with the given string."""
  profilePhoto_ends_with: String

  """All values not ending with the given string."""
  profilePhoto_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  contactInfo: String

  """All values that are not equal to given value."""
  contactInfo_not: String

  """All values that are contained in given list."""
  contactInfo_in: [String!]

  """All values that are not contained in given list."""
  contactInfo_not_in: [String!]

  """All values less than the given value."""
  contactInfo_lt: String

  """All values less than or equal the given value."""
  contactInfo_lte: String

  """All values greater than the given value."""
  contactInfo_gt: String

  """All values greater than or equal the given value."""
  contactInfo_gte: String

  """All values containing the given string."""
  contactInfo_contains: String

  """All values not containing the given string."""
  contactInfo_not_contains: String

  """All values starting with the given string."""
  contactInfo_starts_with: String

  """All values not starting with the given string."""
  contactInfo_not_starts_with: String

  """All values ending with the given string."""
  contactInfo_ends_with: String

  """All values not ending with the given string."""
  contactInfo_not_ends_with: String
  profession: String

  """All values that are not equal to given value."""
  profession_not: String

  """All values that are contained in given list."""
  profession_in: [String!]

  """All values that are not contained in given list."""
  profession_not_in: [String!]

  """All values less than the given value."""
  profession_lt: String

  """All values less than or equal the given value."""
  profession_lte: String

  """All values greater than the given value."""
  profession_gt: String

  """All values greater than or equal the given value."""
  profession_gte: String

  """All values containing the given string."""
  profession_contains: String

  """All values not containing the given string."""
  profession_not_contains: String

  """All values starting with the given string."""
  profession_starts_with: String

  """All values not starting with the given string."""
  profession_not_starts_with: String

  """All values ending with the given string."""
  profession_ends_with: String

  """All values not ending with the given string."""
  profession_not_ends_with: String
  timezone: String

  """All values that are not equal to given value."""
  timezone_not: String

  """All values that are contained in given list."""
  timezone_in: [String!]

  """All values that are not contained in given list."""
  timezone_not_in: [String!]

  """All values less than the given value."""
  timezone_lt: String

  """All values less than or equal the given value."""
  timezone_lte: String

  """All values greater than the given value."""
  timezone_gt: String

  """All values greater than or equal the given value."""
  timezone_gte: String

  """All values containing the given string."""
  timezone_contains: String

  """All values not containing the given string."""
  timezone_not_contains: String

  """All values starting with the given string."""
  timezone_starts_with: String

  """All values not starting with the given string."""
  timezone_not_starts_with: String

  """All values ending with the given string."""
  timezone_ends_with: String

  """All values not ending with the given string."""
  timezone_not_ends_with: String
  baseCity: String

  """All values that are not equal to given value."""
  baseCity_not: String

  """All values that are contained in given list."""
  baseCity_in: [String!]

  """All values that are not contained in given list."""
  baseCity_not_in: [String!]

  """All values less than the given value."""
  baseCity_lt: String

  """All values less than or equal the given value."""
  baseCity_lte: String

  """All values greater than the given value."""
  baseCity_gt: String

  """All values greater than or equal the given value."""
  baseCity_gte: String

  """All values containing the given string."""
  baseCity_contains: String

  """All values not containing the given string."""
  baseCity_not_contains: String

  """All values starting with the given string."""
  baseCity_starts_with: String

  """All values not starting with the given string."""
  baseCity_not_starts_with: String

  """All values ending with the given string."""
  baseCity_ends_with: String

  """All values not ending with the given string."""
  baseCity_not_ends_with: String
  baseCountry: String

  """All values that are not equal to given value."""
  baseCountry_not: String

  """All values that are contained in given list."""
  baseCountry_in: [String!]

  """All values that are not contained in given list."""
  baseCountry_not_in: [String!]

  """All values less than the given value."""
  baseCountry_lt: String

  """All values less than or equal the given value."""
  baseCountry_lte: String

  """All values greater than the given value."""
  baseCountry_gt: String

  """All values greater than or equal the given value."""
  baseCountry_gte: String

  """All values containing the given string."""
  baseCountry_contains: String

  """All values not containing the given string."""
  baseCountry_not_contains: String

  """All values starting with the given string."""
  baseCountry_starts_with: String

  """All values not starting with the given string."""
  baseCountry_not_starts_with: String

  """All values ending with the given string."""
  baseCountry_ends_with: String

  """All values not ending with the given string."""
  baseCountry_not_ends_with: String
  baseLatitude: Float

  """All values that are not equal to given value."""
  baseLatitude_not: Float

  """All values that are contained in given list."""
  baseLatitude_in: [Float!]

  """All values that are not contained in given list."""
  baseLatitude_not_in: [Float!]

  """All values less than the given value."""
  baseLatitude_lt: Float

  """All values less than or equal the given value."""
  baseLatitude_lte: Float

  """All values greater than the given value."""
  baseLatitude_gt: Float

  """All values greater than or equal the given value."""
  baseLatitude_gte: Float
  baseLongitude: Float

  """All values that are not equal to given value."""
  baseLongitude_not: Float

  """All values that are contained in given list."""
  baseLongitude_in: [Float!]

  """All values that are not contained in given list."""
  baseLongitude_not_in: [Float!]

  """All values less than the given value."""
  baseLongitude_lt: Float

  """All values less than or equal the given value."""
  baseLongitude_lte: Float

  """All values greater than the given value."""
  baseLongitude_gt: Float

  """All values greater than or equal the given value."""
  baseLongitude_gte: Float
  googleProviderId: String

  """All values that are not equal to given value."""
  googleProviderId_not: String

  """All values that are contained in given list."""
  googleProviderId_in: [String!]

  """All values that are not contained in given list."""
  googleProviderId_not_in: [String!]

  """All values less than the given value."""
  googleProviderId_lt: String

  """All values less than or equal the given value."""
  googleProviderId_lte: String

  """All values greater than the given value."""
  googleProviderId_gt: String

  """All values greater than or equal the given value."""
  googleProviderId_gte: String

  """All values containing the given string."""
  googleProviderId_contains: String

  """All values not containing the given string."""
  googleProviderId_not_contains: String

  """All values starting with the given string."""
  googleProviderId_starts_with: String

  """All values not starting with the given string."""
  googleProviderId_not_starts_with: String

  """All values ending with the given string."""
  googleProviderId_ends_with: String

  """All values not ending with the given string."""
  googleProviderId_not_ends_with: String
  pendingSetup: Boolean

  """All values that are not equal to given value."""
  pendingSetup_not: Boolean
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  lastSeen: DateTime

  """All values that are not equal to given value."""
  lastSeen_not: DateTime

  """All values that are contained in given list."""
  lastSeen_in: [DateTime!]

  """All values that are not contained in given list."""
  lastSeen_not_in: [DateTime!]

  """All values less than the given value."""
  lastSeen_lt: DateTime

  """All values less than or equal the given value."""
  lastSeen_lte: DateTime

  """All values greater than the given value."""
  lastSeen_gt: DateTime

  """All values greater than or equal the given value."""
  lastSeen_gte: DateTime
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  memberOf_every: WorkspaceMemberWhereInput
  memberOf_some: WorkspaceMemberWhereInput
  memberOf_none: WorkspaceMemberWhereInput
  vacations_every: UserVacationWhereInput
  vacations_some: UserVacationWhereInput
  vacations_none: UserVacationWhereInput
  workHours: UserWorkHoursWhereInput
  _MagicalBackRelation_UserToWorkspace_every: WorkspaceWhereInput
  _MagicalBackRelation_UserToWorkspace_some: WorkspaceWhereInput
  _MagicalBackRelation_UserToWorkspace_none: WorkspaceWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type UserWorkHours implements Node {
  id: ID!
  user(where: UserWhereInput): User!
  automaticUpdate: Boolean
  allDaysFrom: String
  allDaysTo: String
  sundayFrom: String
  sundayTo: String
  tuesdayFrom: String
  tuesdayTo: String
  mondayFrom: String
  mondayTo: String
  wednesdayFrom: String
  wednesdayTo: String
  thursdayFrom: String
  thursdayTo: String
  fridayFrom: String
  fridayTo: String
  saturdayFrom: String
  saturdayTo: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type UserWorkHoursConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserWorkHoursEdge]!
  aggregate: AggregateUserWorkHours!
}

input UserWorkHoursCreateInput {
  automaticUpdate: Boolean
  allDaysFrom: String
  allDaysTo: String
  sundayFrom: String
  sundayTo: String
  tuesdayFrom: String
  tuesdayTo: String
  mondayFrom: String
  mondayTo: String
  wednesdayFrom: String
  wednesdayTo: String
  thursdayFrom: String
  thursdayTo: String
  fridayFrom: String
  fridayTo: String
  saturdayFrom: String
  saturdayTo: String
  user: UserCreateOneWithoutWorkHoursInput!
}

input UserWorkHoursCreateOneWithoutUserInput {
  create: UserWorkHoursCreateWithoutUserInput
  connect: UserWorkHoursWhereUniqueInput
}

input UserWorkHoursCreateWithoutUserInput {
  automaticUpdate: Boolean
  allDaysFrom: String
  allDaysTo: String
  sundayFrom: String
  sundayTo: String
  tuesdayFrom: String
  tuesdayTo: String
  mondayFrom: String
  mondayTo: String
  wednesdayFrom: String
  wednesdayTo: String
  thursdayFrom: String
  thursdayTo: String
  fridayFrom: String
  fridayTo: String
  saturdayFrom: String
  saturdayTo: String
}

"""An edge in a connection."""
type UserWorkHoursEdge {
  """The item at the end of the edge."""
  node: UserWorkHours!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserWorkHoursOrderByInput {
  id_ASC
  id_DESC
  automaticUpdate_ASC
  automaticUpdate_DESC
  allDaysFrom_ASC
  allDaysFrom_DESC
  allDaysTo_ASC
  allDaysTo_DESC
  sundayFrom_ASC
  sundayFrom_DESC
  sundayTo_ASC
  sundayTo_DESC
  tuesdayFrom_ASC
  tuesdayFrom_DESC
  tuesdayTo_ASC
  tuesdayTo_DESC
  mondayFrom_ASC
  mondayFrom_DESC
  mondayTo_ASC
  mondayTo_DESC
  wednesdayFrom_ASC
  wednesdayFrom_DESC
  wednesdayTo_ASC
  wednesdayTo_DESC
  thursdayFrom_ASC
  thursdayFrom_DESC
  thursdayTo_ASC
  thursdayTo_DESC
  fridayFrom_ASC
  fridayFrom_DESC
  fridayTo_ASC
  fridayTo_DESC
  saturdayFrom_ASC
  saturdayFrom_DESC
  saturdayTo_ASC
  saturdayTo_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserWorkHoursPreviousValues {
  id: ID!
  automaticUpdate: Boolean
  allDaysFrom: String
  allDaysTo: String
  sundayFrom: String
  sundayTo: String
  tuesdayFrom: String
  tuesdayTo: String
  mondayFrom: String
  mondayTo: String
  wednesdayFrom: String
  wednesdayTo: String
  thursdayFrom: String
  thursdayTo: String
  fridayFrom: String
  fridayTo: String
  saturdayFrom: String
  saturdayTo: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserWorkHoursSubscriptionPayload {
  mutation: MutationType!
  node: UserWorkHours
  updatedFields: [String!]
  previousValues: UserWorkHoursPreviousValues
}

input UserWorkHoursSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWorkHoursSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWorkHoursSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWorkHoursSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWorkHoursWhereInput
}

input UserWorkHoursUpdateInput {
  automaticUpdate: Boolean
  allDaysFrom: String
  allDaysTo: String
  sundayFrom: String
  sundayTo: String
  tuesdayFrom: String
  tuesdayTo: String
  mondayFrom: String
  mondayTo: String
  wednesdayFrom: String
  wednesdayTo: String
  thursdayFrom: String
  thursdayTo: String
  fridayFrom: String
  fridayTo: String
  saturdayFrom: String
  saturdayTo: String
  user: UserUpdateOneWithoutWorkHoursInput
}

input UserWorkHoursUpdateOneWithoutUserInput {
  create: UserWorkHoursCreateWithoutUserInput
  connect: UserWorkHoursWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserWorkHoursUpdateWithoutUserDataInput
  upsert: UserWorkHoursUpsertWithoutUserInput
}

input UserWorkHoursUpdateWithoutUserDataInput {
  automaticUpdate: Boolean
  allDaysFrom: String
  allDaysTo: String
  sundayFrom: String
  sundayTo: String
  tuesdayFrom: String
  tuesdayTo: String
  mondayFrom: String
  mondayTo: String
  wednesdayFrom: String
  wednesdayTo: String
  thursdayFrom: String
  thursdayTo: String
  fridayFrom: String
  fridayTo: String
  saturdayFrom: String
  saturdayTo: String
}

input UserWorkHoursUpsertWithoutUserInput {
  update: UserWorkHoursUpdateWithoutUserDataInput!
  create: UserWorkHoursCreateWithoutUserInput!
}

input UserWorkHoursWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWorkHoursWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWorkHoursWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWorkHoursWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  automaticUpdate: Boolean

  """All values that are not equal to given value."""
  automaticUpdate_not: Boolean
  allDaysFrom: String

  """All values that are not equal to given value."""
  allDaysFrom_not: String

  """All values that are contained in given list."""
  allDaysFrom_in: [String!]

  """All values that are not contained in given list."""
  allDaysFrom_not_in: [String!]

  """All values less than the given value."""
  allDaysFrom_lt: String

  """All values less than or equal the given value."""
  allDaysFrom_lte: String

  """All values greater than the given value."""
  allDaysFrom_gt: String

  """All values greater than or equal the given value."""
  allDaysFrom_gte: String

  """All values containing the given string."""
  allDaysFrom_contains: String

  """All values not containing the given string."""
  allDaysFrom_not_contains: String

  """All values starting with the given string."""
  allDaysFrom_starts_with: String

  """All values not starting with the given string."""
  allDaysFrom_not_starts_with: String

  """All values ending with the given string."""
  allDaysFrom_ends_with: String

  """All values not ending with the given string."""
  allDaysFrom_not_ends_with: String
  allDaysTo: String

  """All values that are not equal to given value."""
  allDaysTo_not: String

  """All values that are contained in given list."""
  allDaysTo_in: [String!]

  """All values that are not contained in given list."""
  allDaysTo_not_in: [String!]

  """All values less than the given value."""
  allDaysTo_lt: String

  """All values less than or equal the given value."""
  allDaysTo_lte: String

  """All values greater than the given value."""
  allDaysTo_gt: String

  """All values greater than or equal the given value."""
  allDaysTo_gte: String

  """All values containing the given string."""
  allDaysTo_contains: String

  """All values not containing the given string."""
  allDaysTo_not_contains: String

  """All values starting with the given string."""
  allDaysTo_starts_with: String

  """All values not starting with the given string."""
  allDaysTo_not_starts_with: String

  """All values ending with the given string."""
  allDaysTo_ends_with: String

  """All values not ending with the given string."""
  allDaysTo_not_ends_with: String
  sundayFrom: String

  """All values that are not equal to given value."""
  sundayFrom_not: String

  """All values that are contained in given list."""
  sundayFrom_in: [String!]

  """All values that are not contained in given list."""
  sundayFrom_not_in: [String!]

  """All values less than the given value."""
  sundayFrom_lt: String

  """All values less than or equal the given value."""
  sundayFrom_lte: String

  """All values greater than the given value."""
  sundayFrom_gt: String

  """All values greater than or equal the given value."""
  sundayFrom_gte: String

  """All values containing the given string."""
  sundayFrom_contains: String

  """All values not containing the given string."""
  sundayFrom_not_contains: String

  """All values starting with the given string."""
  sundayFrom_starts_with: String

  """All values not starting with the given string."""
  sundayFrom_not_starts_with: String

  """All values ending with the given string."""
  sundayFrom_ends_with: String

  """All values not ending with the given string."""
  sundayFrom_not_ends_with: String
  sundayTo: String

  """All values that are not equal to given value."""
  sundayTo_not: String

  """All values that are contained in given list."""
  sundayTo_in: [String!]

  """All values that are not contained in given list."""
  sundayTo_not_in: [String!]

  """All values less than the given value."""
  sundayTo_lt: String

  """All values less than or equal the given value."""
  sundayTo_lte: String

  """All values greater than the given value."""
  sundayTo_gt: String

  """All values greater than or equal the given value."""
  sundayTo_gte: String

  """All values containing the given string."""
  sundayTo_contains: String

  """All values not containing the given string."""
  sundayTo_not_contains: String

  """All values starting with the given string."""
  sundayTo_starts_with: String

  """All values not starting with the given string."""
  sundayTo_not_starts_with: String

  """All values ending with the given string."""
  sundayTo_ends_with: String

  """All values not ending with the given string."""
  sundayTo_not_ends_with: String
  tuesdayFrom: String

  """All values that are not equal to given value."""
  tuesdayFrom_not: String

  """All values that are contained in given list."""
  tuesdayFrom_in: [String!]

  """All values that are not contained in given list."""
  tuesdayFrom_not_in: [String!]

  """All values less than the given value."""
  tuesdayFrom_lt: String

  """All values less than or equal the given value."""
  tuesdayFrom_lte: String

  """All values greater than the given value."""
  tuesdayFrom_gt: String

  """All values greater than or equal the given value."""
  tuesdayFrom_gte: String

  """All values containing the given string."""
  tuesdayFrom_contains: String

  """All values not containing the given string."""
  tuesdayFrom_not_contains: String

  """All values starting with the given string."""
  tuesdayFrom_starts_with: String

  """All values not starting with the given string."""
  tuesdayFrom_not_starts_with: String

  """All values ending with the given string."""
  tuesdayFrom_ends_with: String

  """All values not ending with the given string."""
  tuesdayFrom_not_ends_with: String
  tuesdayTo: String

  """All values that are not equal to given value."""
  tuesdayTo_not: String

  """All values that are contained in given list."""
  tuesdayTo_in: [String!]

  """All values that are not contained in given list."""
  tuesdayTo_not_in: [String!]

  """All values less than the given value."""
  tuesdayTo_lt: String

  """All values less than or equal the given value."""
  tuesdayTo_lte: String

  """All values greater than the given value."""
  tuesdayTo_gt: String

  """All values greater than or equal the given value."""
  tuesdayTo_gte: String

  """All values containing the given string."""
  tuesdayTo_contains: String

  """All values not containing the given string."""
  tuesdayTo_not_contains: String

  """All values starting with the given string."""
  tuesdayTo_starts_with: String

  """All values not starting with the given string."""
  tuesdayTo_not_starts_with: String

  """All values ending with the given string."""
  tuesdayTo_ends_with: String

  """All values not ending with the given string."""
  tuesdayTo_not_ends_with: String
  mondayFrom: String

  """All values that are not equal to given value."""
  mondayFrom_not: String

  """All values that are contained in given list."""
  mondayFrom_in: [String!]

  """All values that are not contained in given list."""
  mondayFrom_not_in: [String!]

  """All values less than the given value."""
  mondayFrom_lt: String

  """All values less than or equal the given value."""
  mondayFrom_lte: String

  """All values greater than the given value."""
  mondayFrom_gt: String

  """All values greater than or equal the given value."""
  mondayFrom_gte: String

  """All values containing the given string."""
  mondayFrom_contains: String

  """All values not containing the given string."""
  mondayFrom_not_contains: String

  """All values starting with the given string."""
  mondayFrom_starts_with: String

  """All values not starting with the given string."""
  mondayFrom_not_starts_with: String

  """All values ending with the given string."""
  mondayFrom_ends_with: String

  """All values not ending with the given string."""
  mondayFrom_not_ends_with: String
  mondayTo: String

  """All values that are not equal to given value."""
  mondayTo_not: String

  """All values that are contained in given list."""
  mondayTo_in: [String!]

  """All values that are not contained in given list."""
  mondayTo_not_in: [String!]

  """All values less than the given value."""
  mondayTo_lt: String

  """All values less than or equal the given value."""
  mondayTo_lte: String

  """All values greater than the given value."""
  mondayTo_gt: String

  """All values greater than or equal the given value."""
  mondayTo_gte: String

  """All values containing the given string."""
  mondayTo_contains: String

  """All values not containing the given string."""
  mondayTo_not_contains: String

  """All values starting with the given string."""
  mondayTo_starts_with: String

  """All values not starting with the given string."""
  mondayTo_not_starts_with: String

  """All values ending with the given string."""
  mondayTo_ends_with: String

  """All values not ending with the given string."""
  mondayTo_not_ends_with: String
  wednesdayFrom: String

  """All values that are not equal to given value."""
  wednesdayFrom_not: String

  """All values that are contained in given list."""
  wednesdayFrom_in: [String!]

  """All values that are not contained in given list."""
  wednesdayFrom_not_in: [String!]

  """All values less than the given value."""
  wednesdayFrom_lt: String

  """All values less than or equal the given value."""
  wednesdayFrom_lte: String

  """All values greater than the given value."""
  wednesdayFrom_gt: String

  """All values greater than or equal the given value."""
  wednesdayFrom_gte: String

  """All values containing the given string."""
  wednesdayFrom_contains: String

  """All values not containing the given string."""
  wednesdayFrom_not_contains: String

  """All values starting with the given string."""
  wednesdayFrom_starts_with: String

  """All values not starting with the given string."""
  wednesdayFrom_not_starts_with: String

  """All values ending with the given string."""
  wednesdayFrom_ends_with: String

  """All values not ending with the given string."""
  wednesdayFrom_not_ends_with: String
  wednesdayTo: String

  """All values that are not equal to given value."""
  wednesdayTo_not: String

  """All values that are contained in given list."""
  wednesdayTo_in: [String!]

  """All values that are not contained in given list."""
  wednesdayTo_not_in: [String!]

  """All values less than the given value."""
  wednesdayTo_lt: String

  """All values less than or equal the given value."""
  wednesdayTo_lte: String

  """All values greater than the given value."""
  wednesdayTo_gt: String

  """All values greater than or equal the given value."""
  wednesdayTo_gte: String

  """All values containing the given string."""
  wednesdayTo_contains: String

  """All values not containing the given string."""
  wednesdayTo_not_contains: String

  """All values starting with the given string."""
  wednesdayTo_starts_with: String

  """All values not starting with the given string."""
  wednesdayTo_not_starts_with: String

  """All values ending with the given string."""
  wednesdayTo_ends_with: String

  """All values not ending with the given string."""
  wednesdayTo_not_ends_with: String
  thursdayFrom: String

  """All values that are not equal to given value."""
  thursdayFrom_not: String

  """All values that are contained in given list."""
  thursdayFrom_in: [String!]

  """All values that are not contained in given list."""
  thursdayFrom_not_in: [String!]

  """All values less than the given value."""
  thursdayFrom_lt: String

  """All values less than or equal the given value."""
  thursdayFrom_lte: String

  """All values greater than the given value."""
  thursdayFrom_gt: String

  """All values greater than or equal the given value."""
  thursdayFrom_gte: String

  """All values containing the given string."""
  thursdayFrom_contains: String

  """All values not containing the given string."""
  thursdayFrom_not_contains: String

  """All values starting with the given string."""
  thursdayFrom_starts_with: String

  """All values not starting with the given string."""
  thursdayFrom_not_starts_with: String

  """All values ending with the given string."""
  thursdayFrom_ends_with: String

  """All values not ending with the given string."""
  thursdayFrom_not_ends_with: String
  thursdayTo: String

  """All values that are not equal to given value."""
  thursdayTo_not: String

  """All values that are contained in given list."""
  thursdayTo_in: [String!]

  """All values that are not contained in given list."""
  thursdayTo_not_in: [String!]

  """All values less than the given value."""
  thursdayTo_lt: String

  """All values less than or equal the given value."""
  thursdayTo_lte: String

  """All values greater than the given value."""
  thursdayTo_gt: String

  """All values greater than or equal the given value."""
  thursdayTo_gte: String

  """All values containing the given string."""
  thursdayTo_contains: String

  """All values not containing the given string."""
  thursdayTo_not_contains: String

  """All values starting with the given string."""
  thursdayTo_starts_with: String

  """All values not starting with the given string."""
  thursdayTo_not_starts_with: String

  """All values ending with the given string."""
  thursdayTo_ends_with: String

  """All values not ending with the given string."""
  thursdayTo_not_ends_with: String
  fridayFrom: String

  """All values that are not equal to given value."""
  fridayFrom_not: String

  """All values that are contained in given list."""
  fridayFrom_in: [String!]

  """All values that are not contained in given list."""
  fridayFrom_not_in: [String!]

  """All values less than the given value."""
  fridayFrom_lt: String

  """All values less than or equal the given value."""
  fridayFrom_lte: String

  """All values greater than the given value."""
  fridayFrom_gt: String

  """All values greater than or equal the given value."""
  fridayFrom_gte: String

  """All values containing the given string."""
  fridayFrom_contains: String

  """All values not containing the given string."""
  fridayFrom_not_contains: String

  """All values starting with the given string."""
  fridayFrom_starts_with: String

  """All values not starting with the given string."""
  fridayFrom_not_starts_with: String

  """All values ending with the given string."""
  fridayFrom_ends_with: String

  """All values not ending with the given string."""
  fridayFrom_not_ends_with: String
  fridayTo: String

  """All values that are not equal to given value."""
  fridayTo_not: String

  """All values that are contained in given list."""
  fridayTo_in: [String!]

  """All values that are not contained in given list."""
  fridayTo_not_in: [String!]

  """All values less than the given value."""
  fridayTo_lt: String

  """All values less than or equal the given value."""
  fridayTo_lte: String

  """All values greater than the given value."""
  fridayTo_gt: String

  """All values greater than or equal the given value."""
  fridayTo_gte: String

  """All values containing the given string."""
  fridayTo_contains: String

  """All values not containing the given string."""
  fridayTo_not_contains: String

  """All values starting with the given string."""
  fridayTo_starts_with: String

  """All values not starting with the given string."""
  fridayTo_not_starts_with: String

  """All values ending with the given string."""
  fridayTo_ends_with: String

  """All values not ending with the given string."""
  fridayTo_not_ends_with: String
  saturdayFrom: String

  """All values that are not equal to given value."""
  saturdayFrom_not: String

  """All values that are contained in given list."""
  saturdayFrom_in: [String!]

  """All values that are not contained in given list."""
  saturdayFrom_not_in: [String!]

  """All values less than the given value."""
  saturdayFrom_lt: String

  """All values less than or equal the given value."""
  saturdayFrom_lte: String

  """All values greater than the given value."""
  saturdayFrom_gt: String

  """All values greater than or equal the given value."""
  saturdayFrom_gte: String

  """All values containing the given string."""
  saturdayFrom_contains: String

  """All values not containing the given string."""
  saturdayFrom_not_contains: String

  """All values starting with the given string."""
  saturdayFrom_starts_with: String

  """All values not starting with the given string."""
  saturdayFrom_not_starts_with: String

  """All values ending with the given string."""
  saturdayFrom_ends_with: String

  """All values not ending with the given string."""
  saturdayFrom_not_ends_with: String
  saturdayTo: String

  """All values that are not equal to given value."""
  saturdayTo_not: String

  """All values that are contained in given list."""
  saturdayTo_in: [String!]

  """All values that are not contained in given list."""
  saturdayTo_not_in: [String!]

  """All values less than the given value."""
  saturdayTo_lt: String

  """All values less than or equal the given value."""
  saturdayTo_lte: String

  """All values greater than the given value."""
  saturdayTo_gt: String

  """All values greater than or equal the given value."""
  saturdayTo_gte: String

  """All values containing the given string."""
  saturdayTo_contains: String

  """All values not containing the given string."""
  saturdayTo_not_contains: String

  """All values starting with the given string."""
  saturdayTo_starts_with: String

  """All values not starting with the given string."""
  saturdayTo_not_starts_with: String

  """All values ending with the given string."""
  saturdayTo_ends_with: String

  """All values not ending with the given string."""
  saturdayTo_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  user: UserWhereInput
}

input UserWorkHoursWhereUniqueInput {
  id: ID
}

type Workspace implements Node {
  id: ID!
  members(where: WorkspaceMemberWhereInput, orderBy: WorkspaceMemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WorkspaceMember!]
  name: String!
  slug: String!
  creator(where: UserWhereInput): User!
  profilePhoto: String
  twistWorkspaceId: Int
  deletedAt: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type WorkspaceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [WorkspaceEdge]!
  aggregate: AggregateWorkspace!
}

input WorkspaceCreateInput {
  name: String!
  slug: String!
  profilePhoto: String
  twistWorkspaceId: Int
  deletedAt: DateTime
  members: WorkspaceMemberCreateManyWithoutWorkspaceInput
  creator: UserCreateOneInput!
}

input WorkspaceCreateOneInput {
  create: WorkspaceCreateInput
  connect: WorkspaceWhereUniqueInput
}

input WorkspaceCreateOneWithoutMembersInput {
  create: WorkspaceCreateWithoutMembersInput
  connect: WorkspaceWhereUniqueInput
}

input WorkspaceCreateWithoutMembersInput {
  name: String!
  slug: String!
  profilePhoto: String
  twistWorkspaceId: Int
  deletedAt: DateTime
  creator: UserCreateOneInput!
}

"""An edge in a connection."""
type WorkspaceEdge {
  """The item at the end of the edge."""
  node: Workspace!

  """A cursor for use in pagination."""
  cursor: String!
}

type WorkspaceMember implements Node {
  id: ID!
  workspace(where: WorkspaceWhereInput): Workspace!
  user(where: UserWhereInput): User!
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group!]
  permissionRole: PermissionTags!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type WorkspaceMemberConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [WorkspaceMemberEdge]!
  aggregate: AggregateWorkspaceMember!
}

input WorkspaceMemberCreateInput {
  permissionRole: PermissionTags
  workspace: WorkspaceCreateOneWithoutMembersInput!
  user: UserCreateOneWithoutMemberOfInput!
  groups: GroupCreateManyWithoutMembersInput
}

input WorkspaceMemberCreateManyWithoutGroupsInput {
  create: [WorkspaceMemberCreateWithoutGroupsInput!]
  connect: [WorkspaceMemberWhereUniqueInput!]
}

input WorkspaceMemberCreateManyWithoutUserInput {
  create: [WorkspaceMemberCreateWithoutUserInput!]
  connect: [WorkspaceMemberWhereUniqueInput!]
}

input WorkspaceMemberCreateManyWithoutWorkspaceInput {
  create: [WorkspaceMemberCreateWithoutWorkspaceInput!]
  connect: [WorkspaceMemberWhereUniqueInput!]
}

input WorkspaceMemberCreateWithoutGroupsInput {
  permissionRole: PermissionTags
  workspace: WorkspaceCreateOneWithoutMembersInput!
  user: UserCreateOneWithoutMemberOfInput!
}

input WorkspaceMemberCreateWithoutUserInput {
  permissionRole: PermissionTags
  workspace: WorkspaceCreateOneWithoutMembersInput!
  groups: GroupCreateManyWithoutMembersInput
}

input WorkspaceMemberCreateWithoutWorkspaceInput {
  permissionRole: PermissionTags
  user: UserCreateOneWithoutMemberOfInput!
  groups: GroupCreateManyWithoutMembersInput
}

"""An edge in a connection."""
type WorkspaceMemberEdge {
  """The item at the end of the edge."""
  node: WorkspaceMember!

  """A cursor for use in pagination."""
  cursor: String!
}

enum WorkspaceMemberOrderByInput {
  id_ASC
  id_DESC
  permissionRole_ASC
  permissionRole_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type WorkspaceMemberPreviousValues {
  id: ID!
  permissionRole: PermissionTags!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type WorkspaceMemberSubscriptionPayload {
  mutation: MutationType!
  node: WorkspaceMember
  updatedFields: [String!]
  previousValues: WorkspaceMemberPreviousValues
}

input WorkspaceMemberSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [WorkspaceMemberSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [WorkspaceMemberSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WorkspaceMemberSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: WorkspaceMemberWhereInput
}

input WorkspaceMemberUpdateInput {
  permissionRole: PermissionTags
  workspace: WorkspaceUpdateOneWithoutMembersInput
  user: UserUpdateOneWithoutMemberOfInput
  groups: GroupUpdateManyWithoutMembersInput
}

input WorkspaceMemberUpdateManyWithoutGroupsInput {
  create: [WorkspaceMemberCreateWithoutGroupsInput!]
  connect: [WorkspaceMemberWhereUniqueInput!]
  disconnect: [WorkspaceMemberWhereUniqueInput!]
  delete: [WorkspaceMemberWhereUniqueInput!]
  update: [WorkspaceMemberUpdateWithWhereUniqueWithoutGroupsInput!]
  upsert: [WorkspaceMemberUpsertWithWhereUniqueWithoutGroupsInput!]
}

input WorkspaceMemberUpdateManyWithoutUserInput {
  create: [WorkspaceMemberCreateWithoutUserInput!]
  connect: [WorkspaceMemberWhereUniqueInput!]
  disconnect: [WorkspaceMemberWhereUniqueInput!]
  delete: [WorkspaceMemberWhereUniqueInput!]
  update: [WorkspaceMemberUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [WorkspaceMemberUpsertWithWhereUniqueWithoutUserInput!]
}

input WorkspaceMemberUpdateManyWithoutWorkspaceInput {
  create: [WorkspaceMemberCreateWithoutWorkspaceInput!]
  connect: [WorkspaceMemberWhereUniqueInput!]
  disconnect: [WorkspaceMemberWhereUniqueInput!]
  delete: [WorkspaceMemberWhereUniqueInput!]
  update: [WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInput!]
  upsert: [WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInput!]
}

input WorkspaceMemberUpdateWithoutGroupsDataInput {
  permissionRole: PermissionTags
  workspace: WorkspaceUpdateOneWithoutMembersInput
  user: UserUpdateOneWithoutMemberOfInput
}

input WorkspaceMemberUpdateWithoutUserDataInput {
  permissionRole: PermissionTags
  workspace: WorkspaceUpdateOneWithoutMembersInput
  groups: GroupUpdateManyWithoutMembersInput
}

input WorkspaceMemberUpdateWithoutWorkspaceDataInput {
  permissionRole: PermissionTags
  user: UserUpdateOneWithoutMemberOfInput
  groups: GroupUpdateManyWithoutMembersInput
}

input WorkspaceMemberUpdateWithWhereUniqueWithoutGroupsInput {
  where: WorkspaceMemberWhereUniqueInput!
  data: WorkspaceMemberUpdateWithoutGroupsDataInput!
}

input WorkspaceMemberUpdateWithWhereUniqueWithoutUserInput {
  where: WorkspaceMemberWhereUniqueInput!
  data: WorkspaceMemberUpdateWithoutUserDataInput!
}

input WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: WorkspaceMemberWhereUniqueInput!
  data: WorkspaceMemberUpdateWithoutWorkspaceDataInput!
}

input WorkspaceMemberUpsertWithWhereUniqueWithoutGroupsInput {
  where: WorkspaceMemberWhereUniqueInput!
  update: WorkspaceMemberUpdateWithoutGroupsDataInput!
  create: WorkspaceMemberCreateWithoutGroupsInput!
}

input WorkspaceMemberUpsertWithWhereUniqueWithoutUserInput {
  where: WorkspaceMemberWhereUniqueInput!
  update: WorkspaceMemberUpdateWithoutUserDataInput!
  create: WorkspaceMemberCreateWithoutUserInput!
}

input WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: WorkspaceMemberWhereUniqueInput!
  update: WorkspaceMemberUpdateWithoutWorkspaceDataInput!
  create: WorkspaceMemberCreateWithoutWorkspaceInput!
}

input WorkspaceMemberWhereInput {
  """Logical AND on all given filters."""
  AND: [WorkspaceMemberWhereInput!]

  """Logical OR on all given filters."""
  OR: [WorkspaceMemberWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WorkspaceMemberWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  permissionRole: PermissionTags

  """All values that are not equal to given value."""
  permissionRole_not: PermissionTags

  """All values that are contained in given list."""
  permissionRole_in: [PermissionTags!]

  """All values that are not contained in given list."""
  permissionRole_not_in: [PermissionTags!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  workspace: WorkspaceWhereInput
  user: UserWhereInput
  groups_every: GroupWhereInput
  groups_some: GroupWhereInput
  groups_none: GroupWhereInput
}

input WorkspaceMemberWhereUniqueInput {
  id: ID
}

enum WorkspaceOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  slug_ASC
  slug_DESC
  profilePhoto_ASC
  profilePhoto_DESC
  twistWorkspaceId_ASC
  twistWorkspaceId_DESC
  deletedAt_ASC
  deletedAt_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type WorkspacePreviousValues {
  id: ID!
  name: String!
  slug: String!
  profilePhoto: String
  twistWorkspaceId: Int
  deletedAt: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

type WorkspaceSubscriptionPayload {
  mutation: MutationType!
  node: Workspace
  updatedFields: [String!]
  previousValues: WorkspacePreviousValues
}

input WorkspaceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [WorkspaceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [WorkspaceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WorkspaceSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: WorkspaceWhereInput
}

input WorkspaceUpdateDataInput {
  name: String
  slug: String
  profilePhoto: String
  twistWorkspaceId: Int
  deletedAt: DateTime
  members: WorkspaceMemberUpdateManyWithoutWorkspaceInput
  creator: UserUpdateOneInput
}

input WorkspaceUpdateInput {
  name: String
  slug: String
  profilePhoto: String
  twistWorkspaceId: Int
  deletedAt: DateTime
  members: WorkspaceMemberUpdateManyWithoutWorkspaceInput
  creator: UserUpdateOneInput
}

input WorkspaceUpdateOneInput {
  create: WorkspaceCreateInput
  connect: WorkspaceWhereUniqueInput
  delete: Boolean
  update: WorkspaceUpdateDataInput
  upsert: WorkspaceUpsertNestedInput
}

input WorkspaceUpdateOneWithoutMembersInput {
  create: WorkspaceCreateWithoutMembersInput
  connect: WorkspaceWhereUniqueInput
  delete: Boolean
  update: WorkspaceUpdateWithoutMembersDataInput
  upsert: WorkspaceUpsertWithoutMembersInput
}

input WorkspaceUpdateWithoutMembersDataInput {
  name: String
  slug: String
  profilePhoto: String
  twistWorkspaceId: Int
  deletedAt: DateTime
  creator: UserUpdateOneInput
}

input WorkspaceUpsertNestedInput {
  update: WorkspaceUpdateDataInput!
  create: WorkspaceCreateInput!
}

input WorkspaceUpsertWithoutMembersInput {
  update: WorkspaceUpdateWithoutMembersDataInput!
  create: WorkspaceCreateWithoutMembersInput!
}

input WorkspaceWhereInput {
  """Logical AND on all given filters."""
  AND: [WorkspaceWhereInput!]

  """Logical OR on all given filters."""
  OR: [WorkspaceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WorkspaceWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  profilePhoto: String

  """All values that are not equal to given value."""
  profilePhoto_not: String

  """All values that are contained in given list."""
  profilePhoto_in: [String!]

  """All values that are not contained in given list."""
  profilePhoto_not_in: [String!]

  """All values less than the given value."""
  profilePhoto_lt: String

  """All values less than or equal the given value."""
  profilePhoto_lte: String

  """All values greater than the given value."""
  profilePhoto_gt: String

  """All values greater than or equal the given value."""
  profilePhoto_gte: String

  """All values containing the given string."""
  profilePhoto_contains: String

  """All values not containing the given string."""
  profilePhoto_not_contains: String

  """All values starting with the given string."""
  profilePhoto_starts_with: String

  """All values not starting with the given string."""
  profilePhoto_not_starts_with: String

  """All values ending with the given string."""
  profilePhoto_ends_with: String

  """All values not ending with the given string."""
  profilePhoto_not_ends_with: String
  twistWorkspaceId: Int

  """All values that are not equal to given value."""
  twistWorkspaceId_not: Int

  """All values that are contained in given list."""
  twistWorkspaceId_in: [Int!]

  """All values that are not contained in given list."""
  twistWorkspaceId_not_in: [Int!]

  """All values less than the given value."""
  twistWorkspaceId_lt: Int

  """All values less than or equal the given value."""
  twistWorkspaceId_lte: Int

  """All values greater than the given value."""
  twistWorkspaceId_gt: Int

  """All values greater than or equal the given value."""
  twistWorkspaceId_gte: Int
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  members_every: WorkspaceMemberWhereInput
  members_some: WorkspaceMemberWhereInput
  members_none: WorkspaceMemberWhereInput
  creator: UserWhereInput
  _MagicalBackRelation_GroupToWorkspace_every: GroupWhereInput
  _MagicalBackRelation_GroupToWorkspace_some: GroupWhereInput
  _MagicalBackRelation_GroupToWorkspace_none: GroupWhereInput
}

input WorkspaceWhereUniqueInput {
  id: ID
  slug: String
}
`

const prisma: BindingConstructor<Prisma> = makePrismaBindingClass({ typeDefs })
export { prisma as Prisma }

/**
 * Types
 */

export type WorkspaceMemberOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'permissionRole_ASC'
  | 'permissionRole_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'

export type UserVacationOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'from_ASC'
  | 'from_DESC'
  | 'to_ASC'
  | 'to_DESC'
  | 'timezone_ASC'
  | 'timezone_DESC'
  | 'city_ASC'
  | 'city_DESC'
  | 'country_ASC'
  | 'country_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'

export type GroupOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'

export type UserWorkHoursOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'automaticUpdate_ASC'
  | 'automaticUpdate_DESC'
  | 'allDaysFrom_ASC'
  | 'allDaysFrom_DESC'
  | 'allDaysTo_ASC'
  | 'allDaysTo_DESC'
  | 'sundayFrom_ASC'
  | 'sundayFrom_DESC'
  | 'sundayTo_ASC'
  | 'sundayTo_DESC'
  | 'tuesdayFrom_ASC'
  | 'tuesdayFrom_DESC'
  | 'tuesdayTo_ASC'
  | 'tuesdayTo_DESC'
  | 'mondayFrom_ASC'
  | 'mondayFrom_DESC'
  | 'mondayTo_ASC'
  | 'mondayTo_DESC'
  | 'wednesdayFrom_ASC'
  | 'wednesdayFrom_DESC'
  | 'wednesdayTo_ASC'
  | 'wednesdayTo_DESC'
  | 'thursdayFrom_ASC'
  | 'thursdayFrom_DESC'
  | 'thursdayTo_ASC'
  | 'thursdayTo_DESC'
  | 'fridayFrom_ASC'
  | 'fridayFrom_DESC'
  | 'fridayTo_ASC'
  | 'fridayTo_DESC'
  | 'saturdayFrom_ASC'
  | 'saturdayFrom_DESC'
  | 'saturdayTo_ASC'
  | 'saturdayTo_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'

export type WorkspaceOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'slug_ASC'
  | 'slug_DESC'
  | 'profilePhoto_ASC'
  | 'profilePhoto_DESC'
  | 'twistWorkspaceId_ASC'
  | 'twistWorkspaceId_DESC'
  | 'deletedAt_ASC'
  | 'deletedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'

export type UserOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'firstName_ASC'
  | 'firstName_DESC'
  | 'profilePhoto_ASC'
  | 'profilePhoto_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'username_ASC'
  | 'username_DESC'
  | 'contactInfo_ASC'
  | 'contactInfo_DESC'
  | 'profession_ASC'
  | 'profession_DESC'
  | 'timezone_ASC'
  | 'timezone_DESC'
  | 'baseCity_ASC'
  | 'baseCity_DESC'
  | 'baseCountry_ASC'
  | 'baseCountry_DESC'
  | 'baseLatitude_ASC'
  | 'baseLatitude_DESC'
  | 'baseLongitude_ASC'
  | 'baseLongitude_DESC'
  | 'googleProviderId_ASC'
  | 'googleProviderId_DESC'
  | 'pendingSetup_ASC'
  | 'pendingSetup_DESC'
  | 'deletedAt_ASC'
  | 'deletedAt_DESC'
  | 'lastSeen_ASC'
  | 'lastSeen_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'

export type MutationType = 'CREATED' | 'UPDATED' | 'DELETED'

export type PermissionTags = 'ADMIN' | 'MEMBER' | 'GUEST'

export type UserVacationCreateInput = {|
  from: DateTime,
  to: DateTime,
  timezone: String,
  city?: String,
  country?: String,
  user: UserCreateOneWithoutVacationsInput,
|}

export type WorkspaceMemberWhereInput = {|
  AND?: Array<WorkspaceMemberWhereInput> | WorkspaceMemberWhereInput,
  OR?: Array<WorkspaceMemberWhereInput> | WorkspaceMemberWhereInput,
  NOT?: Array<WorkspaceMemberWhereInput> | WorkspaceMemberWhereInput,
  id?: ID_Input,
  id_not?: ID_Input,
  id_in?: Array<ID_Input> | ID_Input,
  id_not_in?: Array<ID_Input> | ID_Input,
  id_lt?: ID_Input,
  id_lte?: ID_Input,
  id_gt?: ID_Input,
  id_gte?: ID_Input,
  id_contains?: ID_Input,
  id_not_contains?: ID_Input,
  id_starts_with?: ID_Input,
  id_not_starts_with?: ID_Input,
  id_ends_with?: ID_Input,
  id_not_ends_with?: ID_Input,
  permissionRole?: PermissionTags,
  permissionRole_not?: PermissionTags,
  permissionRole_in?: Array<PermissionTags> | PermissionTags,
  permissionRole_not_in?: Array<PermissionTags> | PermissionTags,
  createdAt?: DateTime,
  createdAt_not?: DateTime,
  createdAt_in?: Array<DateTime> | DateTime,
  createdAt_not_in?: Array<DateTime> | DateTime,
  createdAt_lt?: DateTime,
  createdAt_lte?: DateTime,
  createdAt_gt?: DateTime,
  createdAt_gte?: DateTime,
  updatedAt?: DateTime,
  updatedAt_not?: DateTime,
  updatedAt_in?: Array<DateTime> | DateTime,
  updatedAt_not_in?: Array<DateTime> | DateTime,
  updatedAt_lt?: DateTime,
  updatedAt_lte?: DateTime,
  updatedAt_gt?: DateTime,
  updatedAt_gte?: DateTime,
  workspace?: WorkspaceWhereInput,
  user?: UserWhereInput,
  groups_every?: GroupWhereInput,
  groups_some?: GroupWhereInput,
  groups_none?: GroupWhereInput,
|}

export type UserCreateWithoutWorkHoursInput = {|
  name: String,
  firstName: String,
  profilePhoto?: String,
  email: String,
  username?: String,
  contactInfo?: String,
  profession?: String,
  timezone: String,
  baseCity?: String,
  baseCountry?: String,
  baseLatitude?: Float,
  baseLongitude?: Float,
  googleProviderId?: String,
  pendingSetup?: Boolean,
  deletedAt?: DateTime,
  lastSeen?: DateTime,
  daysOff?: UserCreatedaysOffInput,
  memberOf?: WorkspaceMemberCreateManyWithoutUserInput,
  vacations?: UserVacationCreateManyWithoutUserInput,
|}

export type UserVacationWhereInput = {|
  AND?: Array<UserVacationWhereInput> | UserVacationWhereInput,
  OR?: Array<UserVacationWhereInput> | UserVacationWhereInput,
  NOT?: Array<UserVacationWhereInput> | UserVacationWhereInput,
  id?: ID_Input,
  id_not?: ID_Input,
  id_in?: Array<ID_Input> | ID_Input,
  id_not_in?: Array<ID_Input> | ID_Input,
  id_lt?: ID_Input,
  id_lte?: ID_Input,
  id_gt?: ID_Input,
  id_gte?: ID_Input,
  id_contains?: ID_Input,
  id_not_contains?: ID_Input,
  id_starts_with?: ID_Input,
  id_not_starts_with?: ID_Input,
  id_ends_with?: ID_Input,
  id_not_ends_with?: ID_Input,
  from?: DateTime,
  from_not?: DateTime,
  from_in?: Array<DateTime> | DateTime,
  from_not_in?: Array<DateTime> | DateTime,
  from_lt?: DateTime,
  from_lte?: DateTime,
  from_gt?: DateTime,
  from_gte?: DateTime,
  to?: DateTime,
  to_not?: DateTime,
  to_in?: Array<DateTime> | DateTime,
  to_not_in?: Array<DateTime> | DateTime,
  to_lt?: DateTime,
  to_lte?: DateTime,
  to_gt?: DateTime,
  to_gte?: DateTime,
  timezone?: String,
  timezone_not?: String,
  timezone_in?: Array<String> | String,
  timezone_not_in?: Array<String> | String,
  timezone_lt?: String,
  timezone_lte?: String,
  timezone_gt?: String,
  timezone_gte?: String,
  timezone_contains?: String,
  timezone_not_contains?: String,
  timezone_starts_with?: String,
  timezone_not_starts_with?: String,
  timezone_ends_with?: String,
  timezone_not_ends_with?: String,
  city?: String,
  city_not?: String,
  city_in?: Array<String> | String,
  city_not_in?: Array<String> | String,
  city_lt?: String,
  city_lte?: String,
  city_gt?: String,
  city_gte?: String,
  city_contains?: String,
  city_not_contains?: String,
  city_starts_with?: String,
  city_not_starts_with?: String,
  city_ends_with?: String,
  city_not_ends_with?: String,
  country?: String,
  country_not?: String,
  country_in?: Array<String> | String,
  country_not_in?: Array<String> | String,
  country_lt?: String,
  country_lte?: String,
  country_gt?: String,
  country_gte?: String,
  country_contains?: String,
  country_not_contains?: String,
  country_starts_with?: String,
  country_not_starts_with?: String,
  country_ends_with?: String,
  country_not_ends_with?: String,
  createdAt?: DateTime,
  createdAt_not?: DateTime,
  createdAt_in?: Array<DateTime> | DateTime,
  createdAt_not_in?: Array<DateTime> | DateTime,
  createdAt_lt?: DateTime,
  createdAt_lte?: DateTime,
  createdAt_gt?: DateTime,
  createdAt_gte?: DateTime,
  updatedAt?: DateTime,
  updatedAt_not?: DateTime,
  updatedAt_in?: Array<DateTime> | DateTime,
  updatedAt_not_in?: Array<DateTime> | DateTime,
  updatedAt_lt?: DateTime,
  updatedAt_lte?: DateTime,
  updatedAt_gt?: DateTime,
  updatedAt_gte?: DateTime,
  user?: UserWhereInput,
|}

export type WorkspaceMemberUpdateInput = {|
  permissionRole?: PermissionTags,
  workspace?: WorkspaceUpdateOneWithoutMembersInput,
  user?: UserUpdateOneWithoutMemberOfInput,
  groups?: GroupUpdateManyWithoutMembersInput,
|}

export type GroupWhereInput = {|
  AND?: Array<GroupWhereInput> | GroupWhereInput,
  OR?: Array<GroupWhereInput> | GroupWhereInput,
  NOT?: Array<GroupWhereInput> | GroupWhereInput,
  id?: ID_Input,
  id_not?: ID_Input,
  id_in?: Array<ID_Input> | ID_Input,
  id_not_in?: Array<ID_Input> | ID_Input,
  id_lt?: ID_Input,
  id_lte?: ID_Input,
  id_gt?: ID_Input,
  id_gte?: ID_Input,
  id_contains?: ID_Input,
  id_not_contains?: ID_Input,
  id_starts_with?: ID_Input,
  id_not_starts_with?: ID_Input,
  id_ends_with?: ID_Input,
  id_not_ends_with?: ID_Input,
  name?: String,
  name_not?: String,
  name_in?: Array<String> | String,
  name_not_in?: Array<String> | String,
  name_lt?: String,
  name_lte?: String,
  name_gt?: String,
  name_gte?: String,
  name_contains?: String,
  name_not_contains?: String,
  name_starts_with?: String,
  name_not_starts_with?: String,
  name_ends_with?: String,
  name_not_ends_with?: String,
  createdAt?: DateTime,
  createdAt_not?: DateTime,
  createdAt_in?: Array<DateTime> | DateTime,
  createdAt_not_in?: Array<DateTime> | DateTime,
  createdAt_lt?: DateTime,
  createdAt_lte?: DateTime,
  createdAt_gt?: DateTime,
  createdAt_gte?: DateTime,
  updatedAt?: DateTime,
  updatedAt_not?: DateTime,
  updatedAt_in?: Array<DateTime> | DateTime,
  updatedAt_not_in?: Array<DateTime> | DateTime,
  updatedAt_lt?: DateTime,
  updatedAt_lte?: DateTime,
  updatedAt_gt?: DateTime,
  updatedAt_gte?: DateTime,
  workspace?: WorkspaceWhereInput,
  members_every?: WorkspaceMemberWhereInput,
  members_some?: WorkspaceMemberWhereInput,
  members_none?: WorkspaceMemberWhereInput,
|}

export type GroupCreateWithoutMembersInput = {|
  name: String,
  workspace: WorkspaceCreateOneInput,
|}

export type UserWorkHoursUpdateWithoutUserDataInput = {|
  automaticUpdate?: Boolean,
  allDaysFrom?: String,
  allDaysTo?: String,
  sundayFrom?: String,
  sundayTo?: String,
  tuesdayFrom?: String,
  tuesdayTo?: String,
  mondayFrom?: String,
  mondayTo?: String,
  wednesdayFrom?: String,
  wednesdayTo?: String,
  thursdayFrom?: String,
  thursdayTo?: String,
  fridayFrom?: String,
  fridayTo?: String,
  saturdayFrom?: String,
  saturdayTo?: String,
|}

export type WorkspaceCreateOneInput = {|
  create?: WorkspaceCreateInput,
  connect?: WorkspaceWhereUniqueInput,
|}

export type WorkspaceUpdateOneWithoutMembersInput = {|
  create?: WorkspaceCreateWithoutMembersInput,
  connect?: WorkspaceWhereUniqueInput,
  delete?: Boolean,
  update?: WorkspaceUpdateWithoutMembersDataInput,
  upsert?: WorkspaceUpsertWithoutMembersInput,
|}

export type WorkspaceCreateInput = {|
  name: String,
  slug: String,
  profilePhoto?: String,
  twistWorkspaceId?: Int,
  deletedAt?: DateTime,
  members?: WorkspaceMemberCreateManyWithoutWorkspaceInput,
  creator: UserCreateOneInput,
|}

export type WorkspaceSubscriptionWhereInput = {|
  AND?:
    | Array<WorkspaceSubscriptionWhereInput>
    | WorkspaceSubscriptionWhereInput,
  OR?: Array<WorkspaceSubscriptionWhereInput> | WorkspaceSubscriptionWhereInput,
  NOT?:
    | Array<WorkspaceSubscriptionWhereInput>
    | WorkspaceSubscriptionWhereInput,
  mutation_in?: Array<MutationType> | MutationType,
  updatedFields_contains?: String,
  updatedFields_contains_every?: Array<String> | String,
  updatedFields_contains_some?: Array<String> | String,
  node?: WorkspaceWhereInput,
|}

export type WorkspaceMemberCreateManyWithoutWorkspaceInput = {|
  create?:
    | Array<WorkspaceMemberCreateWithoutWorkspaceInput>
    | WorkspaceMemberCreateWithoutWorkspaceInput,
  connect?:
    | Array<WorkspaceMemberWhereUniqueInput>
    | WorkspaceMemberWhereUniqueInput,
|}

export type UserVacationSubscriptionWhereInput = {|
  AND?:
    | Array<UserVacationSubscriptionWhereInput>
    | UserVacationSubscriptionWhereInput,
  OR?:
    | Array<UserVacationSubscriptionWhereInput>
    | UserVacationSubscriptionWhereInput,
  NOT?:
    | Array<UserVacationSubscriptionWhereInput>
    | UserVacationSubscriptionWhereInput,
  mutation_in?: Array<MutationType> | MutationType,
  updatedFields_contains?: String,
  updatedFields_contains_every?: Array<String> | String,
  updatedFields_contains_some?: Array<String> | String,
  node?: UserVacationWhereInput,
|}

export type WorkspaceMemberCreateWithoutWorkspaceInput = {|
  permissionRole?: PermissionTags,
  user: UserCreateOneWithoutMemberOfInput,
  groups?: GroupCreateManyWithoutMembersInput,
|}

export type UserWhereInput = {|
  AND?: Array<UserWhereInput> | UserWhereInput,
  OR?: Array<UserWhereInput> | UserWhereInput,
  NOT?: Array<UserWhereInput> | UserWhereInput,
  id?: ID_Input,
  id_not?: ID_Input,
  id_in?: Array<ID_Input> | ID_Input,
  id_not_in?: Array<ID_Input> | ID_Input,
  id_lt?: ID_Input,
  id_lte?: ID_Input,
  id_gt?: ID_Input,
  id_gte?: ID_Input,
  id_contains?: ID_Input,
  id_not_contains?: ID_Input,
  id_starts_with?: ID_Input,
  id_not_starts_with?: ID_Input,
  id_ends_with?: ID_Input,
  id_not_ends_with?: ID_Input,
  name?: String,
  name_not?: String,
  name_in?: Array<String> | String,
  name_not_in?: Array<String> | String,
  name_lt?: String,
  name_lte?: String,
  name_gt?: String,
  name_gte?: String,
  name_contains?: String,
  name_not_contains?: String,
  name_starts_with?: String,
  name_not_starts_with?: String,
  name_ends_with?: String,
  name_not_ends_with?: String,
  firstName?: String,
  firstName_not?: String,
  firstName_in?: Array<String> | String,
  firstName_not_in?: Array<String> | String,
  firstName_lt?: String,
  firstName_lte?: String,
  firstName_gt?: String,
  firstName_gte?: String,
  firstName_contains?: String,
  firstName_not_contains?: String,
  firstName_starts_with?: String,
  firstName_not_starts_with?: String,
  firstName_ends_with?: String,
  firstName_not_ends_with?: String,
  profilePhoto?: String,
  profilePhoto_not?: String,
  profilePhoto_in?: Array<String> | String,
  profilePhoto_not_in?: Array<String> | String,
  profilePhoto_lt?: String,
  profilePhoto_lte?: String,
  profilePhoto_gt?: String,
  profilePhoto_gte?: String,
  profilePhoto_contains?: String,
  profilePhoto_not_contains?: String,
  profilePhoto_starts_with?: String,
  profilePhoto_not_starts_with?: String,
  profilePhoto_ends_with?: String,
  profilePhoto_not_ends_with?: String,
  email?: String,
  email_not?: String,
  email_in?: Array<String> | String,
  email_not_in?: Array<String> | String,
  email_lt?: String,
  email_lte?: String,
  email_gt?: String,
  email_gte?: String,
  email_contains?: String,
  email_not_contains?: String,
  email_starts_with?: String,
  email_not_starts_with?: String,
  email_ends_with?: String,
  email_not_ends_with?: String,
  username?: String,
  username_not?: String,
  username_in?: Array<String> | String,
  username_not_in?: Array<String> | String,
  username_lt?: String,
  username_lte?: String,
  username_gt?: String,
  username_gte?: String,
  username_contains?: String,
  username_not_contains?: String,
  username_starts_with?: String,
  username_not_starts_with?: String,
  username_ends_with?: String,
  username_not_ends_with?: String,
  contactInfo?: String,
  contactInfo_not?: String,
  contactInfo_in?: Array<String> | String,
  contactInfo_not_in?: Array<String> | String,
  contactInfo_lt?: String,
  contactInfo_lte?: String,
  contactInfo_gt?: String,
  contactInfo_gte?: String,
  contactInfo_contains?: String,
  contactInfo_not_contains?: String,
  contactInfo_starts_with?: String,
  contactInfo_not_starts_with?: String,
  contactInfo_ends_with?: String,
  contactInfo_not_ends_with?: String,
  profession?: String,
  profession_not?: String,
  profession_in?: Array<String> | String,
  profession_not_in?: Array<String> | String,
  profession_lt?: String,
  profession_lte?: String,
  profession_gt?: String,
  profession_gte?: String,
  profession_contains?: String,
  profession_not_contains?: String,
  profession_starts_with?: String,
  profession_not_starts_with?: String,
  profession_ends_with?: String,
  profession_not_ends_with?: String,
  timezone?: String,
  timezone_not?: String,
  timezone_in?: Array<String> | String,
  timezone_not_in?: Array<String> | String,
  timezone_lt?: String,
  timezone_lte?: String,
  timezone_gt?: String,
  timezone_gte?: String,
  timezone_contains?: String,
  timezone_not_contains?: String,
  timezone_starts_with?: String,
  timezone_not_starts_with?: String,
  timezone_ends_with?: String,
  timezone_not_ends_with?: String,
  baseCity?: String,
  baseCity_not?: String,
  baseCity_in?: Array<String> | String,
  baseCity_not_in?: Array<String> | String,
  baseCity_lt?: String,
  baseCity_lte?: String,
  baseCity_gt?: String,
  baseCity_gte?: String,
  baseCity_contains?: String,
  baseCity_not_contains?: String,
  baseCity_starts_with?: String,
  baseCity_not_starts_with?: String,
  baseCity_ends_with?: String,
  baseCity_not_ends_with?: String,
  baseCountry?: String,
  baseCountry_not?: String,
  baseCountry_in?: Array<String> | String,
  baseCountry_not_in?: Array<String> | String,
  baseCountry_lt?: String,
  baseCountry_lte?: String,
  baseCountry_gt?: String,
  baseCountry_gte?: String,
  baseCountry_contains?: String,
  baseCountry_not_contains?: String,
  baseCountry_starts_with?: String,
  baseCountry_not_starts_with?: String,
  baseCountry_ends_with?: String,
  baseCountry_not_ends_with?: String,
  baseLatitude?: Float,
  baseLatitude_not?: Float,
  baseLatitude_in?: Array<Float> | Float,
  baseLatitude_not_in?: Array<Float> | Float,
  baseLatitude_lt?: Float,
  baseLatitude_lte?: Float,
  baseLatitude_gt?: Float,
  baseLatitude_gte?: Float,
  baseLongitude?: Float,
  baseLongitude_not?: Float,
  baseLongitude_in?: Array<Float> | Float,
  baseLongitude_not_in?: Array<Float> | Float,
  baseLongitude_lt?: Float,
  baseLongitude_lte?: Float,
  baseLongitude_gt?: Float,
  baseLongitude_gte?: Float,
  googleProviderId?: String,
  googleProviderId_not?: String,
  googleProviderId_in?: Array<String> | String,
  googleProviderId_not_in?: Array<String> | String,
  googleProviderId_lt?: String,
  googleProviderId_lte?: String,
  googleProviderId_gt?: String,
  googleProviderId_gte?: String,
  googleProviderId_contains?: String,
  googleProviderId_not_contains?: String,
  googleProviderId_starts_with?: String,
  googleProviderId_not_starts_with?: String,
  googleProviderId_ends_with?: String,
  googleProviderId_not_ends_with?: String,
  pendingSetup?: Boolean,
  pendingSetup_not?: Boolean,
  deletedAt?: DateTime,
  deletedAt_not?: DateTime,
  deletedAt_in?: Array<DateTime> | DateTime,
  deletedAt_not_in?: Array<DateTime> | DateTime,
  deletedAt_lt?: DateTime,
  deletedAt_lte?: DateTime,
  deletedAt_gt?: DateTime,
  deletedAt_gte?: DateTime,
  lastSeen?: DateTime,
  lastSeen_not?: DateTime,
  lastSeen_in?: Array<DateTime> | DateTime,
  lastSeen_not_in?: Array<DateTime> | DateTime,
  lastSeen_lt?: DateTime,
  lastSeen_lte?: DateTime,
  lastSeen_gt?: DateTime,
  lastSeen_gte?: DateTime,
  createdAt?: DateTime,
  createdAt_not?: DateTime,
  createdAt_in?: Array<DateTime> | DateTime,
  createdAt_not_in?: Array<DateTime> | DateTime,
  createdAt_lt?: DateTime,
  createdAt_lte?: DateTime,
  createdAt_gt?: DateTime,
  createdAt_gte?: DateTime,
  updatedAt?: DateTime,
  updatedAt_not?: DateTime,
  updatedAt_in?: Array<DateTime> | DateTime,
  updatedAt_not_in?: Array<DateTime> | DateTime,
  updatedAt_lt?: DateTime,
  updatedAt_lte?: DateTime,
  updatedAt_gt?: DateTime,
  updatedAt_gte?: DateTime,
  memberOf_every?: WorkspaceMemberWhereInput,
  memberOf_some?: WorkspaceMemberWhereInput,
  memberOf_none?: WorkspaceMemberWhereInput,
  vacations_every?: UserVacationWhereInput,
  vacations_some?: UserVacationWhereInput,
  vacations_none?: UserVacationWhereInput,
  workHours?: UserWorkHoursWhereInput,
  _MagicalBackRelation_UserToWorkspace_every?: WorkspaceWhereInput,
  _MagicalBackRelation_UserToWorkspace_some?: WorkspaceWhereInput,
  _MagicalBackRelation_UserToWorkspace_none?: WorkspaceWhereInput,
|}

export type UserCreateOneWithoutMemberOfInput = {|
  create?: UserCreateWithoutMemberOfInput,
  connect?: UserWhereUniqueInput,
|}

export type UserUpdateInput = {|
  name?: String,
  firstName?: String,
  profilePhoto?: String,
  email?: String,
  username?: String,
  contactInfo?: String,
  profession?: String,
  timezone?: String,
  baseCity?: String,
  baseCountry?: String,
  baseLatitude?: Float,
  baseLongitude?: Float,
  googleProviderId?: String,
  pendingSetup?: Boolean,
  deletedAt?: DateTime,
  lastSeen?: DateTime,
  daysOff?: UserUpdatedaysOffInput,
  memberOf?: WorkspaceMemberUpdateManyWithoutUserInput,
  vacations?: UserVacationUpdateManyWithoutUserInput,
  workHours?: UserWorkHoursUpdateOneWithoutUserInput,
|}

export type UserCreateWithoutMemberOfInput = {|
  name: String,
  firstName: String,
  profilePhoto?: String,
  email: String,
  username?: String,
  contactInfo?: String,
  profession?: String,
  timezone: String,
  baseCity?: String,
  baseCountry?: String,
  baseLatitude?: Float,
  baseLongitude?: Float,
  googleProviderId?: String,
  pendingSetup?: Boolean,
  deletedAt?: DateTime,
  lastSeen?: DateTime,
  daysOff?: UserCreatedaysOffInput,
  vacations?: UserVacationCreateManyWithoutUserInput,
  workHours?: UserWorkHoursCreateOneWithoutUserInput,
|}

export type WorkspaceWhereInput = {|
  AND?: Array<WorkspaceWhereInput> | WorkspaceWhereInput,
  OR?: Array<WorkspaceWhereInput> | WorkspaceWhereInput,
  NOT?: Array<WorkspaceWhereInput> | WorkspaceWhereInput,
  id?: ID_Input,
  id_not?: ID_Input,
  id_in?: Array<ID_Input> | ID_Input,
  id_not_in?: Array<ID_Input> | ID_Input,
  id_lt?: ID_Input,
  id_lte?: ID_Input,
  id_gt?: ID_Input,
  id_gte?: ID_Input,
  id_contains?: ID_Input,
  id_not_contains?: ID_Input,
  id_starts_with?: ID_Input,
  id_not_starts_with?: ID_Input,
  id_ends_with?: ID_Input,
  id_not_ends_with?: ID_Input,
  name?: String,
  name_not?: String,
  name_in?: Array<String> | String,
  name_not_in?: Array<String> | String,
  name_lt?: String,
  name_lte?: String,
  name_gt?: String,
  name_gte?: String,
  name_contains?: String,
  name_not_contains?: String,
  name_starts_with?: String,
  name_not_starts_with?: String,
  name_ends_with?: String,
  name_not_ends_with?: String,
  slug?: String,
  slug_not?: String,
  slug_in?: Array<String> | String,
  slug_not_in?: Array<String> | String,
  slug_lt?: String,
  slug_lte?: String,
  slug_gt?: String,
  slug_gte?: String,
  slug_contains?: String,
  slug_not_contains?: String,
  slug_starts_with?: String,
  slug_not_starts_with?: String,
  slug_ends_with?: String,
  slug_not_ends_with?: String,
  profilePhoto?: String,
  profilePhoto_not?: String,
  profilePhoto_in?: Array<String> | String,
  profilePhoto_not_in?: Array<String> | String,
  profilePhoto_lt?: String,
  profilePhoto_lte?: String,
  profilePhoto_gt?: String,
  profilePhoto_gte?: String,
  profilePhoto_contains?: String,
  profilePhoto_not_contains?: String,
  profilePhoto_starts_with?: String,
  profilePhoto_not_starts_with?: String,
  profilePhoto_ends_with?: String,
  profilePhoto_not_ends_with?: String,
  twistWorkspaceId?: Int,
  twistWorkspaceId_not?: Int,
  twistWorkspaceId_in?: Array<Int> | Int,
  twistWorkspaceId_not_in?: Array<Int> | Int,
  twistWorkspaceId_lt?: Int,
  twistWorkspaceId_lte?: Int,
  twistWorkspaceId_gt?: Int,
  twistWorkspaceId_gte?: Int,
  deletedAt?: DateTime,
  deletedAt_not?: DateTime,
  deletedAt_in?: Array<DateTime> | DateTime,
  deletedAt_not_in?: Array<DateTime> | DateTime,
  deletedAt_lt?: DateTime,
  deletedAt_lte?: DateTime,
  deletedAt_gt?: DateTime,
  deletedAt_gte?: DateTime,
  createdAt?: DateTime,
  createdAt_not?: DateTime,
  createdAt_in?: Array<DateTime> | DateTime,
  createdAt_not_in?: Array<DateTime> | DateTime,
  createdAt_lt?: DateTime,
  createdAt_lte?: DateTime,
  createdAt_gt?: DateTime,
  createdAt_gte?: DateTime,
  updatedAt?: DateTime,
  updatedAt_not?: DateTime,
  updatedAt_in?: Array<DateTime> | DateTime,
  updatedAt_not_in?: Array<DateTime> | DateTime,
  updatedAt_lt?: DateTime,
  updatedAt_lte?: DateTime,
  updatedAt_gt?: DateTime,
  updatedAt_gte?: DateTime,
  members_every?: WorkspaceMemberWhereInput,
  members_some?: WorkspaceMemberWhereInput,
  members_none?: WorkspaceMemberWhereInput,
  creator?: UserWhereInput,
  _MagicalBackRelation_GroupToWorkspace_every?: GroupWhereInput,
  _MagicalBackRelation_GroupToWorkspace_some?: GroupWhereInput,
  _MagicalBackRelation_GroupToWorkspace_none?: GroupWhereInput,
|}

export type UserVacationCreateManyWithoutUserInput = {|
  create?:
    | Array<UserVacationCreateWithoutUserInput>
    | UserVacationCreateWithoutUserInput,
  connect?: Array<UserVacationWhereUniqueInput> | UserVacationWhereUniqueInput,
|}

export type GroupWhereUniqueInput = {|
  id?: ID_Input,
|}

export type UserVacationCreateWithoutUserInput = {|
  from: DateTime,
  to: DateTime,
  timezone: String,
  city?: String,
  country?: String,
|}

export type UserWorkHoursWhereUniqueInput = {|
  id?: ID_Input,
|}

export type UserWorkHoursCreateOneWithoutUserInput = {|
  create?: UserWorkHoursCreateWithoutUserInput,
  connect?: UserWorkHoursWhereUniqueInput,
|}

export type UserWhereUniqueInput = {|
  id?: ID_Input,
  email?: String,
|}

export type UserWorkHoursCreateWithoutUserInput = {|
  automaticUpdate?: Boolean,
  allDaysFrom?: String,
  allDaysTo?: String,
  sundayFrom?: String,
  sundayTo?: String,
  tuesdayFrom?: String,
  tuesdayTo?: String,
  mondayFrom?: String,
  mondayTo?: String,
  wednesdayFrom?: String,
  wednesdayTo?: String,
  thursdayFrom?: String,
  thursdayTo?: String,
  fridayFrom?: String,
  fridayTo?: String,
  saturdayFrom?: String,
  saturdayTo?: String,
|}

export type UserUpdateWithoutWorkHoursDataInput = {|
  name?: String,
  firstName?: String,
  profilePhoto?: String,
  email?: String,
  username?: String,
  contactInfo?: String,
  profession?: String,
  timezone?: String,
  baseCity?: String,
  baseCountry?: String,
  baseLatitude?: Float,
  baseLongitude?: Float,
  googleProviderId?: String,
  pendingSetup?: Boolean,
  deletedAt?: DateTime,
  lastSeen?: DateTime,
  daysOff?: UserUpdatedaysOffInput,
  memberOf?: WorkspaceMemberUpdateManyWithoutUserInput,
  vacations?: UserVacationUpdateManyWithoutUserInput,
|}

export type GroupCreateInput = {|
  name: String,
  workspace: WorkspaceCreateOneInput,
  members?: WorkspaceMemberCreateManyWithoutGroupsInput,
|}

export type UserWorkHoursUpdateInput = {|
  automaticUpdate?: Boolean,
  allDaysFrom?: String,
  allDaysTo?: String,
  sundayFrom?: String,
  sundayTo?: String,
  tuesdayFrom?: String,
  tuesdayTo?: String,
  mondayFrom?: String,
  mondayTo?: String,
  wednesdayFrom?: String,
  wednesdayTo?: String,
  thursdayFrom?: String,
  thursdayTo?: String,
  fridayFrom?: String,
  fridayTo?: String,
  saturdayFrom?: String,
  saturdayTo?: String,
  user?: UserUpdateOneWithoutWorkHoursInput,
|}

export type WorkspaceMemberCreateManyWithoutGroupsInput = {|
  create?:
    | Array<WorkspaceMemberCreateWithoutGroupsInput>
    | WorkspaceMemberCreateWithoutGroupsInput,
  connect?:
    | Array<WorkspaceMemberWhereUniqueInput>
    | WorkspaceMemberWhereUniqueInput,
|}

export type UserUpdateWithoutVacationsDataInput = {|
  name?: String,
  firstName?: String,
  profilePhoto?: String,
  email?: String,
  username?: String,
  contactInfo?: String,
  profession?: String,
  timezone?: String,
  baseCity?: String,
  baseCountry?: String,
  baseLatitude?: Float,
  baseLongitude?: Float,
  googleProviderId?: String,
  pendingSetup?: Boolean,
  deletedAt?: DateTime,
  lastSeen?: DateTime,
  daysOff?: UserUpdatedaysOffInput,
  memberOf?: WorkspaceMemberUpdateManyWithoutUserInput,
  workHours?: UserWorkHoursUpdateOneWithoutUserInput,
|}

export type WorkspaceMemberCreateWithoutGroupsInput = {|
  permissionRole?: PermissionTags,
  workspace: WorkspaceCreateOneWithoutMembersInput,
  user: UserCreateOneWithoutMemberOfInput,
|}

export type UserVacationUpdateInput = {|
  from?: DateTime,
  to?: DateTime,
  timezone?: String,
  city?: String,
  country?: String,
  user?: UserUpdateOneWithoutVacationsInput,
|}

export type UserUpsertWithoutMemberOfInput = {|
  update: UserUpdateWithoutMemberOfDataInput,
  create: UserCreateWithoutMemberOfInput,
|}

export type WorkspaceMemberUpdateWithoutGroupsDataInput = {|
  permissionRole?: PermissionTags,
  workspace?: WorkspaceUpdateOneWithoutMembersInput,
  user?: UserUpdateOneWithoutMemberOfInput,
|}

export type UserCreateOneWithoutVacationsInput = {|
  create?: UserCreateWithoutVacationsInput,
  connect?: UserWhereUniqueInput,
|}

export type WorkspaceMemberUpdateManyWithoutGroupsInput = {|
  create?:
    | Array<WorkspaceMemberCreateWithoutGroupsInput>
    | WorkspaceMemberCreateWithoutGroupsInput,
  connect?:
    | Array<WorkspaceMemberWhereUniqueInput>
    | WorkspaceMemberWhereUniqueInput,
  disconnect?:
    | Array<WorkspaceMemberWhereUniqueInput>
    | WorkspaceMemberWhereUniqueInput,
  delete?:
    | Array<WorkspaceMemberWhereUniqueInput>
    | WorkspaceMemberWhereUniqueInput,
  update?:
    | Array<WorkspaceMemberUpdateWithWhereUniqueWithoutGroupsInput>
    | WorkspaceMemberUpdateWithWhereUniqueWithoutGroupsInput,
  upsert?:
    | Array<WorkspaceMemberUpsertWithWhereUniqueWithoutGroupsInput>
    | WorkspaceMemberUpsertWithWhereUniqueWithoutGroupsInput,
|}

export type UserCreateWithoutVacationsInput = {|
  name: String,
  firstName: String,
  profilePhoto?: String,
  email: String,
  username?: String,
  contactInfo?: String,
  profession?: String,
  timezone: String,
  baseCity?: String,
  baseCountry?: String,
  baseLatitude?: Float,
  baseLongitude?: Float,
  googleProviderId?: String,
  pendingSetup?: Boolean,
  deletedAt?: DateTime,
  lastSeen?: DateTime,
  daysOff?: UserCreatedaysOffInput,
  memberOf?: WorkspaceMemberCreateManyWithoutUserInput,
  workHours?: UserWorkHoursCreateOneWithoutUserInput,
|}

export type WorkspaceUpsertWithoutMembersInput = {|
  update: WorkspaceUpdateWithoutMembersDataInput,
  create: WorkspaceCreateWithoutMembersInput,
|}

export type UserWorkHoursCreateInput = {|
  automaticUpdate?: Boolean,
  allDaysFrom?: String,
  allDaysTo?: String,
  sundayFrom?: String,
  sundayTo?: String,
  tuesdayFrom?: String,
  tuesdayTo?: String,
  mondayFrom?: String,
  mondayTo?: String,
  wednesdayFrom?: String,
  wednesdayTo?: String,
  thursdayFrom?: String,
  thursdayTo?: String,
  fridayFrom?: String,
  fridayTo?: String,
  saturdayFrom?: String,
  saturdayTo?: String,
  user: UserCreateOneWithoutWorkHoursInput,
|}

export type WorkspaceMemberUpsertWithWhereUniqueWithoutUserInput = {|
  where: WorkspaceMemberWhereUniqueInput,
  update: WorkspaceMemberUpdateWithoutUserDataInput,
  create: WorkspaceMemberCreateWithoutUserInput,
|}

export type UserCreateOneWithoutWorkHoursInput = {|
  create?: UserCreateWithoutWorkHoursInput,
  connect?: UserWhereUniqueInput,
|}

export type WorkspaceUpsertNestedInput = {|
  update: WorkspaceUpdateDataInput,
  create: WorkspaceCreateInput,
|}

export type UserWorkHoursWhereInput = {|
  AND?: Array<UserWorkHoursWhereInput> | UserWorkHoursWhereInput,
  OR?: Array<UserWorkHoursWhereInput> | UserWorkHoursWhereInput,
  NOT?: Array<UserWorkHoursWhereInput> | UserWorkHoursWhereInput,
  id?: ID_Input,
  id_not?: ID_Input,
  id_in?: Array<ID_Input> | ID_Input,
  id_not_in?: Array<ID_Input> | ID_Input,
  id_lt?: ID_Input,
  id_lte?: ID_Input,
  id_gt?: ID_Input,
  id_gte?: ID_Input,
  id_contains?: ID_Input,
  id_not_contains?: ID_Input,
  id_starts_with?: ID_Input,
  id_not_starts_with?: ID_Input,
  id_ends_with?: ID_Input,
  id_not_ends_with?: ID_Input,
  automaticUpdate?: Boolean,
  automaticUpdate_not?: Boolean,
  allDaysFrom?: String,
  allDaysFrom_not?: String,
  allDaysFrom_in?: Array<String> | String,
  allDaysFrom_not_in?: Array<String> | String,
  allDaysFrom_lt?: String,
  allDaysFrom_lte?: String,
  allDaysFrom_gt?: String,
  allDaysFrom_gte?: String,
  allDaysFrom_contains?: String,
  allDaysFrom_not_contains?: String,
  allDaysFrom_starts_with?: String,
  allDaysFrom_not_starts_with?: String,
  allDaysFrom_ends_with?: String,
  allDaysFrom_not_ends_with?: String,
  allDaysTo?: String,
  allDaysTo_not?: String,
  allDaysTo_in?: Array<String> | String,
  allDaysTo_not_in?: Array<String> | String,
  allDaysTo_lt?: String,
  allDaysTo_lte?: String,
  allDaysTo_gt?: String,
  allDaysTo_gte?: String,
  allDaysTo_contains?: String,
  allDaysTo_not_contains?: String,
  allDaysTo_starts_with?: String,
  allDaysTo_not_starts_with?: String,
  allDaysTo_ends_with?: String,
  allDaysTo_not_ends_with?: String,
  sundayFrom?: String,
  sundayFrom_not?: String,
  sundayFrom_in?: Array<String> | String,
  sundayFrom_not_in?: Array<String> | String,
  sundayFrom_lt?: String,
  sundayFrom_lte?: String,
  sundayFrom_gt?: String,
  sundayFrom_gte?: String,
  sundayFrom_contains?: String,
  sundayFrom_not_contains?: String,
  sundayFrom_starts_with?: String,
  sundayFrom_not_starts_with?: String,
  sundayFrom_ends_with?: String,
  sundayFrom_not_ends_with?: String,
  sundayTo?: String,
  sundayTo_not?: String,
  sundayTo_in?: Array<String> | String,
  sundayTo_not_in?: Array<String> | String,
  sundayTo_lt?: String,
  sundayTo_lte?: String,
  sundayTo_gt?: String,
  sundayTo_gte?: String,
  sundayTo_contains?: String,
  sundayTo_not_contains?: String,
  sundayTo_starts_with?: String,
  sundayTo_not_starts_with?: String,
  sundayTo_ends_with?: String,
  sundayTo_not_ends_with?: String,
  tuesdayFrom?: String,
  tuesdayFrom_not?: String,
  tuesdayFrom_in?: Array<String> | String,
  tuesdayFrom_not_in?: Array<String> | String,
  tuesdayFrom_lt?: String,
  tuesdayFrom_lte?: String,
  tuesdayFrom_gt?: String,
  tuesdayFrom_gte?: String,
  tuesdayFrom_contains?: String,
  tuesdayFrom_not_contains?: String,
  tuesdayFrom_starts_with?: String,
  tuesdayFrom_not_starts_with?: String,
  tuesdayFrom_ends_with?: String,
  tuesdayFrom_not_ends_with?: String,
  tuesdayTo?: String,
  tuesdayTo_not?: String,
  tuesdayTo_in?: Array<String> | String,
  tuesdayTo_not_in?: Array<String> | String,
  tuesdayTo_lt?: String,
  tuesdayTo_lte?: String,
  tuesdayTo_gt?: String,
  tuesdayTo_gte?: String,
  tuesdayTo_contains?: String,
  tuesdayTo_not_contains?: String,
  tuesdayTo_starts_with?: String,
  tuesdayTo_not_starts_with?: String,
  tuesdayTo_ends_with?: String,
  tuesdayTo_not_ends_with?: String,
  mondayFrom?: String,
  mondayFrom_not?: String,
  mondayFrom_in?: Array<String> | String,
  mondayFrom_not_in?: Array<String> | String,
  mondayFrom_lt?: String,
  mondayFrom_lte?: String,
  mondayFrom_gt?: String,
  mondayFrom_gte?: String,
  mondayFrom_contains?: String,
  mondayFrom_not_contains?: String,
  mondayFrom_starts_with?: String,
  mondayFrom_not_starts_with?: String,
  mondayFrom_ends_with?: String,
  mondayFrom_not_ends_with?: String,
  mondayTo?: String,
  mondayTo_not?: String,
  mondayTo_in?: Array<String> | String,
  mondayTo_not_in?: Array<String> | String,
  mondayTo_lt?: String,
  mondayTo_lte?: String,
  mondayTo_gt?: String,
  mondayTo_gte?: String,
  mondayTo_contains?: String,
  mondayTo_not_contains?: String,
  mondayTo_starts_with?: String,
  mondayTo_not_starts_with?: String,
  mondayTo_ends_with?: String,
  mondayTo_not_ends_with?: String,
  wednesdayFrom?: String,
  wednesdayFrom_not?: String,
  wednesdayFrom_in?: Array<String> | String,
  wednesdayFrom_not_in?: Array<String> | String,
  wednesdayFrom_lt?: String,
  wednesdayFrom_lte?: String,
  wednesdayFrom_gt?: String,
  wednesdayFrom_gte?: String,
  wednesdayFrom_contains?: String,
  wednesdayFrom_not_contains?: String,
  wednesdayFrom_starts_with?: String,
  wednesdayFrom_not_starts_with?: String,
  wednesdayFrom_ends_with?: String,
  wednesdayFrom_not_ends_with?: String,
  wednesdayTo?: String,
  wednesdayTo_not?: String,
  wednesdayTo_in?: Array<String> | String,
  wednesdayTo_not_in?: Array<String> | String,
  wednesdayTo_lt?: String,
  wednesdayTo_lte?: String,
  wednesdayTo_gt?: String,
  wednesdayTo_gte?: String,
  wednesdayTo_contains?: String,
  wednesdayTo_not_contains?: String,
  wednesdayTo_starts_with?: String,
  wednesdayTo_not_starts_with?: String,
  wednesdayTo_ends_with?: String,
  wednesdayTo_not_ends_with?: String,
  thursdayFrom?: String,
  thursdayFrom_not?: String,
  thursdayFrom_in?: Array<String> | String,
  thursdayFrom_not_in?: Array<String> | String,
  thursdayFrom_lt?: String,
  thursdayFrom_lte?: String,
  thursdayFrom_gt?: String,
  thursdayFrom_gte?: String,
  thursdayFrom_contains?: String,
  thursdayFrom_not_contains?: String,
  thursdayFrom_starts_with?: String,
  thursdayFrom_not_starts_with?: String,
  thursdayFrom_ends_with?: String,
  thursdayFrom_not_ends_with?: String,
  thursdayTo?: String,
  thursdayTo_not?: String,
  thursdayTo_in?: Array<String> | String,
  thursdayTo_not_in?: Array<String> | String,
  thursdayTo_lt?: String,
  thursdayTo_lte?: String,
  thursdayTo_gt?: String,
  thursdayTo_gte?: String,
  thursdayTo_contains?: String,
  thursdayTo_not_contains?: String,
  thursdayTo_starts_with?: String,
  thursdayTo_not_starts_with?: String,
  thursdayTo_ends_with?: String,
  thursdayTo_not_ends_with?: String,
  fridayFrom?: String,
  fridayFrom_not?: String,
  fridayFrom_in?: Array<String> | String,
  fridayFrom_not_in?: Array<String> | String,
  fridayFrom_lt?: String,
  fridayFrom_lte?: String,
  fridayFrom_gt?: String,
  fridayFrom_gte?: String,
  fridayFrom_contains?: String,
  fridayFrom_not_contains?: String,
  fridayFrom_starts_with?: String,
  fridayFrom_not_starts_with?: String,
  fridayFrom_ends_with?: String,
  fridayFrom_not_ends_with?: String,
  fridayTo?: String,
  fridayTo_not?: String,
  fridayTo_in?: Array<String> | String,
  fridayTo_not_in?: Array<String> | String,
  fridayTo_lt?: String,
  fridayTo_lte?: String,
  fridayTo_gt?: String,
  fridayTo_gte?: String,
  fridayTo_contains?: String,
  fridayTo_not_contains?: String,
  fridayTo_starts_with?: String,
  fridayTo_not_starts_with?: String,
  fridayTo_ends_with?: String,
  fridayTo_not_ends_with?: String,
  saturdayFrom?: String,
  saturdayFrom_not?: String,
  saturdayFrom_in?: Array<String> | String,
  saturdayFrom_not_in?: Array<String> | String,
  saturdayFrom_lt?: String,
  saturdayFrom_lte?: String,
  saturdayFrom_gt?: String,
  saturdayFrom_gte?: String,
  saturdayFrom_contains?: String,
  saturdayFrom_not_contains?: String,
  saturdayFrom_starts_with?: String,
  saturdayFrom_not_starts_with?: String,
  saturdayFrom_ends_with?: String,
  saturdayFrom_not_ends_with?: String,
  saturdayTo?: String,
  saturdayTo_not?: String,
  saturdayTo_in?: Array<String> | String,
  saturdayTo_not_in?: Array<String> | String,
  saturdayTo_lt?: String,
  saturdayTo_lte?: String,
  saturdayTo_gt?: String,
  saturdayTo_gte?: String,
  saturdayTo_contains?: String,
  saturdayTo_not_contains?: String,
  saturdayTo_starts_with?: String,
  saturdayTo_not_starts_with?: String,
  saturdayTo_ends_with?: String,
  saturdayTo_not_ends_with?: String,
  createdAt?: DateTime,
  createdAt_not?: DateTime,
  createdAt_in?: Array<DateTime> | DateTime,
  createdAt_not_in?: Array<DateTime> | DateTime,
  createdAt_lt?: DateTime,
  createdAt_lte?: DateTime,
  createdAt_gt?: DateTime,
  createdAt_gte?: DateTime,
  updatedAt?: DateTime,
  updatedAt_not?: DateTime,
  updatedAt_in?: Array<DateTime> | DateTime,
  updatedAt_not_in?: Array<DateTime> | DateTime,
  updatedAt_lt?: DateTime,
  updatedAt_lte?: DateTime,
  updatedAt_gt?: DateTime,
  updatedAt_gte?: DateTime,
  user?: UserWhereInput,
|}

export type WorkspaceMemberCreateInput = {|
  permissionRole?: PermissionTags,
  workspace: WorkspaceCreateOneWithoutMembersInput,
  user: UserCreateOneWithoutMemberOfInput,
  groups?: GroupCreateManyWithoutMembersInput,
|}

export type UserWorkHoursUpsertWithoutUserInput = {|
  update: UserWorkHoursUpdateWithoutUserDataInput,
  create: UserWorkHoursCreateWithoutUserInput,
|}

export type WorkspaceCreateWithoutMembersInput = {|
  name: String,
  slug: String,
  profilePhoto?: String,
  twistWorkspaceId?: Int,
  deletedAt?: DateTime,
  creator: UserCreateOneInput,
|}

export type UserCreateInput = {|
  name: String,
  firstName: String,
  profilePhoto?: String,
  email: String,
  username?: String,
  contactInfo?: String,
  profession?: String,
  timezone: String,
  baseCity?: String,
  baseCountry?: String,
  baseLatitude?: Float,
  baseLongitude?: Float,
  googleProviderId?: String,
  pendingSetup?: Boolean,
  deletedAt?: DateTime,
  lastSeen?: DateTime,
  daysOff?: UserCreatedaysOffInput,
  memberOf?: WorkspaceMemberCreateManyWithoutUserInput,
  vacations?: UserVacationCreateManyWithoutUserInput,
  workHours?: UserWorkHoursCreateOneWithoutUserInput,
|}

export type WorkspaceMemberCreateManyWithoutUserInput = {|
  create?:
    | Array<WorkspaceMemberCreateWithoutUserInput>
    | WorkspaceMemberCreateWithoutUserInput,
  connect?:
    | Array<WorkspaceMemberWhereUniqueInput>
    | WorkspaceMemberWhereUniqueInput,
|}

export type WorkspaceUpdateWithoutMembersDataInput = {|
  name?: String,
  slug?: String,
  profilePhoto?: String,
  twistWorkspaceId?: Int,
  deletedAt?: DateTime,
  creator?: UserUpdateOneInput,
|}

export type GroupCreateManyWithoutMembersInput = {|
  create?:
    | Array<GroupCreateWithoutMembersInput>
    | GroupCreateWithoutMembersInput,
  connect?: Array<GroupWhereUniqueInput> | GroupWhereUniqueInput,
|}

export type UserUpdateOneInput = {|
  create?: UserCreateInput,
  connect?: UserWhereUniqueInput,
  delete?: Boolean,
  update?: UserUpdateDataInput,
  upsert?: UserUpsertNestedInput,
|}

export type UserWorkHoursSubscriptionWhereInput = {|
  AND?:
    | Array<UserWorkHoursSubscriptionWhereInput>
    | UserWorkHoursSubscriptionWhereInput,
  OR?:
    | Array<UserWorkHoursSubscriptionWhereInput>
    | UserWorkHoursSubscriptionWhereInput,
  NOT?:
    | Array<UserWorkHoursSubscriptionWhereInput>
    | UserWorkHoursSubscriptionWhereInput,
  mutation_in?: Array<MutationType> | MutationType,
  updatedFields_contains?: String,
  updatedFields_contains_every?: Array<String> | String,
  updatedFields_contains_some?: Array<String> | String,
  node?: UserWorkHoursWhereInput,
|}

export type UserUpdateDataInput = {|
  name?: String,
  firstName?: String,
  profilePhoto?: String,
  email?: String,
  username?: String,
  contactInfo?: String,
  profession?: String,
  timezone?: String,
  baseCity?: String,
  baseCountry?: String,
  baseLatitude?: Float,
  baseLongitude?: Float,
  googleProviderId?: String,
  pendingSetup?: Boolean,
  deletedAt?: DateTime,
  lastSeen?: DateTime,
  daysOff?: UserUpdatedaysOffInput,
  memberOf?: WorkspaceMemberUpdateManyWithoutUserInput,
  vacations?: UserVacationUpdateManyWithoutUserInput,
  workHours?: UserWorkHoursUpdateOneWithoutUserInput,
|}

export type WorkspaceMemberSubscriptionWhereInput = {|
  AND?:
    | Array<WorkspaceMemberSubscriptionWhereInput>
    | WorkspaceMemberSubscriptionWhereInput,
  OR?:
    | Array<WorkspaceMemberSubscriptionWhereInput>
    | WorkspaceMemberSubscriptionWhereInput,
  NOT?:
    | Array<WorkspaceMemberSubscriptionWhereInput>
    | WorkspaceMemberSubscriptionWhereInput,
  mutation_in?: Array<MutationType> | MutationType,
  updatedFields_contains?: String,
  updatedFields_contains_every?: Array<String> | String,
  updatedFields_contains_some?: Array<String> | String,
  node?: WorkspaceMemberWhereInput,
|}

export type UserUpdatedaysOffInput = {|
  set?: Array<Int> | Int,
|}

export type WorkspaceMemberWhereUniqueInput = {|
  id?: ID_Input,
|}

export type WorkspaceMemberUpdateManyWithoutUserInput = {|
  create?:
    | Array<WorkspaceMemberCreateWithoutUserInput>
    | WorkspaceMemberCreateWithoutUserInput,
  connect?:
    | Array<WorkspaceMemberWhereUniqueInput>
    | WorkspaceMemberWhereUniqueInput,
  disconnect?:
    | Array<WorkspaceMemberWhereUniqueInput>
    | WorkspaceMemberWhereUniqueInput,
  delete?:
    | Array<WorkspaceMemberWhereUniqueInput>
    | WorkspaceMemberWhereUniqueInput,
  update?:
    | Array<WorkspaceMemberUpdateWithWhereUniqueWithoutUserInput>
    | WorkspaceMemberUpdateWithWhereUniqueWithoutUserInput,
  upsert?:
    | Array<WorkspaceMemberUpsertWithWhereUniqueWithoutUserInput>
    | WorkspaceMemberUpsertWithWhereUniqueWithoutUserInput,
|}

export type WorkspaceWhereUniqueInput = {|
  id?: ID_Input,
  slug?: String,
|}

export type WorkspaceMemberUpdateWithWhereUniqueWithoutUserInput = {|
  where: WorkspaceMemberWhereUniqueInput,
  data: WorkspaceMemberUpdateWithoutUserDataInput,
|}

export type UserUpdateOneWithoutWorkHoursInput = {|
  create?: UserCreateWithoutWorkHoursInput,
  connect?: UserWhereUniqueInput,
  delete?: Boolean,
  update?: UserUpdateWithoutWorkHoursDataInput,
  upsert?: UserUpsertWithoutWorkHoursInput,
|}

export type WorkspaceMemberUpdateWithoutUserDataInput = {|
  permissionRole?: PermissionTags,
  workspace?: WorkspaceUpdateOneWithoutMembersInput,
  groups?: GroupUpdateManyWithoutMembersInput,
|}

export type UserUpdateOneWithoutVacationsInput = {|
  create?: UserCreateWithoutVacationsInput,
  connect?: UserWhereUniqueInput,
  delete?: Boolean,
  update?: UserUpdateWithoutVacationsDataInput,
  upsert?: UserUpsertWithoutVacationsInput,
|}

export type GroupUpdateManyWithoutMembersInput = {|
  create?:
    | Array<GroupCreateWithoutMembersInput>
    | GroupCreateWithoutMembersInput,
  connect?: Array<GroupWhereUniqueInput> | GroupWhereUniqueInput,
  disconnect?: Array<GroupWhereUniqueInput> | GroupWhereUniqueInput,
  delete?: Array<GroupWhereUniqueInput> | GroupWhereUniqueInput,
  update?:
    | Array<GroupUpdateWithWhereUniqueWithoutMembersInput>
    | GroupUpdateWithWhereUniqueWithoutMembersInput,
  upsert?:
    | Array<GroupUpsertWithWhereUniqueWithoutMembersInput>
    | GroupUpsertWithWhereUniqueWithoutMembersInput,
|}

export type WorkspaceMemberUpdateWithWhereUniqueWithoutGroupsInput = {|
  where: WorkspaceMemberWhereUniqueInput,
  data: WorkspaceMemberUpdateWithoutGroupsDataInput,
|}

export type GroupUpdateWithWhereUniqueWithoutMembersInput = {|
  where: GroupWhereUniqueInput,
  data: GroupUpdateWithoutMembersDataInput,
|}

export type UserUpsertNestedInput = {|
  update: UserUpdateDataInput,
  create: UserCreateInput,
|}

export type GroupUpdateWithoutMembersDataInput = {|
  name?: String,
  workspace?: WorkspaceUpdateOneInput,
|}

export type WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInput = {|
  where: WorkspaceMemberWhereUniqueInput,
  update: WorkspaceMemberUpdateWithoutWorkspaceDataInput,
  create: WorkspaceMemberCreateWithoutWorkspaceInput,
|}

export type WorkspaceUpdateOneInput = {|
  create?: WorkspaceCreateInput,
  connect?: WorkspaceWhereUniqueInput,
  delete?: Boolean,
  update?: WorkspaceUpdateDataInput,
  upsert?: WorkspaceUpsertNestedInput,
|}

export type UserCreateOneInput = {|
  create?: UserCreateInput,
  connect?: UserWhereUniqueInput,
|}

export type WorkspaceUpdateDataInput = {|
  name?: String,
  slug?: String,
  profilePhoto?: String,
  twistWorkspaceId?: Int,
  deletedAt?: DateTime,
  members?: WorkspaceMemberUpdateManyWithoutWorkspaceInput,
  creator?: UserUpdateOneInput,
|}

export type WorkspaceMemberCreateWithoutUserInput = {|
  permissionRole?: PermissionTags,
  workspace: WorkspaceCreateOneWithoutMembersInput,
  groups?: GroupCreateManyWithoutMembersInput,
|}

export type WorkspaceMemberUpdateManyWithoutWorkspaceInput = {|
  create?:
    | Array<WorkspaceMemberCreateWithoutWorkspaceInput>
    | WorkspaceMemberCreateWithoutWorkspaceInput,
  connect?:
    | Array<WorkspaceMemberWhereUniqueInput>
    | WorkspaceMemberWhereUniqueInput,
  disconnect?:
    | Array<WorkspaceMemberWhereUniqueInput>
    | WorkspaceMemberWhereUniqueInput,
  delete?:
    | Array<WorkspaceMemberWhereUniqueInput>
    | WorkspaceMemberWhereUniqueInput,
  update?:
    | Array<WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInput>
    | WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInput,
  upsert?:
    | Array<WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInput>
    | WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInput,
|}

export type GroupSubscriptionWhereInput = {|
  AND?: Array<GroupSubscriptionWhereInput> | GroupSubscriptionWhereInput,
  OR?: Array<GroupSubscriptionWhereInput> | GroupSubscriptionWhereInput,
  NOT?: Array<GroupSubscriptionWhereInput> | GroupSubscriptionWhereInput,
  mutation_in?: Array<MutationType> | MutationType,
  updatedFields_contains?: String,
  updatedFields_contains_every?: Array<String> | String,
  updatedFields_contains_some?: Array<String> | String,
  node?: GroupWhereInput,
|}

export type WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInput = {|
  where: WorkspaceMemberWhereUniqueInput,
  data: WorkspaceMemberUpdateWithoutWorkspaceDataInput,
|}

export type UserVacationWhereUniqueInput = {|
  id?: ID_Input,
|}

export type WorkspaceMemberUpdateWithoutWorkspaceDataInput = {|
  permissionRole?: PermissionTags,
  user?: UserUpdateOneWithoutMemberOfInput,
  groups?: GroupUpdateManyWithoutMembersInput,
|}

export type UserUpsertWithoutVacationsInput = {|
  update: UserUpdateWithoutVacationsDataInput,
  create: UserCreateWithoutVacationsInput,
|}

export type UserUpdateOneWithoutMemberOfInput = {|
  create?: UserCreateWithoutMemberOfInput,
  connect?: UserWhereUniqueInput,
  delete?: Boolean,
  update?: UserUpdateWithoutMemberOfDataInput,
  upsert?: UserUpsertWithoutMemberOfInput,
|}

export type GroupUpdateInput = {|
  name?: String,
  workspace?: WorkspaceUpdateOneInput,
  members?: WorkspaceMemberUpdateManyWithoutGroupsInput,
|}

export type UserUpdateWithoutMemberOfDataInput = {|
  name?: String,
  firstName?: String,
  profilePhoto?: String,
  email?: String,
  username?: String,
  contactInfo?: String,
  profession?: String,
  timezone?: String,
  baseCity?: String,
  baseCountry?: String,
  baseLatitude?: Float,
  baseLongitude?: Float,
  googleProviderId?: String,
  pendingSetup?: Boolean,
  deletedAt?: DateTime,
  lastSeen?: DateTime,
  daysOff?: UserUpdatedaysOffInput,
  vacations?: UserVacationUpdateManyWithoutUserInput,
  workHours?: UserWorkHoursUpdateOneWithoutUserInput,
|}

export type WorkspaceCreateOneWithoutMembersInput = {|
  create?: WorkspaceCreateWithoutMembersInput,
  connect?: WorkspaceWhereUniqueInput,
|}

export type UserVacationUpdateManyWithoutUserInput = {|
  create?:
    | Array<UserVacationCreateWithoutUserInput>
    | UserVacationCreateWithoutUserInput,
  connect?: Array<UserVacationWhereUniqueInput> | UserVacationWhereUniqueInput,
  disconnect?:
    | Array<UserVacationWhereUniqueInput>
    | UserVacationWhereUniqueInput,
  delete?: Array<UserVacationWhereUniqueInput> | UserVacationWhereUniqueInput,
  update?:
    | Array<UserVacationUpdateWithWhereUniqueWithoutUserInput>
    | UserVacationUpdateWithWhereUniqueWithoutUserInput,
  upsert?:
    | Array<UserVacationUpsertWithWhereUniqueWithoutUserInput>
    | UserVacationUpsertWithWhereUniqueWithoutUserInput,
|}

export type UserSubscriptionWhereInput = {|
  AND?: Array<UserSubscriptionWhereInput> | UserSubscriptionWhereInput,
  OR?: Array<UserSubscriptionWhereInput> | UserSubscriptionWhereInput,
  NOT?: Array<UserSubscriptionWhereInput> | UserSubscriptionWhereInput,
  mutation_in?: Array<MutationType> | MutationType,
  updatedFields_contains?: String,
  updatedFields_contains_every?: Array<String> | String,
  updatedFields_contains_some?: Array<String> | String,
  node?: UserWhereInput,
|}

export type UserWorkHoursUpdateOneWithoutUserInput = {|
  create?: UserWorkHoursCreateWithoutUserInput,
  connect?: UserWorkHoursWhereUniqueInput,
  disconnect?: Boolean,
  delete?: Boolean,
  update?: UserWorkHoursUpdateWithoutUserDataInput,
  upsert?: UserWorkHoursUpsertWithoutUserInput,
|}

export type UserVacationUpsertWithWhereUniqueWithoutUserInput = {|
  where: UserVacationWhereUniqueInput,
  update: UserVacationUpdateWithoutUserDataInput,
  create: UserVacationCreateWithoutUserInput,
|}

export type UserVacationUpdateWithoutUserDataInput = {|
  from?: DateTime,
  to?: DateTime,
  timezone?: String,
  city?: String,
  country?: String,
|}

export type UserVacationUpdateWithWhereUniqueWithoutUserInput = {|
  where: UserVacationWhereUniqueInput,
  data: UserVacationUpdateWithoutUserDataInput,
|}

export type WorkspaceUpdateInput = {|
  name?: String,
  slug?: String,
  profilePhoto?: String,
  twistWorkspaceId?: Int,
  deletedAt?: DateTime,
  members?: WorkspaceMemberUpdateManyWithoutWorkspaceInput,
  creator?: UserUpdateOneInput,
|}

export type UserCreatedaysOffInput = {|
  set?: Array<Int> | Int,
|}

export type GroupUpsertWithWhereUniqueWithoutMembersInput = {|
  where: GroupWhereUniqueInput,
  update: GroupUpdateWithoutMembersDataInput,
  create: GroupCreateWithoutMembersInput,
|}

export type WorkspaceMemberUpsertWithWhereUniqueWithoutGroupsInput = {|
  where: WorkspaceMemberWhereUniqueInput,
  update: WorkspaceMemberUpdateWithoutGroupsDataInput,
  create: WorkspaceMemberCreateWithoutGroupsInput,
|}

export type UserUpsertWithoutWorkHoursInput = {|
  update: UserUpdateWithoutWorkHoursDataInput,
  create: UserCreateWithoutWorkHoursInput,
|}

/*
 * An object with an ID

*/
export type Node = {|
  id: ID_Output,
|}

export type UserPreviousValues = {|
  id: ID_Output,
  name: String,
  firstName: String,
  profilePhoto?: String,
  email: String,
  username?: String,
  contactInfo?: String,
  profession?: String,
  timezone: String,
  baseCity?: String,
  baseCountry?: String,
  baseLatitude?: Float,
  baseLongitude?: Float,
  daysOff: Int[],
  googleProviderId?: String,
  pendingSetup?: Boolean,
  deletedAt?: DateTime,
  lastSeen?: DateTime,
  createdAt: DateTime,
  updatedAt: DateTime,
|}

/*
 * Information about pagination in a connection.

*/
export type PageInfo = {|
  hasNextPage: Boolean,
  hasPreviousPage: Boolean,
  startCursor?: String,
  endCursor?: String,
|}

export type UserWorkHoursPreviousValues = {|
  id: ID_Output,
  automaticUpdate?: Boolean,
  allDaysFrom?: String,
  allDaysTo?: String,
  sundayFrom?: String,
  sundayTo?: String,
  tuesdayFrom?: String,
  tuesdayTo?: String,
  mondayFrom?: String,
  mondayTo?: String,
  wednesdayFrom?: String,
  wednesdayTo?: String,
  thursdayFrom?: String,
  thursdayTo?: String,
  fridayFrom?: String,
  fridayTo?: String,
  saturdayFrom?: String,
  saturdayTo?: String,
  createdAt: DateTime,
  updatedAt: DateTime,
|}

/*
 * A connection to a list of items.

*/
export type WorkspaceMemberConnection = {|
  pageInfo: PageInfo,
  edges: WorkspaceMemberEdge[],
  aggregate: AggregateWorkspaceMember,
|}

export type WorkspaceMember = {|
  ...Node,

  id: ID_Output,
  workspace: Workspace,
  user: User,
  groups?: Group[],
  permissionRole: PermissionTags,
  createdAt: DateTime,
  updatedAt: DateTime,
|}

export type UserSubscriptionPayload = {|
  mutation: MutationType,
  node?: User,
  updatedFields?: String[],
  previousValues?: UserPreviousValues,
|}

/*
 * An edge in a connection.

*/
export type UserEdge = {|
  node: User,
  cursor: String,
|}

export type Workspace = {|
  ...Node,

  id: ID_Output,
  members?: WorkspaceMember[],
  name: String,
  slug: String,
  creator: User,
  profilePhoto?: String,
  twistWorkspaceId?: Int,
  deletedAt?: DateTime,
  createdAt: DateTime,
  updatedAt: DateTime,
|}

export type AggregateWorkspace = {|
  count: Int,
|}

export type BatchPayload = {|
  count: Long,
|}

/*
 * A connection to a list of items.

*/
export type WorkspaceConnection = {|
  pageInfo: PageInfo,
  edges: WorkspaceEdge[],
  aggregate: AggregateWorkspace,
|}

export type WorkspacePreviousValues = {|
  id: ID_Output,
  name: String,
  slug: String,
  profilePhoto?: String,
  twistWorkspaceId?: Int,
  deletedAt?: DateTime,
  createdAt: DateTime,
  updatedAt: DateTime,
|}

/*
 * An edge in a connection.

*/
export type UserWorkHoursEdge = {|
  node: UserWorkHours,
  cursor: String,
|}

export type Group = {|
  ...Node,

  id: ID_Output,
  workspace: Workspace,
  members?: WorkspaceMember[],
  name: String,
  createdAt: DateTime,
  updatedAt: DateTime,
|}

export type AggregateUserVacation = {|
  count: Int,
|}

export type WorkspaceSubscriptionPayload = {|
  mutation: MutationType,
  node?: Workspace,
  updatedFields?: String[],
  previousValues?: WorkspacePreviousValues,
|}

/*
 * A connection to a list of items.

*/
export type UserVacationConnection = {|
  pageInfo: PageInfo,
  edges: UserVacationEdge[],
  aggregate: AggregateUserVacation,
|}

export type WorkspaceMemberSubscriptionPayload = {|
  mutation: MutationType,
  node?: WorkspaceMember,
  updatedFields?: String[],
  previousValues?: WorkspaceMemberPreviousValues,
|}

/*
 * An edge in a connection.

*/
export type GroupEdge = {|
  node: Group,
  cursor: String,
|}

export type WorkspaceMemberPreviousValues = {|
  id: ID_Output,
  permissionRole: PermissionTags,
  createdAt: DateTime,
  updatedAt: DateTime,
|}

export type AggregateWorkspaceMember = {|
  count: Int,
|}

export type UserWorkHours = {|
  ...Node,

  id: ID_Output,
  user: User,
  automaticUpdate?: Boolean,
  allDaysFrom?: String,
  allDaysTo?: String,
  sundayFrom?: String,
  sundayTo?: String,
  tuesdayFrom?: String,
  tuesdayTo?: String,
  mondayFrom?: String,
  mondayTo?: String,
  wednesdayFrom?: String,
  wednesdayTo?: String,
  thursdayFrom?: String,
  thursdayTo?: String,
  fridayFrom?: String,
  fridayTo?: String,
  saturdayFrom?: String,
  saturdayTo?: String,
  createdAt: DateTime,
  updatedAt: DateTime,
|}

export type AggregateUser = {|
  count: Int,
|}

export type GroupSubscriptionPayload = {|
  mutation: MutationType,
  node?: Group,
  updatedFields?: String[],
  previousValues?: GroupPreviousValues,
|}

/*
 * An edge in a connection.

*/
export type WorkspaceEdge = {|
  node: Workspace,
  cursor: String,
|}

export type GroupPreviousValues = {|
  id: ID_Output,
  name: String,
  createdAt: DateTime,
  updatedAt: DateTime,
|}

/*
 * A connection to a list of items.

*/
export type UserWorkHoursConnection = {|
  pageInfo: PageInfo,
  edges: UserWorkHoursEdge[],
  aggregate: AggregateUserWorkHours,
|}

export type UserVacation = {|
  ...Node,

  id: ID_Output,
  user: User,
  from: DateTime,
  to: DateTime,
  timezone: String,
  city?: String,
  country?: String,
  createdAt: DateTime,
  updatedAt: DateTime,
|}

export type AggregateGroup = {|
  count: Int,
|}

/*
 * An edge in a connection.

*/
export type WorkspaceMemberEdge = {|
  node: WorkspaceMember,
  cursor: String,
|}

export type UserWorkHoursSubscriptionPayload = {|
  mutation: MutationType,
  node?: UserWorkHours,
  updatedFields?: String[],
  previousValues?: UserWorkHoursPreviousValues,
|}

export type User = {|
  ...Node,

  id: ID_Output,
  name: String,
  firstName: String,
  profilePhoto?: String,
  email: String,
  username?: String,
  contactInfo?: String,
  profession?: String,
  timezone: String,
  baseCity?: String,
  baseCountry?: String,
  baseLatitude?: Float,
  baseLongitude?: Float,
  daysOff: Int[],
  memberOf?: WorkspaceMember[],
  vacations?: UserVacation[],
  workHours?: UserWorkHours,
  googleProviderId?: String,
  pendingSetup?: Boolean,
  deletedAt?: DateTime,
  lastSeen?: DateTime,
  createdAt: DateTime,
  updatedAt: DateTime,
|}

export type UserVacationPreviousValues = {|
  id: ID_Output,
  from: DateTime,
  to: DateTime,
  timezone: String,
  city?: String,
  country?: String,
  createdAt: DateTime,
  updatedAt: DateTime,
|}

export type UserVacationSubscriptionPayload = {|
  mutation: MutationType,
  node?: UserVacation,
  updatedFields?: String[],
  previousValues?: UserVacationPreviousValues,
|}

/*
 * A connection to a list of items.

*/
export type UserConnection = {|
  pageInfo: PageInfo,
  edges: UserEdge[],
  aggregate: AggregateUser,
|}

/*
 * A connection to a list of items.

*/
export type GroupConnection = {|
  pageInfo: PageInfo,
  edges: GroupEdge[],
  aggregate: AggregateGroup,
|}

/*
 * An edge in a connection.

*/
export type UserVacationEdge = {|
  node: UserVacation,
  cursor: String,
|}

export type AggregateUserWorkHours = {|
  count: Int,
|}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

export type DateTime = Date | string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number
