import {
  ActionTypes,
  FetchProductsAction,
  FilterBySearchAction,
  CategoryInterface,
  Article,
} from "../../types";

export interface ProductState {
  selectedCategory: CategoryInterface | null;
  articles: Article[];
}

const initialState = {
  selectedCategory: null,
  articles: [],
};

/**
 *
 * @param state | initialState
 * @param action | FetchProductsAction | FilterBySearchAction
 * @returns ProductState
 */
const productReducer = function (
  state: ProductState = initialState,
  action: FetchProductsAction | FilterBySearchAction
) {
  switch (action.type) {
    /**
     * Update the state with the full category details + articles associated with the category
     * Note: Need to change the redux store state property: selectedCategory. Keep only necessary details in it instead of full response.
     */
    case ActionTypes.fetchProductsByCatId:
      const selectedCategoryResponse = action.payload;
      return {
        ...state,
        selectedCategory: selectedCategoryResponse[0],
        articles: selectedCategoryResponse[0].categoryArticles.articles,
      };

    /**
     * Update the state with the articles which then will be used in category component to update the UI
     */
    case ActionTypes.fetchProductByUserSearch:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
