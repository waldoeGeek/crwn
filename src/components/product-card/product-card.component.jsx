import Button from '../buttons/buttons.component';
// import { ProductsContext } from '../../contexts/product.context';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} className='product-image' />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted'>Add To Cart</Button>
    </div>
  );
};

export default ProductCard;