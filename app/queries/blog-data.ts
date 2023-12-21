import { gql } from "graphql-request";
import { getClient } from "../lib/graphQLClient";

export const getAllPosts = async (tags) => {
  const client = getClient();
  //denydevito.hashnode.dev
  const data = await client.request(
    gql`
      query allPosts($tags: [ObjectId!]) {
        publication(host: "denydevito.hashnode.dev") {
          title
          posts(first: 20, filter: { tags: $tags }) {
            pageInfo {
              hasNextPage
              endCursor
            }
            edges {
              node {
                author {
                  name
                  profilePicture
                }
                title
                url
                subtitle
                brief
                slug
                coverImage {
                  url
                }
                tags {
                  name
                  slug
                  id
                }
                publishedAt
                readTimeInMinutes
              }
            }
          }
        }
      }
    `,
    { tags: tags }
  );

  return data.publication.posts.edges;
};

export const getPost = async (slug) => {
  const client = getClient();

  const data = await client.request(
    gql`
      query postDetails($slug: String!) {
        publication(host: "denydevito.hashnode.dev") {
          post(slug: $slug) {
            author {
              name
              profilePicture
            }
            publishedAt
            title
            subtitle
            readTimeInMinutes
            content {
              html
            }
            tags {
              name
              slug
              id
            }
            coverImage {
              url
            }
          }
        }
      }
    `,
    { slug: slug }
  );

  return data.publication.post;
};
