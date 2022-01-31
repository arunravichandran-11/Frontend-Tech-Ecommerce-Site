import { fetchAllProducts } from "../../api/fetchProducts";
import { Dispatch } from "redux";
import {
  ActionTypes,
  Article,
  FetchProductsAction,
  FilterBySearchAction,
} from "../../types";

/**
 * Get the articles and child category details by the given the selected category.
 * @param searchValue | catId
 * @returns Dispatches fetchProductsByCatId action to reducer to update the state.
 */
const fetchProdByCategory = (catId: string) => async (dispatch: Dispatch) => {
  try {
    const res = await fetchAllProducts(catId);
    const result = res.categories;
    const selectedCategory = [...result];
    dispatch<FetchProductsAction>({
      type: ActionTypes.fetchProductsByCatId,
      payload: selectedCategory,
    });
  } catch (error) {
    // dispatch({
    //   type: "FETCH_PRODUCT_BY_CAT_ERROR",
    //   payload: error,
    // });
  }
};

/**
 * @param searchValue | string - Filters the articles list from the last modified state
 * @returns Dispatches fetchProductByUserSearch action to reducer
 */
const filterProductBySearch =
  (searchValue: string) => async (dispatch: Dispatch, getState: any) => {
    try {
      const { products } = getState();
      const articles = products.selectedCategory.categoryArticles.articles;
      if (articles && articles.length > 0) {
        const searchResults = articles.filter((item: Article) => {
          if (item.name.includes(searchValue)) {
            return item;
          }
          return null;
        });

        dispatch<FilterBySearchAction>({
          type: ActionTypes.fetchProductByUserSearch,
          payload: searchResults,
        });
      }
    } catch (error) {}
  };

export { fetchProdByCategory, filterProductBySearch };
