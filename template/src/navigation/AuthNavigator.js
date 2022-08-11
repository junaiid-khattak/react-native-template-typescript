import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  LoginScreen
} from '../screens';

const authStack = createNativeStackNavigator();
function AuthNavigator() {
  return (
    <authStack.Navigator initialRouteName="login" screenOptions={{ headerShown: true }}>
      <authStack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
    </authStack.Navigator>
  );
}

export default AuthNavigator;
