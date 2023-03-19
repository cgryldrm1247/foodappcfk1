// import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
// import React from "react";
// import { ArrowRightIcon } from "react-native-heroicons/outline";
// import RestaurantCard from "../components/RestaurantCard";

// const Refrigeretor = ({ id, title, description }) => {
//   return (
//       <View>
//       <View
//         style={{
//             marginTop: 4,
//             flexDirection: "Column",
//             alignItems: "center",
//             justifyContent: "center",
//             flex:1,
//             paddingHorizontal: 5,
//         }}
//         >
//         <Text style={{ marginLeft:4, fontWeight: "bold", fontSize: 24 }}>{title}</Text>
//         <ArrowRightIcon size={24} color="#00CCBB" />
//       </View>
//       <Text style={{ marginLeft:10, color: "gray", fontSize: 12 ,}}>{description} </Text>
//           <ScrollView

//         column
//         contentContainerStyle={{ paddingHorizontal: 15 }}
//         showsHorizontalScrollIndicator={false}
//         style={{ paddingTop: 4 ,}}
//       >
//         <View>
//           <TouchableOpacity>
//             <Text>ÜRÜNLER</Text>
//           </TouchableOpacity>
//         </View>

//         {/* RestaurantCard */}
//         <RestaurantCard
//           id={1234}
//           imgUrl="https://lezzetlikareler.com/images/gorseller/hamburger-fotograf-cekimi.jpg"
//           title="Burger"
//           rating={4.5}
//           genre="meat"
//           adress="3. Street"
//           short_description="This a Test Discription"
//           dishes={[]}
//           long={20}
//           lat={0}
//         />
//         <RestaurantCard
//           id={123}
//           imgUrl="https://lezzetlikareler.com/images/gorseller/hamburger-fotograf-cekimi.jpg"
//           title="Burger"
//           rating={4.5}
//           genre="meat"
//           adress="3. Street"
//           short_description="This a Test Discription"
//           dishes={[]}
//           long={20}
//           lat={0}
//         />
//         <RestaurantCard
//           id={123}
//           imgUrl="https://lezzetlikareler.com/images/gorseller/hamburger-fotograf-cekimi.jpg"
//           title="Burger"
//           rating={4.5}
//           genre="meat"
//           adress="3. Street"
//           short_description="This a Test Discription"
//           dishes={[]}
//           long={20}
//           lat={0}
//         />
//         <RestaurantCard
//           id={123}
//           imgUrl="https://lezzetlikareler.com/images/gorseller/hamburger-fotograf-cekimi.jpg"
//           title="Burger"
//           rating={4.5}
//           genre="meat"
//           adress="3. Street"
//           short_description="This a Test Discription"
//           dishes={[]}
//           long={20}
//           lat={0}
//         />
//         <RestaurantCard
//           id={123}
//           imgUrl="https://lezzetlikareler.com/images/gorseller/hamburger-fotograf-cekimi.jpg"
//           title="Yemek"
//           rating={4.5}
//           genre="meat"
//           adress="3. Street"
//           short_description="This a Test Discription"
//           dishes={[]}
//           long={20}
//           lat={0}
//         />
//         </ScrollView>
//         </View>
//   );
// };

// export default Refrigeretor;

// const styles = StyleSheet.create({});


import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const Refrigeretor = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default Refrigeretor;