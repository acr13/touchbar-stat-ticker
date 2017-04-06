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
import Game from '../components/game';

const StatTicker = React.createClass({
 render() {
   return (
     <View style={styles.container}>
       <TouchBar>
         {this.props.scores.map((game, idx) => {
            return (
              <Game
                key={idx}
                label={game.label}
              />
            );
         })}
       </TouchBar>

       <Text style={styles.header}>{'StatTicker™'}</Text>
       <Button title="Refresh" onClick={() => this.props.onRefreshScoresClick()} />
     </View>
   );
 }
});

// Counter Example
/*
  <Text style={styles.welcome}>{'Counter Example'}</Text>
  <Button title="+" onClick={() => this.props.onIncrementClick()} />
  <Text style={styles.instructions}>{this.props.counterValue}</Text>
  <Button title="-" onClick={() => this.props.onDecrementClick()} />
*/

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FCFF',
 },
 header: {
   fontSize: 20,
   textAlign: 'center',
   margin: 10,
 },
});

export default connect(appConnector, appActions)(StatTicker);
