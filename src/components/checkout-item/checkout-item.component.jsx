import { useContext, Fragment } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  const { addItemToCart, decrementItem, removeItemFromCart } =
    useContext(CartContext);
  console.log(cartItem);
  return (
    <Fragment>
      <div className='checkout-item-container'>
        <img src={imageUrl} alt={name} className='checkout-img' />
        <h2 className='checkout-item-name'>{name}</h2>
        <span className='checkout-item-quantity'>
          <span
            className='checkout-decrease'
            onClick={() => decrementItem(cartItem)}
          >
            <b> - </b>{' '}
          </span>{' '}
          {quantity}
          <span
            className='checkout-increase'
            onClick={() => addItemToCart(cartItem)}
          >
            <b> + </b>
          </span>{' '}
        </span>
        <span className='checkout-item-price'>${price * quantity}</span>
        <span
          className='checkout-remove'
          onClick={() => removeItemFromCart(cartItem)}
        >
          &#10005;{' '}
        </span>
      </div>
      <hr />
    </Fragment>
  );
};

export default CheckoutItem;
