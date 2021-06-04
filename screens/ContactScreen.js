import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import NavigationButton from '../components/NavigationButton';
import Card from '../components/Card';

const ContactScreen = (props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const nameChangeHandler = (text) => {
    setName(text);
  };
  const phoneChangeHandler = (text) => {
    setPhone(text);
  };
  const locationChangeHandler = (text) => {
    setLocation(text);
  };
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps='handled'
    >
      <View style={styles.screen}>
        <Text style={styles.text}>
          Hãy cung cấp một số thông tin cá nhân để chúng tôi có thể giúp đỡ bạn
          tốt hơn!
        </Text>
        <TextInput
          style={styles.input}
          placeholder='Họ và tên'
          onChangeText={nameChangeHandler}
        />
        <TextInput
          style={styles.input}
          placeholder='Số điện thoại'
          onChangeText={phoneChangeHandler}
        />
        <TextInput
          style={styles.input}
          placeholder='Địa chỉ nơi xe hỏng'
          onChangeText={locationChangeHandler}
        />
        <Card style={styles.navigationButton}>
          <NavigationButton
            style={{ width: Dimensions.get('window').width * 0.5 }}
            onPress={() => {
              props.navigation.navigate('Home');
              Alert.alert(
                'Case của bạn đã được gửi đi thành công!',
                'Nhân viên của chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể. Nếu bạn có thắc mắc, xin vui lòng gọi theo số: 0912345678',
                [{ text: 'Đồng ý' }]
              );
            }}
          >
            Gửi
          </NavigationButton>
        </Card>
      </View>
    </ScrollView>
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
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#f2eeed',
    // borderBottomColor: '#ccc',
    // borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
    marginHorizontal: 15,
    height: Dimensions.get('window').height / 12,
    borderRadius: 10,
    paddingLeft: 12,
  },
  navigationButton: {
    marginTop: 30,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default ContactScreen;
