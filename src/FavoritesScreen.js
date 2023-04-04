import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/outline'


export default function FavoritesScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
        
        <Text>En Sevdiklerim!</Text>

        <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowLeftIcon />
      </TouchableOpacity>

        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})