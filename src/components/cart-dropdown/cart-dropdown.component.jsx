import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../buttons/buttons.component';
import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../contexts/cart.context';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <h2 className='total'>Total: ${cartTotal}</h2>
      <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
