import React from 'react';
import { Route, Routes } from 'react-router';
import Cart from './containers/Cart';
import Home from './containers/Home';
import Shipping from './containers/Shipping';
import Signin from './containers/Signin';
import SignUp from './containers/Signup'
import ThankYou from './containers/ThankYou';

const Router = () => {
    return (
        <>
            <Routes>
                <Route exact path={'/'} element={<Home />} />
                <Route exact path={'/signup'} element={<SignUp />} />
                <Route exact path={'/signin'} element={<Signin />} />
                <Route exact path={'/cart'} element={<Cart />} />
                <Route exact path={'/shipping'} element={<Shipping />} />
                <Route exact path={'/thankyou'} element={<ThankYou />} />
            </Routes>
        </>
    );
};
export default Router;
