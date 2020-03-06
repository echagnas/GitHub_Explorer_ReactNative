import React from 'react';
import { Provider } from "react-redux";
import { Store } from './store/Store';
import { Main } from './Main';

export default function App() {

  return (
    <Provider store={Store}>
      <Main />
    </Provider>
  );
}
