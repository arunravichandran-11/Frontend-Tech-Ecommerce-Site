import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticleCard from "../../components/shared/ArticleCard";
import SideBar from "../../components/core/SideBar";
import { List, ListItem } from "../../components/core/List";
import { fetchProdByCategory } from "../../state-manager/actions/fetchProductsAction";
import { ProductState, CategoryInterface, Article } from "../../types";

interface CategoryProps {
  catId: string;
}
/**
 * Fetches the category name, sub category list and articles for the given carId and render it.
 * @param param | catId
 * @returns JSX
 */
const Category = ({ catId }: CategoryProps) => {
  const dispatch = useDispatch();
  const category = useSelector(
    (state: ProductState) => state.products.selectedCategory
  );
  const articles = useSelector(
    (state: ProductState) => state.products.articles
  );

  /**
   * Dispatch fetchProdByCategory Action on every change of CatId.
   */
  useEffect(() => {
    dispatch(fetchProdByCategory(catId));
  }, [catId, dispatch]);

  const handleChangeCat = (item: CategoryInterface) => {
    dispatch(fetchProdByCategory(item.id));
  };

  return (
    <>
      <SideBar title={(category && category.name) || ""}>
        <List>
          {category &&
            category.childrenCategories.map(
              (item: CategoryInterface, index: number) => {
                return (
                  <div key={index}>
                    <ListItem
                      data-id={item.id}
                      href={item.urlPath}
                      onClick={() => handleChangeCat(item)}
                    >
                      {item.name}
                    </ListItem>
                  </div>
                );
              }
            )}
        </List>
      </SideBar>
      <div className="content">
        <div className="articles">
          {articles &&
            articles.length > 0 &&
            articles.map((article: Article, index: number) => {
              return <ArticleCard key={index} article={article} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Category;
