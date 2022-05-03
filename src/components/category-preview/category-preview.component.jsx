import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';

import {
  Category,
  CategoryHeading,
  CategoryPre,
} from './category-preview.styles.jsx';

const CategoryPreview = ({ title, products }) => {
  return (
    <Category>
      <h2 className='category-heading'>
        <CategoryHeading to={title}>{title}</CategoryHeading>
      </h2>
      <CategoryPre>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </CategoryPre>
    </Category>
  );
};

export default CategoryPreview;
