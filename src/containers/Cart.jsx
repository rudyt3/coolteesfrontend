import React, { useEffect, useState } from 'react';
import CartItem from '../components/common/CartItem';
import { fetchCarts } from '../reducks/carts/operation';
import { fetchItems } from '../reducks/Items/operation';
import { getCarts } from '../reducks/carts/selector';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../reducks/users/selector';
import { getItems } from '../reducks/Items/selector';

const Cart = () => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const carts = getCarts(selector);
    const user = getUser(selector);
    const items = getItems(selector);

    useEffect(() => {
        dispatch(fetchItems());
        dispatch(fetchCarts());
        console.log(carts);
    }, []);

    return (
        <>
            <section>
                <div className="heading">
                    <h3>Cart Items</h3>
                </div>
                <div class="images">
                    <ul class="menu">
                        {
                            (carts,
                            items &&
                                carts.map(cart => (
                                    <li>
                                        <CartItem
                                            cart={cart.item}
                                            cartId={cart.id}
                                            key={cart.item.id}
                                            quantity={cart.quantity}
                                        />
                                    </li>
                                )))
                        }
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Cart;
