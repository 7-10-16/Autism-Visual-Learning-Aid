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
import axios from 'axios';
import { styles } from "../config/componentColourPalette.js";

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

  const [user_email, setUserName] = useState("");
  const [user_password, setPassword] = useState("");
  
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

  const login = () => {
    axios.get(`https://node-server-udw2.onrender.com/login`, { // If testing locally should use your local ip address e.g. http://192.168.0.15:19007/routename
      params: { //Parameters which use the variables from the TextInputs
        user_email: {user_email}, // in {} the variable name has to match our database name as it used as a query e.g. user_email = 'Test@test.com'
        user_password: {user_password}
      }
    }).then((response) => {
      console.log(response.data); //Displays data from the array, if there isn't any. Can use a check if empty to notify user
      });
    };

  return (
    <View style={styles.container}>
      <Image style={styles.Img} source={require("../assets/splash.png")} />
      <View style={{ width: "100%" }}>
        <TextInput
          onChangeText={setUserName}
          style={styles.TextComponentStyle}
          placeholder={"Email"}
          value={user_email}
        ></TextInput>
        <TextInput
          onChangeText={setPassword}
          placeholder={"Password"}
          style={styles.TextComponentStyle}
          secureTextEntry={true}
          textContentType="password"
          value={user_password}
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
            onPress={login}
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
