import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import MainButton from '../components/MainButton';
import TitleText from '../components/TitleText';
import Card from '../components/Card';
import { NavigationContainer } from '@react-navigation/native';
import NavigationButton from '../components/NavigationButton';

const CameraScreen = (props) => {
  const [pickedImage, setPickedImage] = useState();
  const [pickedImageSecond, setPickedImageSecond] = useState();
  const [pickedImageThird, setPickedImageThird] = useState();
  const [titleValue, setTitleValue] = useState('');
  const [isFocus, handleFocus] = useState(false);

  const handleImageSubmit = (newImage) => {
    setPickedImage(newImage);
  };

  const titleChangeHandler = (text) => {
    setTitleValue(text);
  };

  const verifyPermissionImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Không truy cập được vào máy ảnh',
        'Bạn cần cho phép ứng dụng truy cập để sử dụng tính năng này.',
        [{ text: 'Đồng ý' }]
      );
      return false;
    }
    return true;
  };

  const verifyPermissionLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Không truy cập được vào thư viện ảnh',
        'Bạn cần cho phép ứng dụng truy cập để sử dụng tính năng này.',
        [{ text: 'Đồng ý' }]
      );
      return false;
    }
    return true;
  };
  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissionImage();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!pickedImage) {
      setPickedImage(image.uri);
    } else if (pickedImage && !pickedImageSecond) {
      setPickedImageSecond(image.uri);
    } else if (pickedImage && pickedImageSecond && !pickedImageThird) {
      setPickedImageThird(image.uri);
    }
  };

  const chooseImageHandler = async () => {
    const hasPermission = await verifyPermissionLibrary();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!pickedImage) {
      setPickedImage(image.uri);
    } else if (pickedImage && !pickedImageSecond) {
      setPickedImageSecond(image.uri);
    } else if (pickedImage && pickedImageSecond && !pickedImageThird) {
      setPickedImageThird(image.uri);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps='handled'
    >
      <View style={styles.screen}>
        {!pickedImage ? (
          <View style={styles.imagePreview}>
            <Text>Chưa có ảnh được chọn</Text>
          </View>
        ) : (
          // <View styles={styles.imageList}>
          <View style={styles.imagePreview}>
            <Image style={styles.image} source={{ uri: pickedImage }} />
            <Image style={styles.image} source={{ uri: pickedImageSecond }} />
            <Image style={styles.image} source={{ uri: pickedImageThird }} />
          </View>
        )}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='Chụp ảnh'
              onPress={takeImageHandler}
              color='#003bd1'
            />
          </View>
          <View style={styles.button}>
            <Button
              title='Thêm ảnh...'
              onPress={chooseImageHandler}
              color='#003bd1'
            />
          </View>
        </View>

        <TitleText style={styles.title}>
          Chúng tôi có thể giúp gì bạn?
        </TitleText>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
          placeholder={'Mô tả lỗi xe bạn gặp phải ở đây...'}
        />
        <Card style={styles.suggestion}>
          <MainButton
            onPress={() => {
              setTitleValue('Xước sơn');
            }}
            style={{ width: 130 }}
          >
            Xước sơn
          </MainButton>
          <Text> </Text>
          <MainButton
            onPress={() => {
              setTitleValue('Nổ lốp');
            }}
            style={{ width: 120 }}
          >
            Nổ lốp
          </MainButton>
        </Card>
        <Card style={styles.suggestion}>
          <MainButton
            onPress={() => {
              setTitleValue('Móp thân xe');
            }}
            style={{ width: 170 }}
          >
            Móp thân xe
          </MainButton>
        </Card>
        <Card style={styles.suggestion}>
          <MainButton
            onPress={() => {
              setTitleValue('Vỡ kính xe');
            }}
            style={{ width: Dimensions.get('window').width / 2 }}
          >
            Vỡ kính xe
          </MainButton>
        </Card>
        <Card style={styles.navigationButton}>
          <NavigationButton
            style={{ width: Dimensions.get('window').width * 0.75 }}
            onPress={() => {
              props.navigation.navigate('ContactInfo');
            }}
          >
            Tiếp tục
          </NavigationButton>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  imagePreview: {
    width: '100%',
    height: Dimensions.get('window').height / 6,
    marginBottom: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderColor: '#ccc',

    flexDirection: 'row',
    backgroundColor: '#f2eeed',
    marginTop: 2,
  },
  image: {
    width: '25%',
    height: '100%',
  },
  textInput: {
    backgroundColor: '#f2eeed',
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
    marginHorizontal: 15,
    height: Dimensions.get('window').height / 12,
    borderRadius: 10,
    paddingLeft: 12,
  },
  suggestion: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: Dimensions.get('window').width / 3,
    backgroundColor: '#ccc',
  },
  title: {
    marginTop: 15,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10,
  },
  navigationButton: {
    marginTop: 30,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default CameraScreen;
