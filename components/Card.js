import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  ); // can override any previous styles from styles.card
};

const styles = StyleSheet.create({
  card: {
    // shadowColor: 'black',
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 6,
    // shadowOpacity: 0.26,
    // elevation: 8,
    backgroundColor: 'white',
    borderRadius: 10, //rounded border of shadow,
  },
});

export default Card;
