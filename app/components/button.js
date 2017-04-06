import React from 'react';
import { Button, StyleSheet } from 'react-native-macos';

const styles = StyleSheet.create({
  button: {
    height: 20,
    width: 50,
  }
});

const MyButton = ({ title, onClick }) => {
  return (
    <Button
      type={'momentaryLight'}
      style={styles.button}
      title={title}
      onClick={onClick ? onClick : () => null}
    />
  );
};

export default MyButton;
