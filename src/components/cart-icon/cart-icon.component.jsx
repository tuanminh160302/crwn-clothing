import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, cartItems }) => {

    let total = 0
    cartItems.map((cartItem) => (
        total += cartItem.quantity
    ))

    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{total}</span>
        </div>
    )
}

const mapStateToProps = ({ cart: {cartItems} }) => ({
    cartItems
})

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => {dispatch(toggleCartHidden())}
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);