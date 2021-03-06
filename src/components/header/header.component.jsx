import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'; 
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden} from '../../redux/cart/cart.selectors'
import { selectCurrentUser} from '../../redux/user/user.selectors'

import './header.styles.scss';


const Header = ({ currentUser, toggleCartHidden }) => (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link to="/shop" className='option'>
                SHOP
            </Link>
            <Link to="/contact" className='option'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                :
                <Link to="/signin" className='option'>
                    SIGN IN
                </Link>
            }
            <CartIcon/>
        </div>
        {toggleCartHidden ? null :<CartDropdown/>}
    </div>
)


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    toggleCartHidden: selectCartHidden
  });

export default connect(mapStateToProps)(Header);