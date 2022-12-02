import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    StatusBar,
    Alert,
    KeyboardAvoidingView,
  } from "react-native";
import { styles } from "../config/componentColourPalette.js";


export default function Reg({ navigation }) {
    const emailRegExp = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );
  
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [password1, setPassword1] = useState();
    const [age, setAge] = useState();
  
    function checkPasswords() {
      if (password == password1) {
        return 1;
      } else {
        return 0;
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
  
    function validateEmail() {
      if (username == null) {
        Alert.alert("Alert", "Email can not be empty");
      } else {
        return emailRegExp.test(username);
      }
    }
  
    function validateAge() {
      if (age == null) {
        Alert.alert("Alert", "Age can not be empty");
      } else {
        if (age <= 0 || age > 101) {
          return 0;
        } else {
          return 1;
        }
      }
    }
  
    function onSubmitCallBack() {
      let validFlag = 1;
      if (!validateEmail()) {
        Alert.alert("Email", "Invalid Email Format");
        validFlag = 0;
      }
      if (!validatePassword()) {
        Alert.alert("Password", "Password must be between 6 and 15 characters");
        validFlag = 0;
      }
      if (!validateAge()) {
        Alert.alert("Age", "Age should be more than 0");
        validFlag = 0;
      }
      if (!checkPasswords()) {
        Alert.alert("Passwords", "Passwords should be the same");
        validFlag = 0;
      }
      if (validFlag) {
        navigation.navigate("Home");
      }
    }
  
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View style={{ width: "100%" }}>
          <Image style={styles.Img} source={require("../assets/splash.png")} />
          <TextInput
            onChangeText={(inputUsername) => setUserName(inputUsername)}
            textContentType="Email"
            style={styles.TextComponentStyle}
            placeholder={"Email"}
          ></TextInput>
          <TextInput
            keyboardType="number-pad"
            onChangeText={(inputAge) => setAge(inputAge)}
            textContentType="none"
            style={styles.TextComponentStyle}
            placeholder={"Age"}
          ></TextInput>
          <TextInput
            onChangeText={(inputPassword) => setPassword(inputPassword)}
            placeholder={"Password"}
            style={styles.TextComponentStyle}
            secureTextEntry={true}
            textContentType="password"
          ></TextInput>
          <TextInput
            onChangeText={(inputPassword) => setPassword1(inputPassword)}
            placeholder={"Repeat Password"}
            style={styles.TextComponentStyle}
            secureTextEntry={true}
            textContentType="password"
          ></TextInput>
  
          <View Style={{ marginTop: "10%", width: "80%" }}>
            <TouchableOpacity
              onPress={() => onSubmitCallBack()}
              style={styles.ButtonComponentStyle}
            >
              <Text style={{ color: "white" }}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    );
  }