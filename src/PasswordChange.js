import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const PasswordChange = () => {
  const navigation = useNavigation();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");
  const [updateError, setUpdateError] = useState("");

  const handleUpdatePassword = () => {
    if (currentPassword.trim() === "") {
      setError("Lütfen mevcut şifrenizi girin");
    } else if (newPassword.trim() === "" || confirmNewPassword.trim() === "") {
      setUpdateError("Lütfen yeni şifrenizi girin");
    } else if (currentPassword === newPassword) {
      setUpdateError("Mevcut şifre ile yeni şifre aynı olamaz");
    } else if (newPassword !== confirmNewPassword) {
      setUpdateError("Yeni şifreniz doğrulama şifresiyle uyuşmuyor");
    } else {
      // Kod şifrenin güncellenmesi için
      setUpdateError("Şifreniz başarıyla güncellendi");

      setTimeout(() => {
        navigation.navigate("ProfileScreen");
        setUpdateError("");
      }, 2000);
      
    }
  };
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.viewContainer}>
        <Text style={styles.optionText}>Şifre Değiştir</Text>
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
          placeholder="Mevcut Şifre"
          value={currentPassword}
          onChangeText={setCurrentPassword}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Yeni Şifre"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Yeni Şifre (Tekrar)"
          value={confirmNewPassword}
          onChangeText={setConfirmNewPassword}
          secureTextEntry={true}
        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {updateError ? <Text style={styles.success}>{updateError}</Text> : null}
      <TouchableOpacity
        style={styles.updateButton}
        onPress={handleUpdatePassword}
      >
        <Text style={styles.updateButtonText}>Güncelle</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PasswordChange;

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
    marginBottom: 10,
    textAlign: "center",
  },
  success: {
    color: "green",
    marginBottom: 10,
    textAlign: "center",
  },
});
