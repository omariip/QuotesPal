import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen2 from "expo-splash-screen";
import { widthScale, heightScale, moderateScale } from "../utils/scale";
import { SafeAreaView } from 'react-native-safe-area-context';
import React from "react";

SplashScreen2.preventAutoHideAsync();

const SplashScreen = () => {
  const [loaded, error] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "AnekDevanagari-Regular": require("../assets/fonts/AnekDevanagari-Regular.ttf")
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
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.logoText}>QuotesPal</Text>
      </View>

      <View style={styles.rectangle} />

      <View style={styles.buttonContainer}>
      <TouchableOpacity >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25485E",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 0,
    margin: 0
  },
  buttonContainer: {
    backgroundColor: "#FFD700",
    width: widthScale(177),
    height: heightScale(48),
    borderRadius: moderateScale(25),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: heightScale(170)
    
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontSize: moderateScale(20),
    color: "#25485E"
  },
  rectangle: {
    width: widthScale(430),
    height: heightScale(812),
    backgroundColor: "#D9D9D9",
    borderRadius: moderateScale(600),
    position: "absolute",
    bottom: heightScale(381),
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 }, 
    shadowOpacity: 0.17, 
    shadowRadius: 15,
    // Android elevation
    elevation: 10
  },
  logoContainer: {
    alignItems: 'center',
    zIndex: 1,
    marginBottom: heightScale(250),
  },
  logo: {
    width: widthScale(274),
    height: heightScale(292),
    marginBottom: heightScale(-60)
  },
  logoText: {
    fontFamily: 'AnekDevanagari-Regular',
    fontSize: moderateScale(40),
    color: "#25485E"
  }
});

export default SplashScreen;
