import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  ArrowLeftIcon,
  HeartIcon,
  HomeIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <HomeIcon color="#00CCBB" />
        <Text>Anasayfa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <HeartIcon color="#00CCBB"/>
        <Text>Favorilerim</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <UserIcon color="#00CCBB" />
        <Text>Buz Dolabı</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <UserIcon color="#00CCBB" />
        <Text>Çarkıfelek</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <UserIcon color="#00CCBB" />
        <Text>Hesabım</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
  },
  iconContainer: {
    alignItems: "center",
  },
});

export default Footer;
