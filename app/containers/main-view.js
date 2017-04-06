import React from 'react';
import ReactNative from 'react-native-macos';
import { connect } from 'react-redux';
const {
  StyleSheet,
  Text,
  View,
} = ReactNative;

import Button from '../components/button';
import counterConnector from '../selectors/counter';
import { counterActions } from '../actions/';

const StatTicker = React.createClass({
 render() {
   return (
     <View style={styles.container}>
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

export default connect(counterConnector, counterActions)(StatTicker);
