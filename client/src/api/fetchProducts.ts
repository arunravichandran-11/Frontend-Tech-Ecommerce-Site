import { httpClient } from "../helpers/httpClient";
import { CategoryApiResponse } from "../types";
const defaultId = "156126";

/**
 * @param id | string - Category Id
 * @param count | number - Number of articles to be fetched
 * @returns | string
 */
const generatedQuery = (id: string, count: number) => {
  const graphqlQuery = {
    query: `{
          categories(ids: "${id}", locale: de_DE) {
            id,
            name,
            urlPath,
            articleCount
            childrenCategories {
              id
              name
              urlPath
            }
            categoryArticles(first: ${count}) {
              articles {
                name
                variantName
                prices {
                  currency
                  regular {
                    value
                  }
                }
                images(
                  format: WEBP
                  maxWidth: 200
                  maxHeight: 200
                  limit: 1
                ) {
                  path
                }
              }
            }
          }
      }`,
  };
  return graphqlQuery;
};

/**
 * Makes an api call to fetch the product details based on category id
 * @param catId | string
 * @returns JSON response of category data
 */
export const fetchAllProducts = async (
  catId: string
): Promise<CategoryApiResponse> => {
  const categoryId = catId ? catId : defaultId;
  const query = generatedQuery(categoryId, 50);

  const productResults = await httpClient.post(
    "/graphql",
    JSON.stringify(query)
  );
  return productResults.data.data;
};
