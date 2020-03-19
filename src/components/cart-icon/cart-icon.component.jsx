import React from 'react';
import {connect} from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

import {ReactComponent as Icon} from '../../assets/cart.svg';

const CartIcon = ({toggleCartHidden}) => (
    <div onClick={toggleCartHidden} className='cart-icon'>
        <Icon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default  connect(null,mapDispatchToProps)(CartIcon);