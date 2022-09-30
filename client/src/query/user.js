import { gql } from "@apollo/client"

export const GET_ALL_USERS = gql`
    query {
        getAllUsers {
            id, username, age
        }
    }
`

export const GET_ONE_USER = gql`
    query getUser($id: ID) {
        getUser(id: $id) {
            id, username
        }
    }
`

// fragment
/**
 fragment userWithoutAge on User {
    id, username, posts {
        title, content
    }
 }

 query {
    getAllUsers {
        ...userWithoutAge
    }
 }


 **/
