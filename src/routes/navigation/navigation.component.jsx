import React, { Fragment, useCallback, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);
  const { isCartOpen } = useContext(CartContext);

  const signInHandler = useCallback(() => {
    setCurrentUser('kyttndr');
  }, []);

  const signOutHandler = useCallback(() => {
    setCurrentUser(null);
  }, []);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutHandler}>
              {' '}
              SIGN OUT{' '}
            </span>
          ) : (
            <span className='nav-link' onClick={signInHandler}>
              {' '}
              SIGN IN{' '}
            </span>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
