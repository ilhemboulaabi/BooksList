import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import store from './store';

let root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={store}> <App /> </Provider>
);

serviceWorker.unregister();
