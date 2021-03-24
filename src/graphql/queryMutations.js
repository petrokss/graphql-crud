import { gql } from '@apollo/client';

export const GET_USERS_DATA = gql`
  query getUsersData(
    $offset: Int!
    $limit: Int
    $sortKey: String
    $direction: String
  ) {
    users(
      offset: $offset
      limit: $limit
      sortKey: $sortKey
      direction: $direction
    ) {
      id
      name
      surname
      age
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    users(id: $id) {
      id
      name
      surname
      age
      email
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $id: ID!
    $name: String
    $surname: String
    $age: Int
    $email: String
  ) {
    users(id: $id, name: $name, surname: $surname, age: $age, email: $email)
  }
`;
