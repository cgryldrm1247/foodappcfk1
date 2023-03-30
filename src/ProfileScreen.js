import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { Avatar, Divider, Icon } from "react-native-elements";

export default function ProfilScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Avatar
          activeOpacity={0.5}
          avatarStyle={{ borderColor: "white", borderRadius: 12 }}
          containerStyle={{ backgroundColor: "#BDBDBD" }}
          icon={{ name: "user", type: "font-awesome" }}
          iconStyle={{ color: "white" }}
          imageProps={{ resizeMode: "cover" }}
          overlayContainerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          placeholderStyle={{ backgroundColor: "transparent" }}
          rounded
          size={100}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          }}
          title="P"
          titleStyle={{ color: "white" }}
        />

        <Text style={{ marginTop: 15 }}>Furkan KAPLAN</Text>
      </View>

      <View style={styles.icon}>
        <Text style={{ marginRight: "26.5%",}}>fkaplanntr@gmail.com</Text>
        <Icon color="black" name="mail" size={20} />
      </View>
      <Divider
        style={{ width: "80%", margin: 30 }}
        color="#2089dc"
        insetType="left"
        subHeaderStyle={{}}
        width={1}
        orientation="horizontal"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
  },
  icon: {
    marginTop: 2,
    flexDirection: "row-reverse",
  },
});
