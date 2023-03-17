import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StarIcon ,MapPinIcon} from "react-native-heroicons/outline";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  adress,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity style={{backgroundColor:'white', marginRight:5,  elevation:15,}}>

      <Image
        source={{
            uri: imgUrl,
        }}
        style={{ height: 100, width: 128, borderRadius: 6 }}
        />
      <View style={{ padding:1, paddingBottom:4 }}>
        <Text style={{ fontWeight: "bold", fontSize: 15,}}>{title}</Text>
        <View style={{flexDirection: "row",alignItems: "center",marginHorizontal: 4,}}>
          <StarIcon fill={"green"} color="green" opacity={0.5} size={20} />
          <Text style={{fontSize:12,color:"gray"}} >
            <Text style={{color:"gray"}}>{rating}</Text> · {genre}
          </Text>
         </View>
            <View style={{flexDirection:'row', alignItems:'center',marginHorizontal:4}}>
            <MapPinIcon color="gray" opacity={0.4} size={20}/>
            <Text style={{fontSize:12, color:"gray"}}> Nearby · {adress}</Text>

            </View>


      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({});
