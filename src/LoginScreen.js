
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  SafeAreaView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as webBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

webBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User account created & signed in!");
        navigation.navigate("HomeScreen");
      } catch (error) {
        console.error("Error signing up: ", error);
      }
    }
  };




  const handleLogin = () => {
    // Check if email is valid
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Login logic here
  };

  const isValidEmail = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  return (
    <SafeAreaView
      style={styles.container}
      behavior={Platform.OS === "android" + "ios" ? "padding" : "height"}
    >
      <Image
        source={require("../assets/img/foto1.png")}
        resizeMode="contain"
        style={styles.ImageLogo}
      />


      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome!</Text>
      </View>
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={value=>setEmail(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={value=>setPassword(value)}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleSubmit}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookButton}>
          <Text style={styles.facebookButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('RegisterScreen')} style={styles.facebookButton}>
          <Text style={styles.facebookButtonText}>Üye ol</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  ImageLogo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginLeft: 100,
    marginBottom: 50,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  body: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    width: "100%",
  },
  loginButton: {
    backgroundColor: "#7d3cff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 15,
    width: "100%",
    alignItems: "center",
  },
  loginButtonText: {
    color: "#00ccbb",
    fontWeight: "bold",
    fontSize: 16,
  },
  facebookButton: {
    backgroundColor: "#3b5998",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 15,
    width: "100%",
    alignItems: "center",
  },
  facebookButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  googleButton: {
    backgroundColor: "#db4a39",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 15,
    width: "100%",
    alignItems: "center",
  },
  googleButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default LoginScreen;
