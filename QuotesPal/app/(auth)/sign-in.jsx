import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";
import { widthScale, heightScale, moderateScale } from "../../utils/scale";
import React from "react";
import CustomButton from "../../components/Button";
import { useRouter } from "expo-router";

const SignIn = () => {
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
        <View style={styles.emailContainer}>
          <TextInput
            style={styles.emailInput}
            placeholder="EMAIL"
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

        <View style={styles.loginButtonContainer}>
          <CustomButton
            onPress={() => {}}
            title="Login"
            customWidth={widthScale(278)}
            customHeight={heightScale(48)}
            fontSize={moderateScale(22)}
          />
        </View>
      </View>

      <View style={styles.noAccountContainer}>
        <Text style={styles.noAccountText}>Don't have an account?</Text>
      </View>

      <View style={styles.signUpContainer}>
        <CustomButton
          onPress={() => {
            router.push("/sign-up");
          }}
          title="Sign Up"
          customWidth={widthScale(158)}
          customHeight={heightScale(42)}
          fontSize="19"
          customStylingText={{ fontFamily: "Raleway-Regular" }}
        />
      </View>

      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>forgot password?</Text>
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
    marginTop: heightScale(50),
  },
  emailInput: {
    height: 40,
    borderBottomWidth: 1,
    width: widthScale(280),
    borderBottomColor: "white",
    fontFamily: "Homenaje-Regular",
    marginBottom: heightScale(46),
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
    color: "white",
  },
  loginButtonContainer: {
    marginTop: heightScale(45),
  },
  noAccountContainer: {
    alignItems: "center",
  },
  noAccountText: {
    fontFamily: "Raleway-Regular",
    fontSize: moderateScale(17),
    color: "#FFFFFF",
    marginTop: heightScale(105),
  },
  signUpContainer: {
    alignItems: "center",
    marginTop: heightScale(23),
  },
  forgotPasswordContainer: {
    alignItems: "center",
  },
  forgotPasswordText: {
    color: "#667F8E",
    marginTop: heightScale(50),
  },
});

export default SignIn;
