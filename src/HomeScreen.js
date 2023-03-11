import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Category from '../components/Category';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-elements';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <Text>
        {/* Header */}
        <View>
          <View >
            <Image
              source={require('../assets/img/foto2.png')}
              
            />
          </View>
          <View>
            <Text>
              data oluşunca profill resimi olacak !
              <Icon
                name="chevron-down"
                type="material-community"
                size={19}
                color="blue"
              />
            </Text>
          </View>
        </View>
      </Text>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
 
});
