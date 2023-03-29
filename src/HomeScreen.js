import {
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import Category from "../components/Category";
import { useNavigation } from "@react-navigation/native";

import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  HomeIcon,
} from "react-native-heroicons/outline";
import { Icon } from "react-native-elements";
import FeaturedRow from "../components/FeaturedRow";
import Footer from "../components/Footer";


const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 35, backgroundColor: "white" }}>
      {/* Header */}

      <View style={{}}></View>

      {/* Search */}

      <View
        style={{
          alignItems: "center",

          paddingBottom: 2,
          marginHorizontal: 4,
          margin: 6,
          flexDirection: "row",
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
            placeholder="Kategori Ara"
            keyboardType="default"
            style={{ marginLeft: 10 }}
          />
        </View>

        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* body */}


      <ScrollView>
        <Text style={{ fontWeight: "bold", marginLeft: 15 }}>
          Yeni Lezzetleri Keşfet!
        </Text>
        {/*  Category */}
        <Category />

        {/* FeaturedRow */}
        <FeaturedRow id="123" title="Mutfaklar" description="Türk Mutfağı" />

        <FeaturedRow
          id="1234"
          title="Tarifler"
          description="Pratik Tarifler "
        />
        <FeaturedRow id="1234" title="Vegan " description="" />
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};
export default HomeScreen;
