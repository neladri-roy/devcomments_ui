import { gql } from '@apollo/client'


const GET_ALL_POST_URLS = gql`
query {
    blogPosts{
     data {
      attributes {
        urlSlug
      }
    } 
    }
  }
`;

const GET_ALL_POSTS = gql`
query {
    blogPosts{
     data {
      attributes {
        title
        description
        urlSlug
        publishedAt
      }
    } 
    }
  }`

  const GET_INDIVIDUAL_POST = gql`
  query ($slugUrl: String) {
    blogPosts(filters:{ urlSlug: { eq: $slugUrl }}){
     data {
      attributes {
        title
        content
      }
    } 
    }
  }`


  export { GET_ALL_POSTS, GET_ALL_POST_URLS, GET_INDIVIDUAL_POST};