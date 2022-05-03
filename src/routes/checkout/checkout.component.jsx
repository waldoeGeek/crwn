import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../components/buttons/buttons.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CartContext } from '../../contexts/cart.context';

import { CheckoutContainer, Bottom, EmptyCart } from './checkout.styles.jsx';

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
    <CheckoutContainer>
      <h1 className='checkout-header'>Checkout</h1>
      <hr />
      <div className='checkout-items'>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CheckoutItem cartItem={item} key={item.id} />
          ))
        ) : (
          <EmptyCart>Cart Is Empty!</EmptyCart>
        )}
      </div>
      <Bottom>
        <Button onClick={goToPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>
          Checkout
        </Button>
        <h2 className='cart-total'>Total: ${cartTotal}</h2>
      </Bottom>
    </CheckoutContainer>
  );
};

export default Checkout;
