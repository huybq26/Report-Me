import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  FlatList,
  Button,
  SafeAreaView,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import TitleText from '../components/TitleText';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['#3633ff', '#7875ff']}
        style={styles.background}
        start={[0, 1]}
        end={[1, 0]}
        locations={[0.1, 1]}
      >
        <Entypo
          style={styles.iconDrawer}
          name='menu'
          size={40}
          color='white'
          onPress={() => navigation.toggleDrawer()}
        />
        <TitleText style={styles.title}>Xin chào!</TitleText>

        <Text style={styles.caption}>Chúng tôi có thể giúp gì bạn?</Text>
      </LinearGradient>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
          <Image source={require('../assets/tool.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('History')}>
          <Image
            source={require('../assets/history.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Info')}>
          <Image
            source={require('../assets/contact.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.iconCaption}>
        <Text style={{ color: '#1eba71' }}>Sửa chữa</Text>
        <Text
          style={{ paddingRight: 15, color: '#1e7eba', textAlign: 'center' }}
        >
          Lịch sử
        </Text>
        <Text style={{ paddingRight: 10, color: 'green' }}>Liên hệ</Text>
      </View>
      <View style={styles.footer}>
        <Image
          source={require('../assets/fptIcon.png')}
          style={styles.longLogo}
        />
        <Text style={styles.textFooter}> 2021 FPT Smart Cloud</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  background: {
    width: '100%',
    height: Dimensions.get('window').height / 3,
  },
  iconDrawer: {
    marginTop: 40,
    marginLeft: 15,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 60,
    fontSize: 30,
    justifyContent: 'center',
  },
  caption: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 25,
    fontSize: 20,
    fontFamily: 'open-sans-bold',
  },
  iconContainer: {
    marginTop: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  image: {
    width: 88,
    height: 88,
  },
  iconCaption: {
    paddingHorizontal: 22,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footer: {
    height: (Dimensions.get('window').height * 6) / 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  longLogo: {
    width: 300,
    height: 50,
  },
  textFooter: {
    color: '#646d8f',
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default MainScreen;
