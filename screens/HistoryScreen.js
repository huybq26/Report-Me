import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HistoryScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>
        Hệ thống của chúng tôi không tìm thấy dữ liệu của bạn. Để sử dụng dịch
        vụ, hãy nhấn icon "Sửa chữa" tại màn hình chính.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    paddingTop: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontFamily: 'open-sans',
    marginBottom: 10,
    fontSize: 17,
  },
});

export default HistoryScreen;
