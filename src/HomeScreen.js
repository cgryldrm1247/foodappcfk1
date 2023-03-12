import { Text, View, SafeAreaView, Image, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import Category from "../components/Category";
import { useNavigation } from "@react-navigation/native";

import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5 ">
      <Text className="text-red-500 ">
        {/* Header */}
        <View className="flex-row pd-3 items-center mx-4 space-x-2">
          <Image
            source={require("../assets/img/foto2.png")}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bod text-xl ">
              Current Lotion
              <ChevronDownIcon size={15} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={15} color="#00CCBB" />
        </View>

        {/* Search */}

        <View className="flex-row items-center space-x-2 pb-2 mx-4" >
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3" >
            <TextInput placeholder="What To Do" keyboardType="default" />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>
      </Text>
    </SafeAreaView>
  );
};
export default HomeScreen;
