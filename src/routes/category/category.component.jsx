import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';
import GetCategoryLinks from '../../components/get-category-links/get-category-links.component';

import {
  CategoryContainer,
  CategoryHR,
  CategoryHeading,
  CategoryLinks,
  CategoryTitle,
} from './category.styles.jsx';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <CategoryContainer>
      <CategoryTitle>
        <CategoryHeading>{category}</CategoryHeading>
        <CategoryHR />
        <CategoryLinks>
          <GetCategoryLinks category={category} />
        </CategoryLinks>
      </CategoryTitle>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </CategoryContainer>
  );
};

export default Category;
