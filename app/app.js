import React from 'react';
import { Provider } from 'react-redux';
import ReactNative from 'react-native-macos';
const {
  StyleSheet,
  Text,
  View,
} = ReactNative;

import configureStore from './store';
import MainView from './containers/main-view';

const store = configureStore();

const StatTicker = React.createClass({
 render() {
   return (
     <Provider store={store}>
       <MainView />
     </Provider>
   );
 }
});


export default StatTicker;
