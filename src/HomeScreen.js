import {
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import Category from "../components/Category";
import { useNavigation } from "@react-navigation/native";

import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import { Icon } from "react-native-elements";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={{ paddingTop: 35 }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          padding: 3,
          alignItems: "center",
          marginHorizontal: 4,
          justifyContent: "space-between",
        }}
      >
        <Image
          source={require("../assets/img/foto2.png")}
          style={{
            height: 50,
            width: 50,
            borderRadius: 24,
          }}
        />

        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontWeight: "bold",
              color: "#9CA3AF",
              fontSize: 12,
              marginLeft: 10,
            }}
          >
            Deliver Now!
          </Text>

          <Text style={{ fontWeight: "bold", fontSize: 24, marginLeft: 10, }}>
            Current Lotion
            <ChevronDownIcon size={15} color="#00CCBB"   />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: 2,
          marginHorizontal: 4,
          margin: 6,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            backgroundColor: "#E5E7EB",
            padding: 12,
            alignItems: "center",
          }}
        >
          <Icon name="search" color="gray" size={24} />
          <TextInput
            placeholder="What To Do"
            keyboardType="default"
            style={{ marginLeft: 10 }}
          />
        </View>

        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* body */}
      <ScrollView>
        {/*  Category */}
        <Category />
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
