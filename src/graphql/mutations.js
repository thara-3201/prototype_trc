/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUpdatepwd = /* GraphQL */ `
  mutation CreateUpdatepwd(
    $input: CreateUpdatepwdInput!
    $condition: ModelUpdatepwdConditionInput
  ) {
    createUpdatepwd(input: $input, condition: $condition) {
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
export const updateUpdatepwd = /* GraphQL */ `
  mutation UpdateUpdatepwd(
    $input: UpdateUpdatepwdInput!
    $condition: ModelUpdatepwdConditionInput
  ) {
    updateUpdatepwd(input: $input, condition: $condition) {
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
export const deleteUpdatepwd = /* GraphQL */ `
  mutation DeleteUpdatepwd(
    $input: DeleteUpdatepwdInput!
    $condition: ModelUpdatepwdConditionInput
  ) {
    deleteUpdatepwd(input: $input, condition: $condition) {
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
export const createEntity2 = /* GraphQL */ `
  mutation CreateEntity2(
    $input: CreateEntity2Input!
    $condition: ModelEntity2ConditionInput
  ) {
    createEntity2(input: $input, condition: $condition) {
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
export const updateEntity2 = /* GraphQL */ `
  mutation UpdateEntity2(
    $input: UpdateEntity2Input!
    $condition: ModelEntity2ConditionInput
  ) {
    updateEntity2(input: $input, condition: $condition) {
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
export const deleteEntity2 = /* GraphQL */ `
  mutation DeleteEntity2(
    $input: DeleteEntity2Input!
    $condition: ModelEntity2ConditionInput
  ) {
    deleteEntity2(input: $input, condition: $condition) {
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
export const createLogin = /* GraphQL */ `
  mutation CreateLogin(
    $input: CreateLoginInput!
    $condition: ModelLoginConditionInput
  ) {
    createLogin(input: $input, condition: $condition) {
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
export const updateLogin = /* GraphQL */ `
  mutation UpdateLogin(
    $input: UpdateLoginInput!
    $condition: ModelLoginConditionInput
  ) {
    updateLogin(input: $input, condition: $condition) {
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
export const deleteLogin = /* GraphQL */ `
  mutation DeleteLogin(
    $input: DeleteLoginInput!
    $condition: ModelLoginConditionInput
  ) {
    deleteLogin(input: $input, condition: $condition) {
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
