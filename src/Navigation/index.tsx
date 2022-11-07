import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../Screens/LoginScreen';
import Chat from '../Screens/ChatScreen';
import HomeScreen from '../Screens/HomeScreen';
import SignUpScreen from '../Screens/SignUpScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Login'}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="SignUp"
          options={{
            transitionSpec: {
              open: {animation: 'timing', config: {duration: 500}},
              close: {animation: 'timing', config: {duration: 500}},
            },
            cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
          }}
          component={SignUpScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
