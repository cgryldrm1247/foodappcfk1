import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Avatar, Divider, Icon } from "react-native-elements";
import MyAccountInformation from "../components/MyAccountInformation";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

export default function ProfilScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconContainer}
        >
        <ArrowLeftIcon onPress={() => navigation.goBack()} />
        </TouchableOpacity>
        <Avatar
          size={100}
          rounded
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          }}
          avatarStyle={styles.avatar}
          containerStyle={styles.avatarContainer}
        />
        <Text style={styles.name}>Furkan KAPLAN</Text>
        <View style={styles.detailsContainer}>
          <View style={styles.detail}>
            <Text style={styles.detailText}>fkaplanntr@gmail.com</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailText}>İstanbul</Text>
          </View>
        </View>
      </View>
      <Divider style={styles.divider} />
      <MyAccountInformation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 50,
  },
  avatarContainer: {
    backgroundColor: "#BDBDBD",
  },
  avatar: {
    borderColor: "white",
    borderRadius: 12,
  },
  name: {
    marginTop: 15,
    fontWeight: "bold",
  },
  detailsContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  detail: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  detailText: {
    fontWeight: "bold",
    marginLeft: 10,
  },
  divider: {
    width: "80%",
    alignSelf: "center",
    marginVertical: 30,
    borderWidth: 1,
    borderColor: "#2089dc",
  },
  iconContainer: {
    position: "absolute",
    left: 10,
    top: 10,
    zIndex: 1,
  },
  iconBack: {},
});
