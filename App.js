import React from 'react';
import {View} from 'react-native';

import * as firebase from 'firebase';
import {firebaseConfig} from './components/config';
import StackNav from './components/stackNav';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './components/reducers/Index';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const store = createStore(rootReducer);
export default function App() {
  return (
    <Provider store={store}>
      <StackNav />
    </Provider>
  );
}
