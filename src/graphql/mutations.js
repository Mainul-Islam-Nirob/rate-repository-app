import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation authorizeMutation($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;