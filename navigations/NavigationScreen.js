import * as React from 'react';
import { View, Text, StyleSheet, Header, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import MainScreen from '../screens/MainScreen';
import CameraScreen from '../screens/CameraScreen';
import ContactScreen from '../screens/ContactScreen';
import HistoryScreen from '../screens/HistoryScreen';
import InfoScreen from '../screens/InfoScreen';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='CameraScreen'
        component={CameraScreen}
        options={{
          title: 'Thông tin chi tiết',
          headerStyle: {
            backgroundColor: '#eb6134',
            height: 120,
          },
        }}
      />
      <Stack.Screen
        name='ContactInfo'
        component={ContactScreen}
        options={{
          title: 'Thông tin liên hệ',
          headerStyle: {
            backgroundColor: '#eb6134',
            height: 120,
          },
        }}
      />
      <Stack.Screen
        name='History'
        component={HistoryScreen}
        options={{
          title: 'Lịch sử',
          headerStyle: {
            backgroundColor: '#eb6134',
            height: 120,
          },
        }}
      />
      <Stack.Screen
        name='Info'
        component={InfoScreen}
        options={{
          title: 'Thông tin liên hệ',
          headerStyle: {
            backgroundColor: '#eb6134',
            height: 120,
          },
        }}
      />
    </Stack.Navigator>
  );
}

function NavigationScreen() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Màn hình chính' component={Home} />
        <Drawer.Screen name='Thông tin ứng dụng' component={Home} />
        <Drawer.Screen name='Ý kiến phản hồi' component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default NavigationScreen;
