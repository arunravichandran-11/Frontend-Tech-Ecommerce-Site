import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProdByCategory,
  filterProductBySearch,
} from "./state-manager/actions/fetchProductsAction";
import SearchBox from "./components/shared/SearchBox";
import Header from "./components/core/Header";
import Footer from "./components/core/Footer";
import Category from "./pages/Category";

const AppRouter = () => {
  const dispatch = useDispatch();
  const category = useSelector((state: any) => state.products.selectedCategory);

  /**
   * Fetches the category list for initial load time
   * in order generates the dynamic routes based on the url provided by each children category.
   */
  useEffect(() => {
    const defaultCat = "156126";
    dispatch(fetchProdByCategory(defaultCat));
  }, [dispatch]);

  /**
   * Emits an action to filter the products by search values using product(article) name
   * @param search | search - User Search Results in header
   */
  const handleSearchResults = (search: string) => {
    dispatch(filterProductBySearch(search));
  };

  return (
    <BrowserRouter>
      <div className="page-container">
        <Header className="header">
          <SearchBox onSearch={handleSearchResults} />
        </Header>
        <Routes>
          {category && (
            <Route path="/" element={<Category catId={category.id} />}>
              <Route path="*" element={<div>Not Found</div>} />
            </Route>
          )}
          {category &&
            category.childrenCategories.map((item: any, index: number) => {
              return (
                <Route
                  key={index}
                  path={`${item.urlPath}`}
                  element={<Category catId={item.id} />}
                ></Route>
              );
            })}
        </Routes>
        <Footer className="footer">
          Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
          Versandkosten.
        </Footer>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
