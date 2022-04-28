import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';
import GetCategoryLinks from '../../components/get-category-links/get-category-links.component';

import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className='category-container'>
      <div className='category__title'>
        <h2>{category}</h2>
        <hr />
        <div className='category__links'>
          <GetCategoryLinks category={category} />
        </div>
      </div>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Category;
