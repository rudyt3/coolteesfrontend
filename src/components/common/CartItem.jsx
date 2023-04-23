import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, increaseCart, decreaseCart } from '../../reducks/carts/operation';
import { getCarts, getSubtotal } from '../../reducks/carts/selector';

const CartItem = ({ cart, quantity, cartId }) => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const carts = getCarts(selector);
    const subtotal = getSubtotal(selector);

    const clickPlusCart = () => {
        dispatch(increaseCart(cartId));
    };
    const clickMinusCart = () => {
        dispatch(decreaseCart(cartId));
    };

    useEffect(() => {
        console.log(cart.image);
        console.log(cart);
        console.log(carts);
    }, []);

    return (
        <>
            <div className="circle">
                <img src={'https://res.cloudinary.com/dvcqt0fz8/' + cart.image} />
            </div>
            <h3>{cart.name}</h3>
            <h6>{quantity}</h6>
            <p>${cart.price}</p>
            <button class="number">
                <span id="minus" onClick={clickMinusCart}>
                    -
                </span>
                <span id="count">{quantity}</span>
                <span id="plus" onClick={clickPlusCart}>
                    +
                </span>
            </button>
        </>
    );
};

export default CartItem;
