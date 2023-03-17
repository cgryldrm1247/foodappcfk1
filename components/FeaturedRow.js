import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
      <View>
      <View
        style={{
            marginTop: 4,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 5,
        }}
        >
        <Text style={{ marginLeft:4, fontWeight: "bold", fontSize: 24 }}>{title}</Text>
        <ArrowRightIcon size={24} color="#00CCBB" />
      </View>
      <Text style={{ marginLeft:10, color: "gray", fontSize: 12 ,}}>{description} </Text>
          <ScrollView

        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 4 ,}}
      >
        {/* RestaurantCard */}
        <RestaurantCard
          id={1234}
          imgUrl="https://lezzetlikareler.com/images/gorseller/hamburger-fotograf-cekimi.jpg"
          title="Burger"
          rating={4.5}
          genre="meat"
          adress="3. Street"
          short_description="This a Test Discription"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://lezzetlikareler.com/images/gorseller/hamburger-fotograf-cekimi.jpg"
          title="Burger"
          rating={4.5}
          genre="meat"
          adress="3. Street"
          short_description="This a Test Discription"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://lezzetlikareler.com/images/gorseller/hamburger-fotograf-cekimi.jpg"
          title="Burger"
          rating={4.5}
          genre="meat"
          adress="3. Street"
          short_description="This a Test Discription"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://lezzetlikareler.com/images/gorseller/hamburger-fotograf-cekimi.jpg"
          title="Burger"
          rating={4.5}
          genre="meat"
          adress="3. Street"
          short_description="This a Test Discription"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://lezzetlikareler.com/images/gorseller/hamburger-fotograf-cekimi.jpg"
          title="Burger"
          rating={4.5}
          genre="meat"
          adress="3. Street"
          short_description="This a Test Discription"
          dishes={[]}
          long={20}
          lat={0}
        />
        </ScrollView>
        </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({});
