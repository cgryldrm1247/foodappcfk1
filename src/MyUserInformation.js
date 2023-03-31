import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MyUserInformation = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleUpdatePress = () => {
    if (
      name === "" ||
      email === "" ||
      gender === "" ||
      height === "" ||
      weight === ""
    ) {
      setError("Lütfen tüm alanları doldurun.");
      setTimeout(() => {
        setError(null);
      }, 3000);
    } else {
      setSuccess("Bilgileriniz Başarıyla Güncellendi!");
      setTimeout(() => {
        setSuccess(null);
        navigation.navigate("ProfileScreen");
      }, 2000);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.viewContainer}>
        <Text style={styles.optionText}>Kullanıcı Bilgilerim</Text>
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
          placeholder="Ad Soyad"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Cinsiyet"
          keyboardType="default"
          value={gender}
          onChangeText={setGender}
        />

        <TextInput
          style={styles.input}
          placeholder="Boy (cm)"
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />

        <TextInput
          style={styles.input}
          placeholder="Kilo (kg)"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {success && <Text style={styles.successText}>{success}</Text>}
      <TouchableOpacity onPress={handleUpdatePress} style={styles.updateButton}>
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
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
  successText: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
});
