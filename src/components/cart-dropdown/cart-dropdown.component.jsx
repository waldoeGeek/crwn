import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button, { BUTTON_TYPE_CLASSES } from '../buttons/buttons.component';
import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../contexts/cart.context';

import {
  CartDropDownContainer,
  CartItems,
  Total,
  EmptyCart,
} from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <EmptyCart>Your Cart is Empty</EmptyCart>
        )}
      </CartItems>
      <Total>Total: ${cartTotal}</Total>
      <Button
        onClick={goToCheckoutHandler}
        buttonType={BUTTON_TYPE_CLASSES.base}
      >
        Go To Checkout
      </Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
