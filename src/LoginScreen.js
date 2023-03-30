// import {
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     View,
//     TextInput,
//     SafeAreaView,
//   } from 'react-native';
//   import React from 'react';
//   import {useNavigation} from '@react-navigation/native';

//   export default function LoginScreen() {
//     const navigation = useNavigation();

//     return (
//       <SafeAreaView style={styles.container}>
//         <View style={styles.TextInputContainer}>
//           <TextInput style={styles.TextInput1} placeholder="Email" />
//           <TextInput style={styles.TextInput1} placeholder="Password" />
//         </View>
//         <View style={styles.signContainer}>
//           <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')} >
//             <Text style={styles.signText}> Sign </Text>
//           </TouchableOpacity>
//         </View>
//       </SafeAreaView>
//     );
//   }
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//     },
//     TextInputContainer: {
//       marginTop: 20,
//     },
//     signContainer: {
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginTop: 10,

//     },
//     signText: {
//       color: 'orange',
//       borderColor: 'black',
//       borderRadius: 12,
//       fontWeight: 'bold',
//       fontSize: 16,
//     },

//     TextInput1: {
//       borderWidth: 1,
//       borderColor: '#86939e',
//       marginHorizontal: 20,
//       borderRadius: 12,
//       marginBottom: 20,
//       paddingLeft: 15,
//     },
//     buttonText: {
//       color: 'white',
//       fontWeight: 'bold',
//     },
//   });

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform
// } from 'react-native';

// const LoginScreen = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Login logic here
//   }

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//     >
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Welcome back!</Text>
//       </View>
//       <View style={styles.body}>
//         <TextInput
//           style={styles.input}
//           placeholder="Username"
//           value={username}
//           onChangeText={setUsername}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />
//         <TouchableOpacity
//           style={styles.loginButton}
//           onPress={handleLogin}
//         >
//           <Text style={styles.loginButtonText}>Login</Text>
//         </TouchableOpacity>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     justifyContent: 'center',
//     paddingHorizontal: 20
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 30
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold'
//   },
//   body: {
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   input: {
//     backgroundColor: '#f2f2f2',
//     borderRadius: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     marginBottom: 15,
//     width: '100%'
//   },
//   loginButton: {
//     backgroundColor: '#7d3cff',
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     marginTop: 15,
//     width: '100%',
//     alignItems: 'center'
//   },
//   loginButtonText: {
//     color: '#00ccbb',
//     fontWeight: 'bold',
//     fontSize: 16
//   }
// });

// export default LoginScreen;

import React, { useState } from "react";
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

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <Image source={require("../assets/img/foto1.png")} 
      resizeMode="contain"
      style={styles.ImageLogo} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome!</Text>
      </View>
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookButton}>
          <Text style={styles.facebookButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleButtonText}>Continue with Google</Text>
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
  ImageLogo:{
  width: 150,
  height:150,
  borderRadius:100,
  marginLeft:100, 
  marginBottom:50
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
