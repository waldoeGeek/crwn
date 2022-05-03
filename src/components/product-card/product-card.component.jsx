import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button, { BUTTON_TYPE_CLASSES } from '../buttons/buttons.component';
// import { ProductsContext } from '../../contexts/product.context';

import {
  ProductCardContainer,
  ProductImage,
  ProductButton,
  Footer,
  FooterName,
  FooterPrice,
} from './product-card.styles.jsx';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };
  const random = 1 + Math.random();

  return (
    <ProductCardContainer
    // style={{ animation: `fade ${random}s ease-in-out` }}
    >
      <ProductImage src={imageUrl} alt={`${name}`} />
      <Footer>
        <FooterName>{name}</FooterName>
        <FooterPrice>${price}</FooterPrice>
      </Footer>
      <ProductButton buttonType='inverted' onClick={addProductToCart}>
        Add To Cart
      </ProductButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
