import { SafeAreaView, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MyUserInformation = () => {
  const navigation = useNavigation();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.viewContainer}>
        <Text style={styles.optionText}>Adres Bilgilerim</Text>
        <View style={styles.leftIconContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-back"
              type="material"
              size={24}
              style={styles.iconBack}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ülke"
          value={address}
          onChangeText={setAddress}
        />

        <TextInput
          style={styles.input}
          placeholder="Şehir"
          keyboardType="default"
          value={city}
          onChangeText={setCity}
        />

        <TextInput
          style={styles.input}
          placeholder="Sempt"
          keyboardType="default"
          value={state}
          onChangeText={setState}
        />

        <TextInput
          style={styles.input}
          placeholder="Posta Codu"
          keyboardType="numeric"
          value={zipCode}
          onChangeText={setZipCode}
        />
      </View>

      <TouchableOpacity onPress={()=>navigation.navigate("ProfileScreen")} style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Güncelle</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MyUserInformation;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#e5e5ea",
  },
  viewContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: "10%",
    height: "7%",
  },
  optionText: {
    fontSize: 18,
    flex: 1,
    textAlign: "center",
  },
  leftIconContainer: {
    marginStart: 10,
  },
  inputContainer: {
    marginTop: "30%",
    justifyContent: "center",
    width: "100%",
  },
  input: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  updateButton: {
    backgroundColor: "#7d3cff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 15,
    width: "100%",
    alignItems: "center",
  },
  updateButtonText: {
    color: "#00ccbb",
    fontWeight: "bold",
    fontSize: 16,
  },
});
