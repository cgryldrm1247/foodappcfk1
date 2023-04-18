import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../../src/LoginScreen";
import RegisterScreen from "../../src/RegisterScreen";
import StartPage from "../../src/StartPage";
import LikeButton from "../LikeButton";
import HomeScreen from "../../src/HomeScreen";
import Refrigerator from "../../src/Refrigerator";
import ProfileScreen from "../../src/ProfileScreen";
import MyUserInformation from "../../src/MyUserInformation";
import MyAddressInformation from "../../src/MyAddressInformation";
import PasswordChange from "../../src/PasswordChange";
import FavoritesScreen from "../../src/FavoritesScreen";
import useAuth from "../../hooks/useAuth";

// import WheelScreen from '../../src/WheelScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const user = useAuth();

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="StartPage" component={StartPage} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="LikeButton" component={LikeButton} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Refrigerator" component={Refrigerator} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen
            name="MyUserInformation"
            component={MyUserInformation}
          />
          <Stack.Screen
            name="MyAddressInformation"
            component={MyAddressInformation}
          />
          <Stack.Screen name="PasswordChange" component={PasswordChange} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartPage"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="StartPage" component={StartPage} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="LikeButton" component={LikeButton} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Refrigerator" component={Refrigerator} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen
            name="MyUserInformation"
            component={MyUserInformation}
          />
          <Stack.Screen
            name="MyAddressInformation"
            component={MyAddressInformation}
          />
          <Stack.Screen name="PasswordChange" component={PasswordChange} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
          {/* <Stack.Screen name="WheelScreen" component={WheelScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default Navigation;
