import {
  ScrollView,
  StyleSheet,
  
} from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 5,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgUrl="https://lezzetlikareler.com/images/gorseller/hamburger-fotograf-cekimi.jpg"
        title="test1"
      />

      <CategoryCard
        imgUrl="https://lezzetlikareler.com/images/gorseller/hamburger-fotograf-cekimi.jpg"
        title="test2"
      />
      <CategoryCard
        imgUrl="https://lezzetlikareler.com/images/gorseller/hamburger-fotograf-cekimi.jpg"
        title="test3"
      />
      <CategoryCard
        imgUrl="https://lezzetlikareler.com/images/gorseller/hamburger-fotograf-cekimi.jpg"
        title="Domates Soslu Spagetti"
      />
      <CategoryCard
        imgUrl="https://lezzetlikareler.com/images/gorseller/hamburger-fotograf-cekimi.jpg"
        title="Kazan Dibi"
      />
      <CategoryCard
        imgUrl="https://lezzetlikareler.com/images/gorseller/hamburger-fotograf-cekimi.jpg"
        title="Elmalı Turta"
      />
    </ScrollView>
  );
};

export default Category;

const styles = StyleSheet.create({});
