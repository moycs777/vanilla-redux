import React from 'react';
import { hydrate } from 'react-dom';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';
//import data from '../api.json';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/index';
import normalizedData from '../schemas/index';

const initialState = {
    data: {
        //...data
        entities: normalizedData.entities,
        categories: normalizedData.result.categories,
        search: [],
    },
    modal:{
        visibility: false,
        mediaId:null
    }
}

const store = createStore(
    reducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const homeContainer = document.getElementById('home-container')

render(
    <Provider store={store}>
        <Home/>
    </Provider>
    , homeContainer
);

