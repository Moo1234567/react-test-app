import React from 'react';
import {connect} from 'react-redux';
import {clearItemFromCart, removeItem,addItem} from '../../redux/cart/cart.actions'


import './checkout-item.styles.scss'


const CheckoutItem = ({item:{name,price,quantity, imageUrl}, dispatch, item}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={()=>dispatch(removeItem(item))}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={()=>dispatch(addItem(item))}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=>dispatch(clearItemFromCart(item))}>
            &#10006;
        </div>
       
    </div>
)

export default connect(null)(CheckoutItem);