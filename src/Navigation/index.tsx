import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../Screens/LoginScreen';
import Chat from '../Screens/ChatScreen';


const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='chat' component={Chat} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})