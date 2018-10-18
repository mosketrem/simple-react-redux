import React, { Component } from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import { Provider } from "react-redux";
import App from './App';

const initialState = {
    input1: "",
    input2: "",
    multi1: false,
    multi2: false,
    multi3: false,
    single: null
};

const reducer = (state, action) => {
    let tempState = { ...state };
    switch (action.type) {
        case "TEXT":
            tempState[action.payload.name] = action.payload.text;
            break;
        case "MULTISELECT":
            tempState[action.payload.name] = action.payload.checked;
            break;
        case "SINGLESELECT":
            tempState.single = action.payload.checked ? action.payload.name : null;
            break;
        case "RESET":
            action.payload.event.preventDefault();
            tempState = initialState;
            break;
    }
    state = tempState;
    // console.log(state);
    return state;
};

const store = createStore(reducer, initialState);


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById("app")
);
