import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

// import './navigation.styles.jsx';
import {
  Nav,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <Nav>
        <LogoContainer to='/'>
          <CrwnLogo />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to='/shop'>Shop</NavLink>
          {currentUser ? (
            <NavLink onClick={signOutUser} to='/auth'>
              {/*{currentUser.displayName}*/}
              Sign Out
            </NavLink>
          ) : (
            <NavLink to='/auth'>Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </Nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
