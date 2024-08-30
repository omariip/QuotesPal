import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import * as SplashScreen2 from "expo-splash-screen";
import React from "react";
import { widthScale, heightScale, moderateScale } from "../utils/scale";
import CustomButton from "../components/Button";

SplashScreen2.preventAutoHideAsync();

const SplashScreen = () => {
  const router = useRouter();

  const [loaded, error] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "AnekDevanagari-Regular": require("../assets/fonts/AnekDevanagari-Regular.ttf"),
    "Crushed-Regular": require("../assets/fonts/Crushed-Regular.ttf"),
    "Homenaje-Regular": require("../assets/fonts/Homenaje-Regular.ttf"),
    "Raleway-Bold": require("../assets/fonts/Raleway-Bold.ttf"),
    "Raleway-Regular": require("../assets/fonts/Raleway-Regular.ttf"),
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
        <CustomButton
          onPress={() => router.push("/sign-in")}
          title="Continue"
          customWidth={widthScale(177)}
          customHeight={heightScale(48)}
          fontSize={moderateScale(20)}
        />
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
    margin: 0,
  },
  buttonContainer: {
    marginBottom: heightScale(170),
  },
  rectangle: {
    width: widthScale(430),
    height: heightScale(812),
    backgroundColor: "#D9D9D9",
    borderRadius: moderateScale(600),
    position: "absolute",
    bottom: heightScale(381),
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.17,
    shadowRadius: 15,
    // Android elevation
    elevation: 10,
  },
  logoContainer: {
    alignItems: "center",
    zIndex: 1,
    marginBottom: heightScale(250),
  },
  logo: {
    width: widthScale(274),
    height: heightScale(292),
    marginBottom: heightScale(-60),
  },
  logoText: {
    fontFamily: "AnekDevanagari-Regular",
    fontSize: moderateScale(40),
    color: "#25485E",
  },
});

export default SplashScreen;
