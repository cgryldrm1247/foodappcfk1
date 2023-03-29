import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const StartPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/img/Startpage.png")}
        style={styles.image}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.buttonText}>Uygulama Başlat</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default StartPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1E90FF",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  footer: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "gray",
    fontSize: 16,
  },
});
