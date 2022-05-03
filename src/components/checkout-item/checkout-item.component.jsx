import { useContext, Fragment } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {
  CheckoutItemContainer,
  CheckoutImg,
  CheckoutName,
  CheckoutItemQuantity,
  CheckoutRemove,
  CheckoutDecrease,
  CheckoutIncrease,
  Quantity,
  CheckoutItemPrice,
} from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  const { addItemToCart, decrementItem, removeItemFromCart } =
    useContext(CartContext);

  //handlers
  const addItemHandler = () => addItemToCart(cartItem);
  const decrementHandler = () => decrementItem(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <Fragment>
      <CheckoutItemContainer>
        <CheckoutImg src={imageUrl} alt={name} />
        <CheckoutName>{name}</CheckoutName>
        <CheckoutItemQuantity>
          <CheckoutDecrease onClick={decrementHandler}>-</CheckoutDecrease>
          <Quantity>{quantity}</Quantity>

          <CheckoutIncrease onClick={addItemHandler}>+</CheckoutIncrease>
        </CheckoutItemQuantity>
        <CheckoutItemPrice>${price * quantity}</CheckoutItemPrice>
        <CheckoutRemove onClick={removeItemHandler}>&#10005;</CheckoutRemove>
      </CheckoutItemContainer>
      <hr />
    </Fragment>
  );
};

export default CheckoutItem;
