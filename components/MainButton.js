import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Dimensions,
} from 'react-native';
import Colors from '../constants/colors';

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
      <View style={{ ...styles.button, ...props.style }}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f2eeed',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: 150,
  },
  buttonText: {
    color: 'black',
    fontFamily: 'open-sans',
    fontSize: 13,
    textAlign: 'center',
  },
});

export default MainButton;
