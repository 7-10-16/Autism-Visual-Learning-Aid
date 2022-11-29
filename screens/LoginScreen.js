import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  Alert
} from "react-native";
import { styles } from "../config/componentColourPalette.js";
import {TTSText, Say} from "../Components/TTS.js";

export default function LogIn({ navigation }) {
  const admin = {
    email: "abdallahm785@gmail.com",
    password: "abdallah123",
  };
  const emailRegExp = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  function validate(username, password) {
    {
      /* This function should validate email and password from database  */
    }
    if (admin.email == username && admin.password == password) {
      return 1;
    } else {
      return 0;
    }
  }

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  
  function validateEmail() {
    if (username == null) {
      Alert.alert("Alert", "Email can not be empty");
    } else {
      return emailRegExp.test(username);
    }
  }

  function validatePassword() {
    if (password == null) {
      Alert.alert("Alert", "Passowrd can not be empty");
    } else {
      if (password.length > 15 || password.length < 6) {
        return 0;
      } else {
        return 1;
      }
    }
  }

  function logInButtonCallBack() {
    let validFlag = 1;
    if (validate(username, password)) {
      navigation.navigate("Home");
    }
    if (!validateEmail()) {
        Alert.alert("Email", "Invalid Email Format");
        validFlag = 0;
      }
      if (!validatePassword()) {
        Alert.alert("Password", "Password should be between 6-15 characters");
        validFlag = 0;
      }
  }

  return (
    <View style={styles.container}>
      <Say phrase="Login page"/>
      <Image style={styles.Img} source={require("../assets/splash.png")} />
      <View style={{ width: "100%" }}>
        <TextInput
          onChangeText={(inputUsername) => setUserName(inputUsername)}
          style={styles.TextComponentStyle}
          placeholder={"Email"}
        ></TextInput>
        <TextInput
          onChangeText={(inputPassword) => setPassword(inputPassword)}
          placeholder={"Password"}
          style={styles.TextComponentStyle}
          secureTextEntry={true}
          textContentType="password"
        ></TextInput>

        <View Style={{ marginTop: "10%", width: "80%" }}>
          <TouchableOpacity>
            <Text
              style={{
                alignContent: "center",
                alignSelf: "center",
                textDecorationLine: "underline",
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => logInButtonCallBack()}
            style={styles.ButtonComponentStyle}
          >
            <Text style={{ color: "white" }}>Log In</Text>
          </TouchableOpacity>

          <Text style={{ alignSelf: "center", paddingTop: 10 }}>OR</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={styles.ButtonComponentStyle}
          >
            <Text style={{ color: "white" }}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
