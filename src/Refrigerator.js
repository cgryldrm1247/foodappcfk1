import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "../components/RestaurantCard";
import { db } from "../firebaseConfig";
import { ref, set } from "firebase/database";
import { SafeAreaView } from "react-native-safe-area-context";

const Refrigeretor = ({ id,  description }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dataAddOn = async () => {
    try {
      await set(ref(db, 'posts/' + new Date().getTime()), {
        title: title,
        body: body,
      });
      setTitle('');
      setBody('');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  

  return (
      <View>
        <View style={{justifyContent:'center',alignItems:'center'}} >
          <Text>AddData</Text>
          <TextInput
            style={{borderWidth:1, borderColor:'gray', width:200, height:40, borderRadius:10, marginTop:10, padding:10}}
            placeholder="title"
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
          <TextInput
            style={{borderWidth:1, borderColor:'gray', width:200, height:40, borderRadius:10, marginTop:10, padding:10}}
            placeholder="body"
            value={body}
            onChangeText={(text) => setBody(text)}
          />
          <Button title="Add" onPress={dataAddOn} />
        </View>
        <View
          style={{
            marginTop: 4,
            flexDirection: "Column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            paddingHorizontal: 5,
          }}
        >
          <Text style={{ marginLeft: 4, fontWeight: "bold", fontSize: 24 }}>
            {title}
          </Text>
          <ArrowRightIcon size={24} color="#00CCBB" />
        </View>
        <Text style={{ marginLeft: 10, color: "gray", fontSize: 12 }}>
          {description}{" "}
        </Text>
        <ScrollView
          column
          contentContainerStyle={{ paddingHorizontal: 15 }}
          showsHorizontalScrollIndicator={false}
          style={{ paddingTop: 4 }}
        >
          <View>
            <TouchableOpacity>
              <Text>ÜRÜNLER</Text>
            </TouchableOpacity>
          </View>

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
            title="Yemek"
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

export default Refrigeretor;

// // const styles = StyleSheet.create({});
// import { ArrowLeftIcon } from "react-native-heroicons/outline";
// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   SectionList,
//   StatusBar,
//   TouchableOpacity,
// } from "react-native";

// const DATA = [
//   {
//     title: "Temel Gıdalar",
//     data: ["Pizza", "Burger", "Risotto"],
//   },
//   {
//     title: "Et grubu",
//     data: ["French Fries", "Onion Rings", "Fried Shrimps"],
//   },
//   {
//     title: "Baharat",
//     data: ["Water", "Coke", "Beer"],
//   },
//   {
//     title: "Sebzeler",
//     data: ["Cheese Cake", "Ice Cream"],
//   },
// ];

// function Refrigeretor({ navigation }) {
//   return (
//     <SafeAreaView style={styles.container}>
//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <ArrowLeftIcon />
//       </TouchableOpacity>
//       <SectionList
//         sections={DATA}
//         keyExtractor={(item, index) => item + index}
//         renderItem={({ item }) => (
//           <View style={styles.item}>
//             <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
//               <Text style={styles.title}>{item}</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//         renderSectionHeader={({ section: { title } }) => (
//           <>
//             <Text style={styles.header}>{title}</Text>
//           </>
//         )}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: StatusBar.currentHeight,
//     marginHorizontal: 16,
//   },
//   item: {
//     backgroundColor: "green",
//     borderRadius: 10,
//     padding: 20,
//     marginVertical: 8,
//   },
//   header: {
//     fontSize: 32,
//     backgroundColor: "white",
//     borderRadius: 5,
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign: "center",
//   },
//   title: {
//     fontSize: 24,
//   },
// });

// export default Refrigeretor;
