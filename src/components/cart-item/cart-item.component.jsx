import {
  CartItemContainer,
  CartItemImg,
  CartItemName,
  CartItemDetails,
} from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer key={Math.random()}>
      <CartItemImg src={imageUrl} alt={name} style={{ width: '80px' }} />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <span className='item-quantity'>
          {quantity} X ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
