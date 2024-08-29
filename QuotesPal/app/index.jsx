import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen2 from "expo-splash-screen";
import React from "react";

SplashScreen2.preventAutoHideAsync();

const SplashScreen = () => {
  const [loaded, error] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen2.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.rectangle}></View>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25485E",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 300,
  },
  buttonContainer: {
    backgroundColor: "#FFD700",
    width: 177,
    height: 48,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
  },
  rectangle: {
    width: 430,
    height: 812,
    backgroundColor: "#D9D9D9",
    borderRadius: 600,
    paddingBottom: 700,
    position: "absolute",
    bottom: 400,
  },
});

export default SplashScreen;
