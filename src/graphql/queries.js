/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUpdatepwd = /* GraphQL */ `
  query GetUpdatepwd($id: ID!) {
    getUpdatepwd(id: $id) {
      id
      oldpassword
      newpassword
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listUpdatepwds = /* GraphQL */ `
  query ListUpdatepwds(
    $filter: ModelUpdatepwdFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUpdatepwds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        oldpassword
        newpassword
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUpdatepwds = /* GraphQL */ `
  query SyncUpdatepwds(
    $filter: ModelUpdatepwdFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUpdatepwds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        oldpassword
        newpassword
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getEntity2 = /* GraphQL */ `
  query GetEntity2($id: ID!) {
    getEntity2(id: $id) {
      id
      newpassword
      retypepassword
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listEntity2s = /* GraphQL */ `
  query ListEntity2s(
    $filter: ModelEntity2FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntity2s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        newpassword
        retypepassword
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncEntity2s = /* GraphQL */ `
  query SyncEntity2s(
    $filter: ModelEntity2FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEntity2s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        newpassword
        retypepassword
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getLogin = /* GraphQL */ `
  query GetLogin($id: ID!) {
    getLogin(id: $id) {
      id
      username
      password
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listLogins = /* GraphQL */ `
  query ListLogins(
    $filter: ModelLoginFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLogins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        password
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncLogins = /* GraphQL */ `
  query SyncLogins(
    $filter: ModelLoginFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLogins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        password
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
