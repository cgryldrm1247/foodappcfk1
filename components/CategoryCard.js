import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    
    <TouchableOpacity style={{ padding: 2 }}>
      <Image
        source={{
          uri: imgUrl,
        }}
        style={{ height: 105, width:105, borderRadius: 12 }}
      />
      <View>
        <Text
          style={{
            position: "absolute",
            bottom: 1,
            left:5,
            color: "white",
            fontWeight: "bold",
            fontSize:10,
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({});
