import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/buttons/buttons.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const navigate = useNavigate();
  // let total = 0;
  // cartItems.map((item) => {
  //   total += parseInt(item.price) * parseInt(item.quantity);
  // });

  const goToPayment = () => {
    navigate('/checkout');
  };
  return (
    <div className='checkout'>
      <h1 className='checkout-header'>Checkout</h1>
      {/*<div className='checkout-headings'>
        <span className='checkout-title'>Product</span>
        <span className='checkout-title'>Description</span>
        <span className='checkout-title'>Quantity</span>
        <span className='checkout-title'>Price</span>
        <span className='checkout-title'>Remove</span>
  </div>*/}
      <hr />
      <div className='checkout-items'>
        {cartItems.map((item) => (
          <CheckoutItem cartItem={item} key={item.id} />
        ))}
      </div>
      <div className='bottom'>
        <Button onClick={goToPayment}>Checkout</Button>
        <h2 className='cart-total'>Total: ${cartTotal}</h2>
      </div>
    </div>
  );
};

export default Checkout;
