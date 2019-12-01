import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import rootReducer, { rootSaga } from "./modules/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { tempSetUser, check } from "./modules/user";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

function loadUser() {
  try {
    const user =localStorage.getItem('user');
    if(!user) return; // 로그인 상태가 아닐경우 아무것도 하지 않음

    store.dispatch(tempSetUser(user))
    store.dispatch(check());
  } catch (error) {
    console.log('localStorage is not working');
  }
}

sagaMiddleware.run(rootSaga);
loadUser(); // 사가위에 적용 시 사가부분이 제대로 작동하지 않음.

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
