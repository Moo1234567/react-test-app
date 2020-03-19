import React from 'react';
import {connect} from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

import {ReactComponent as Icon} from '../../assets/cart.svg';

import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div onClick={toggleCartHidden} className='cart-icon'>
        <Icon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
   itemCount: selectCartItemsCount
});
export default  connect(mapStateToProps,mapDispatchToProps)(CartIcon);