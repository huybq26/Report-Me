import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const InfoScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Mọi câu hỏi, thắc mắc xin được gửi về:</Text>
      <Text style={styles.text}>Email: sampleEmail@gmail.com</Text>
      <Text style={styles.text}>Hoặc gọi theo số: 0912345678</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    paddingTop: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontFamily: 'open-sans',
    marginBottom: 5,
    fontSize: 15,
  },
});

export default InfoScreen;
