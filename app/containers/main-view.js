import React from 'react';
import ReactNative from 'react-native-macos';
import { connect } from 'react-redux';
import TouchBar from 'react-native-touchbar';
const {
  StyleSheet,
  Text,
  View,
} = ReactNative;


import appConnector from '../selectors/';
import appActions from '../actions/';

import Button from '../components/button';

const StatTicker = React.createClass({
 render() {
   return (
     <View style={styles.container}>
       <TouchBar>
         <View style={{ backgroundColor: 'red', flex: 1}} />
         <Button title="Test123" onClick={() => alert('hello')} />
       </TouchBar>


       <Text style={styles.welcome}>
         Welcome to React Native macOS!
       </Text>

       <Button title="+" onClick={() => this.props.onIncrementClick()} />
       <Text style={styles.instructions}>{this.props.counterValue}</Text>
       <Button title="-" onClick={() => this.props.onDecrementClick()} />

       <Button title="API Request" onClick={() => this.props.onAPIClick()} />
     </View>
   );
 }
});

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FCFF',
 },
 welcome: {
   fontSize: 20,
   textAlign: 'center',
   margin: 10,
 },
 instructions: {
   textAlign: 'center',
   color: '#333333',
   marginBottom: 5,
 },
});

export default connect(appConnector, appActions)(StatTicker);
