import React from 'react';
import { Button, StyleSheet } from 'react-native-macos';

const Game = ({ label, onClick }) => {
  return (
    <Button
      title={label}
      bezelStyle={'rounded'}
      onClick={onClick ? onClick : () => null}
    />
  );
};

export default Game;
