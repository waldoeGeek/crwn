import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';

import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className='category'>
      <h2 className='category-heading'>
        <Link className='category-heading--text' to={title}>
          {title}
        </Link>
      </h2>
      <div className='category-preview'>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
