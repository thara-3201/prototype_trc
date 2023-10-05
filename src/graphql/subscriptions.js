/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUpdatepwd = /* GraphQL */ `
  subscription OnCreateUpdatepwd(
    $filter: ModelSubscriptionUpdatepwdFilterInput
  ) {
    onCreateUpdatepwd(filter: $filter) {
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
export const onUpdateUpdatepwd = /* GraphQL */ `
  subscription OnUpdateUpdatepwd(
    $filter: ModelSubscriptionUpdatepwdFilterInput
  ) {
    onUpdateUpdatepwd(filter: $filter) {
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
export const onDeleteUpdatepwd = /* GraphQL */ `
  subscription OnDeleteUpdatepwd(
    $filter: ModelSubscriptionUpdatepwdFilterInput
  ) {
    onDeleteUpdatepwd(filter: $filter) {
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
export const onCreateEntity2 = /* GraphQL */ `
  subscription OnCreateEntity2($filter: ModelSubscriptionEntity2FilterInput) {
    onCreateEntity2(filter: $filter) {
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
export const onUpdateEntity2 = /* GraphQL */ `
  subscription OnUpdateEntity2($filter: ModelSubscriptionEntity2FilterInput) {
    onUpdateEntity2(filter: $filter) {
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
export const onDeleteEntity2 = /* GraphQL */ `
  subscription OnDeleteEntity2($filter: ModelSubscriptionEntity2FilterInput) {
    onDeleteEntity2(filter: $filter) {
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
export const onCreateLogin = /* GraphQL */ `
  subscription OnCreateLogin($filter: ModelSubscriptionLoginFilterInput) {
    onCreateLogin(filter: $filter) {
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
export const onUpdateLogin = /* GraphQL */ `
  subscription OnUpdateLogin($filter: ModelSubscriptionLoginFilterInput) {
    onUpdateLogin(filter: $filter) {
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
export const onDeleteLogin = /* GraphQL */ `
  subscription OnDeleteLogin($filter: ModelSubscriptionLoginFilterInput) {
    onDeleteLogin(filter: $filter) {
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
