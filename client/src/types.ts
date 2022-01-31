export enum ActionTypes {
  fetchProductsByCatId,
  fetchProductByUserSearch,
}

export interface Article {
  images: {
    path: string;
  };
  name: string;
  prices: {
    currency: string;
    regular: {
      value: string;
    };
  };
  variantName: string;
}

export interface CategoryInterface {
  id: string;
  name: string;
  urlPath: string;
  articleCount: string;
  childrenCategories: CategoryInterface[];
  categoryArticles: {
    articles: Article[];
  };
}

export interface FetchProductsAction {
  type: ActionTypes.fetchProductsByCatId;
  payload: CategoryInterface[];
}

export interface FilterBySearchAction {
  type: ActionTypes.fetchProductByUserSearch;
  payload: null;
}

export interface CategoryApiResponse {
  categories: CategoryInterface[];
}

export interface ProductState {
  products: {
    selectedCategory?: CategoryInterface | null;
    articles?: Article[];
  };
}
