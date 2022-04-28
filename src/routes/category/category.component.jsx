import { useParams, Link } from 'react-router-dom';
import { useContext, useState, useEffect, Fragment } from 'react';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';

import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  const GetCategoryLinks = () => {
    if (category === 'hats') {
      return ['jackets', 'sneakers', 'womens', 'mens'];
    } else if (category === 'jackets') {
      return ['hats', 'sneakers', 'womens', 'mens'];
    } else if (category === 'sneakers') {
      return ['hats', 'jackets', 'womens', 'mens'];
    } else if (category === 'womens') {
      return ['hats', 'jackets', 'sneakers', 'mens'];
    } else if (category === 'mens') {
      return ['hats', 'jackets', 'sneakers', 'womens'];
    }
  };

  const getCategoryLinks = GetCategoryLinks();
  console.log(`array: ${getCategoryLinks}`);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className='category-container'>
      <div className='category__title'>
        <h2>{category}</h2>
        <hr />
        <div className='category__links'>
          {getCategoryLinks.map((item, idx) => {
            return (
              <Link to={`/shop/${item}`}>
                <Fragment key={Math.random()}>
                  <h3
                    style={{
                      animation: `fade 1.${idx}s ease-in-out`,
                    }}
                  >
                    {item}
                  </h3>
                </Fragment>
              </Link>
            );
          })}
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
