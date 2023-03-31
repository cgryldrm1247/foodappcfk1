import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const MyAccountInformation = () => {
  const navigation = useNavigation();
  const handleUserInformationPress = () => {
    // Handle user information press
    navigation.navigate("MyUserInformation");
    console.log("User information pressed");
  };

  const handleAddressInformationPress = () => {
    // Handle address information press
    navigation.navigate("MyAddressInformation");
    console.log("Address information pressed");
  };

  const handlePasswordChangePress = () => {
    // Handle password change press
    navigation.navigate("PasswordChange");

    console.log("Password change pressed");
  };

  const handleHelpPress = () => {
    // Handle help press
    console.log("Help pressed");
  };

  return (

    <View style={styles.container}>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={handleUserInformationPress}
      >
        <Icon name="person" color="#666" size={24} style={styles.icon} />
        <Text style={styles.optionText}>Kullanıcı Bilgilerim</Text>
        <View style={styles.rightIconContainer}>
          <Icon
            name="keyboard-arrow-right"
            type="material"
            size={24}
            style={styles.iconRight}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={handleAddressInformationPress}
      >
        <Icon name="location-on" color="#666" size={24} style={styles.icon} />
        <Text style={styles.optionText}>Adres Bilgilerim</Text>
        <View style={styles.rightIconContainer}>
          <Icon
            name="keyboard-arrow-right"
            type="material"
            size={24}
            style={styles.iconRight}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={handlePasswordChangePress}
      >
        <Icon name="lock" color="#666" size={24} style={styles.icon} />
        <Text style={styles.optionText}>Şifre Değişikliği</Text>
        <View style={styles.rightIconContainer}>
          <Icon
            name="keyboard-arrow-right"
            type="material"
            size={24}
            style={styles.iconRight}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={handleHelpPress}
      >
        <Icon name="help" color="#666" size={24} style={styles.icon} />
        <Text style={styles.optionText}>Yardım</Text>
        <View style={styles.rightIconContainer}>
          <Icon
            name="keyboard-arrow-right"
            type="material"
            size={24}
            style={styles.iconRight}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 40,
    marginTop: 20,
  },
  icon: {
    marginRight: 15,
  },
  iconRight: {
    marginRight: 10,
  },
  optionText: {
    fontSize: 18,
    flex: 1,
  },
  rightIconContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
});

export default MyAccountInformation;
