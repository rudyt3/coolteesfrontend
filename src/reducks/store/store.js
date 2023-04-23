import { legacy_createStore as reduxCreateStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import { PostsReducer } from '../posts/reducers';
import { UserReducer } from '../users/reducer';
import { ItemsReducer } from '../Items/reducer';
import { CartsReducer } from '../carts/reducer';

export default function createStore() {
    return reduxCreateStore(
        combineReducers({
            
            posts: PostsReducer,
            users: UserReducer,
            items: ItemsReducer,
            carts: CartsReducer
        }),
        compose(
            applyMiddleware(routerMiddleware(), thunk)
            // DEBUG MODE
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
}
