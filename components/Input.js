import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Input = (props) => {
  return (
    <TextInput
      {...props}
      style={{ ...styles.input, ...props.style }}
    ></TextInput>
  );
  // { ...props} means forwarding your props to the using component. Use this in order to use other in-line props in the main app.
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
