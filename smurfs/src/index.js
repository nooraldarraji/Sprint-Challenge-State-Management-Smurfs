import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

const store = createStore( null , applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider> , document.getElementById("root"));
