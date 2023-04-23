import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from './Router';
import './assets/style.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { getUser } from './reducks/users/selector';
import { fetchUserFromLocalStorage } from './reducks/users/operation';
import { getSubtotal } from './reducks/carts/selector';

let pageUrl = window.location.toString();

function App() {
    const [showFooter, setShowFooter] = useState(true);
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const user = getUser(selector);
    const subtotal = getSubtotal(selector);

    useEffect(() => {
        if (pageUrl.includes('Shipping') || pageUrl.includes('thankyou')) {
            setShowFooter(false);
        }
        dispatch(fetchUserFromLocalStorage());
    }, []);
    return (
        <>
            <Header />
            <Router />
            {showFooter && <Footer price={subtotal} />}
        </>
    );
}

export default App;
