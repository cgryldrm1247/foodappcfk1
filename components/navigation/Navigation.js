import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../../src/LoginScreen';
import RegisterScreen from '../../src/RegisterScreen';
import StartPage from '../../src/StartPage';
import LikeButton from '../LikeButton';
import HomeScreen from '../../src/HomeScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer
    
    >
      <Stack.Navigator  initialRouteName='StartPage' screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="StartPage" component={StartPage} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="LikeButton" component={LikeButton} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;