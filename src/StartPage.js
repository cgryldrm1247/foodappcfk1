import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    Text,
  } from 'react-native';
  import React from 'react';
  import {useNavigation} from '@react-navigation/native';
  
  
  const {width, height} = Dimensions.get('window');
  
  const StartPage = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Image source={require('../assets/img/foto2.png')} style={styles.image} />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={styles.buttonText}>LOGİN SCREEN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  
  export default StartPage;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: width,
      height: height,
      resizeMode: 'cover',
      position: 'absolute',
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 0,
      alignItems: 'center',
      marginBottom: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: 'orange',
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 20,
      elevation: 3,
    },
    buttonStyle: {
      width: 200,
      height: 400,
      marginLeft: -55,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  