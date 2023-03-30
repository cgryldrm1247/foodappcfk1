import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Animated,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const StartPage = () => {
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;
  const renderCard = ({ item, index }) => {
    const inputRange = [(index - 1) * 350, index * 350, (index + 1) * 350];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.5, 1, 0.5],
    });
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
    });
    const translateX = scrollX.interpolate({
      inputRange,
      outputRange: [-25, 0, 50],
    });
    return (
      <SafeAreaView style={styles.card}>
        <Animated.View
          style={[styles.cardImageWrapper, { opacity, transform: [{ scale }] }]}
        >
          <ImageBackground source={item.image} style={styles.cardImage}>
            <View style={styles.infoWrapper}>
              <Text style={styles.infoText}>{item.info}</Text>
            </View>
          </ImageBackground>
        </Animated.View>
        <Animated.View
          style={[styles.cardContent, { transform: [{ translateX }] }]}
        >
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </Animated.View>
      </SafeAreaView>
    );
  };
  const data = [
    {
      title: "Çark",
      description: "Çarkın Nasıl kullanılması anlatılacak",
      info: "ÖRNEK FOTOGRAFTIR; ÇARKIN FOTOSU GELECEK ",
      image: require("../assets/img/foto2.png"),
    },
    {
      title: "Yeni Lezzetleri Keşfet",
      description: "Yeni Lezzetler Kısmı anlatılacak (KISA)",
      info: "Info",
      image: require("../assets/img/foto1.png"),
    },
    {
      title: "Buz Dolabı",
      description: "Buz Dolabı Kısmı anlatılacak (KISA) ",
      info: "Info",
      image: require("../assets/img/foto1.png"),
    },
    {
      title: "Title 4",
      description: "Burayada Buluruz bişiler yada silerizssssssssss",
      info: "Info",
      image: require("../assets/img/foto1.png"),
    },
  ];
  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.title}
        renderItem={renderCard}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={350}
        snapToAlignment="center"
        decelerationRate={0.5}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={styles.buttonText}>Let's Start</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 300,
    height: 400,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    overflow: "hidden",
    position: "relative",
    top: "50%",
  },
  buttonContainer: {
    position: "absolute",
    bottom: '10%',
    width: "50%",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#7d3cff",
    alignItems: "center",
  },
  cardImageWrapper: {
    flex: 2,
  },
  cardImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  infoWrapper: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
  },
  infoText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  cardDescription: {
    fontSize: 16,
    textAlign: "center",
  },
  buttonText: {
    color: "#00CCBB",
    fontSize: 16,
  },
});
export default StartPage;
