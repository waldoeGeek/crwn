import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from './cart-icon.styles.jsx';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => {
    return setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer>
      <ShoppingIcon className='shopping-icon' onClick={toggleIsCartOpen} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
