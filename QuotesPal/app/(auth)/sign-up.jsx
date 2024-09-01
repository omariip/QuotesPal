import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { widthScale, heightScale, moderateScale } from "../../utils/scale";
import { useRouter } from "expo-router";
import CustomButton from "../../components/Button";
import React from "react";

const SignUp = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.quotesBackground}>
        <Image
          source={require("../../assets/images/quotesBackground.png")}
          style={styles.quotesBackgroundImage}
        />
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/logo/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.logoText}>QuotesPal</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="EMAIL"
            placeholderTextColor={"#667F8E"}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="NAME"
            placeholderTextColor={"#667F8E"}
          />
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="PASSWORD"
            placeholderTextColor={"#667F8E"}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="CONFIRM PASSWORD"
            placeholderTextColor={"#667F8E"}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.loginButtonContainer}>
          <CustomButton
            onPress={() => {}}
            title="Sign Up"
            customWidth={widthScale(278)}
            customHeight={heightScale(48)}
            fontSize={moderateScale(22)}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25485E",
    padding: 0,
    margin: 0,
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: widthScale(213),
    height: heightScale(226),
    marginBottom: heightScale(-50),
    marginTop: heightScale(30),
  },
  logoText: {
    fontFamily: "AnekDevanagari-Regular",
    fontSize: moderateScale(40),
    color: "#D9D9D9",
  },
  quotesBackground: {
    position: "absolute",
  },
  quotesBackgroundImage: {
    transform: [{ scale: 0.9 }],
    opacity: 0.6,
  },
  formContainer: {
    alignItems: "center",
    marginTop: heightScale(40),
  },
  inputText: {
    height: 40,
    borderBottomWidth: 1,
    width: widthScale(280),
    borderBottomColor: "white",
    fontFamily: "Homenaje-Regular",
    marginBottom: heightScale(40),
    fontSize: moderateScale(20),
    color: "white",
  },
  passwordInput: {
    height: 40,
    width: widthScale(280),
    borderBottomWidth: 1,
    borderBottomColor: "white",
    fontFamily: "Homenaje-Regular",
    fontSize: moderateScale(20),
    marginBottom: heightScale(40),
    color: "white",
  },
  loginButtonContainer: {
    marginTop: heightScale(20),
  },
});

export default SignUp;
