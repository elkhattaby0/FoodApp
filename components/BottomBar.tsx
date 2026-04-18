import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export const BottomBar = () => {
  return (
    <View style={styles.container}>
      {/* Left Icons */}
      <TouchableOpacity>
        <Image source={require('../assets/images/home.png')} style={{ width: 24, height: 24 }} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require('../assets/images/user.png')} style={{ width: 24, height: 24 }} />
      </TouchableOpacity>

      {/* Space for center button */}
      <View style={{ width: 60 }} />

      {/* Right Icons */}
      <TouchableOpacity>
        <Image source={require('../assets/images/messenger.png')} style={{ width: 24, height: 24 }} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require('../assets/images/love.png')} style={{ width: 24, height: 24 }} />
      </TouchableOpacity>

      {/* Floating Button */}
      <TouchableOpacity style={styles.fab}>
        <Image source={require('../assets/images/plus.png')} 
          style={{ width: 24, height: 24 }} />
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center", 
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  },

  fab: {
    position: "absolute",
    top: -25,
    left: "50%",
    transform: [{ translateX: -30 }],
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
