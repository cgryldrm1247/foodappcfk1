import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    SafeAreaView,
  } from 'react-native';
  import React from 'react';
  import {useNavigation} from '@react-navigation/native';
  
  export default function LoginScreen() {
    const navigation = useNavigation();
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.TextInputContainer}>
          <TextInput style={styles.TextInput1} placeholder="Email" />
          <TextInput style={styles.TextInput1} placeholder="Password" />
        </View>
        <View style={styles.signContainer}>
          <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')} > 
            <Text style={styles.signText}> Sign </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    TextInputContainer: {
      marginTop: 20,
    },
    signContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      
    },
    signText: {
      color: 'orange',
      borderColor: 'black',
      borderRadius: 12,
      fontWeight: 'bold',
      fontSize: 16,
    },
  
    TextInput1: {
      borderWidth: 1,
      borderColor: '#86939e',
      marginHorizontal: 20,
      borderRadius: 12,
      marginBottom: 20,
      paddingLeft: 15,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
  