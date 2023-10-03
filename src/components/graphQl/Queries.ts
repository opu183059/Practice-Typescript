import { gql } from "../../__generated__";

export const GET_CHARACTER = gql(`
  query getCharecter{
    characters {
      results {
        id
        name
        gender
        location {
          name
        }
        image
        episode {
          name
        }
      }
    }
  }
`);