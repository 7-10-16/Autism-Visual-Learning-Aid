<<<<<<< HEAD
import React, { Component, useState } from 'react';
import { Button, View, Text, TouchableOpacity} from 'react-native';
import { TouchableOpacity as TouchableOpacityGesture } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Speech from 'expo-speech';
=======
import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { TouchableOpacity as TouchableOpacityGesture } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
>>>>>>> 8128a1dfedcaf199c00892eedfc417436067c657

<<<<<<< HEAD
import { styles } from "./config/componentColourPalette.js";
import Ionicons from "react-native-vector-icons/Ionicons";
import FruitScreen from "./screens/FruitScreen";
import AnimalScreen from "./screens/AnimalScreen";
import RandomScreen from "./screens/RandomScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ExampleScreen from "./screens/ExampleScreen";
import LogIn from "./screens/LoginScreen.js";
import Reg from "./screens/RegScreen.js";
=======
import { styles } from './config/componentColourPalette.js';
import {TTSText, Say} from "./Components/TTS.js";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FruitScreen from './screens/FruitScreen';
import AnimalScreen from './screens/AnimalScreen';
import RandomScreen from './screens/RandomScreen';
import ProfileScreen from './screens/ProfileScreen';
>>>>>>> 6c81d82ebd305abb8c0fa0146bc94079c00cafef

//Starting screen of app FOR NOW
function HomeScreen({ navigation }) {

  const [count, setCount] = useState(0);

  return (    
  <View style={styles.container}>
    <View style={styles.header}>
      <View>
        <Button
            onPress={Speech.stop()}
            title="Text to speech: Enabled"
          />
      </View>
      <View >
        <Text>
          <Button
            onPress={Speech.pause}
            title="||"
          />
          <Button
            onPress={Speech.resume}
            title="l>"
          />
        </Text>
      </View>
      </View>
      <View style={styles.body}>
        <TTSText style={{ fontSize: 26, fontWeight: 'medium'}} text="Welcome Back" phrase="Welcome Back"/>
        <TTSText style={{ fontSize: 26, fontWeight: 'medium', color: '#00cc00'}} text="Nathan!" phrase="Nathan!"/>

        <Say phrase="What would you like to do?"/>
              <TouchableOpacity style ={styles.lightButton} onPress = {() => {Speech.stop(); Speech.speak("Quiz"); navigation.navigate("Categories")}}>
              <TTSText style={{ fontSize: 26, fontWeight: 'medium', color: '#00cc00'}} text="Quiz" phrase="take a quiz?"/>
                  <Ionicons name='library-outline' size={50} style = {styles.darkIcon}></Ionicons>
              </TouchableOpacity>

<<<<<<< HEAD
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 26, fontWeight: "medium" }}>Welcome back</Text>
      <Text style={{ fontSize: 26, fontWeight: "medium", color: "#00cc00" }}>
        USERNAME!
      </Text>

      <TouchableOpacity
        style={styles.lightButton}
        onPress={() => {
          navigation.navigate("Categories");
        }}
      >
        <Text style={{ margin: 10, fontSize: 40 }}>Quiz</Text>
        <Ionicons
          name="library-outline"
          size={50}
          style={styles.darkIcon}
        ></Ionicons>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", marginTop: "10%" }}>
        <TouchableOpacity
          style={styles.darkButton}
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Text style={{ margin: 10, fontSize: 40 }}>Profile</Text>
          <Ionicons
            name="ios-person-circle-outline"
            size={50}
            style={styles.lightIcon}
          ></Ionicons>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.lightButton}
          onPress={() => {
            navigation.navigate("Example");
          }}
        >
          <Text style={{ margin: 10, fontSize: 40 }}>Example</Text>
          <Ionicons
            name="library-outline"
            size={50}
            style={styles.darkIcon}
          ></Ionicons>
        </TouchableOpacity>
      </View>
    </View>
=======
              <Say phrase="Or"/>
              
              <View style={{flexDirection: 'row', marginTop: '10%'}}>
                  <TouchableOpacity style ={styles.darkButton} onPress = {() => {Speech.stop(); Speech.speak("Profile"); navigation.navigate("Profile") }}>
                  <TTSText style={{ fontSize: 26, fontWeight: 'medium', color: 'white'}} text="Profile" phrase="View your profile"/>
                      <Ionicons name='ios-person-circle-outline' size={50} style = {styles.lightIcon}></Ionicons>
                  </TouchableOpacity>
              </View>
      </View>
  </View>
>>>>>>> 6c81d82ebd305abb8c0fa0146bc94079c00cafef
  );
}

function CategoriesScreen({ navigation }) {
  return (
<<<<<<< HEAD
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#003f5c",
      }}
    >
      <TouchableOpacity
        style={styles.fruitButton}
        onPress={() => {
          navigation.navigate("Fruit");
        }}
      >
        <Text style={styles.buttonText}>Fruit</Text>
        <Ionicons name="nutrition" size={50} style={styles.catIcon}></Ionicons>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.animalButton}
        onPress={() => {
          navigation.navigate("Animal");
        }}
      >
        <Text style={styles.buttonText}>Animal</Text>
        <Ionicons name="paw" size={50} style={styles.catIcon}></Ionicons>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.randomButton}
        onPress={() => {
          navigation.navigate("Random");
        }}
      >
        <Text style={styles.buttonText}>Random</Text>
        <Ionicons name="help" size={50} style={styles.catIcon}></Ionicons>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cHomeButton}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.buttonText}>Home</Text>
        <Ionicons name="home" size={50} style={styles.catIcon}></Ionicons>
=======
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor:'#003f5c'}}>

      <Say phrase="What category of quiz?"/>

      <TouchableOpacity style ={styles.fruitButton} onPress = {() => {Speech.stop(); Speech.speak("Fruit Quiz"); navigation.navigate("Fruit")}}>
                <TTSText style={styles.buttonText} text="Fruit" phrase="Fruit"/>
                <Ionicons name='nutrition' size={50} style = {styles.catIcon}></Ionicons>
      </TouchableOpacity>
      <TouchableOpacity style ={styles.animalButton} onPress = {() => {Speech.stop(); Speech.speak("Animal Quiz"); navigation.navigate("Animal")}}>
          <TTSText style={styles.buttonText} text="Animal" phrase="Animal"/>
                  <Ionicons name='paw' size={50} style = {styles.catIcon}></Ionicons>
      </TouchableOpacity>
      <TouchableOpacity style ={styles.randomButton} onPress = {() => {Speech.stop(); Speech.speak("Random Quiz"); navigation.navigate("Random")}}>
      <TTSText style={styles.buttonText} text="Random" phrase="Random"/>
                <Ionicons name='help' size={50} style = {styles.catIcon}></Ionicons>
      </TouchableOpacity>
      <Say phrase="Or..."></Say>
      <TouchableOpacity style ={styles.cHomeButton} onPress = {() => {Speech.stop(); Speech.speak("Home"); navigation.navigate('Home')}}>
                <TTSText style={styles.buttonText} text="Home" phrase="Home"/>
                   <Ionicons name='home' size={50} style = {styles.catIcon}></Ionicons>
>>>>>>> 6c81d82ebd305abb8c0fa0146bc94079c00cafef
      </TouchableOpacity>
    </View>
  );
}


<<<<<<< HEAD

function HistoryScreen({ navigation }) {
=======
function HistoryScreen({ navigation}) {
>>>>>>> 6c81d82ebd305abb8c0fa0146bc94079c00cafef
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>History Screen</Text>
      <Button
        title="Go to History... again"
        onPress={() => navigation.push("History")}
      />
      <Button title="Go Home" onPress={() => navigation.popToTop()} />
    </View>
  );
}



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Register" component={Reg} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Example" component={ExampleScreen} />
        <Stack.Group
          screenOptions={{ headerShown: false, gestureEnabled: false }}
        >
          <Stack.Screen name="Fruit" component={FruitScreen} />
          <Stack.Screen name="Animal" component={AnimalScreen} />
          <Stack.Screen name="Random" component={RandomScreen} />
        </Stack.Group>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
