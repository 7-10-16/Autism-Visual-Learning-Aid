<<<<<<< HEAD
import React, { Component, useState } from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
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

import { styles } from "./config/componentColourPalette.js";
import Ionicons from "react-native-vector-icons/Ionicons";
import FruitScreen from "./screens/FruitScreen";
import AnimalScreen from "./screens/AnimalScreen";
import RandomScreen from "./screens/RandomScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ExampleScreen from "./screens/ExampleScreen";
import LogIn from "./screens/LoginScreen.js";
import Reg from "./screens/RegScreen.js";

//Starting screen of app FOR NOW
function HomeScreen({ navigation }) {

  // available voices {
//   "identifier": "com.apple.ttsbundle.siri_Gordon_en-AU_compact",
//   "identifier": "com.apple.voice.compact.en-AU.Karen",
//   "identifier": "com.apple.ttsbundle.siri_Catherine_en-AU_compact",
//   "identifier": "com.apple.eloquence.en-GB.Rocko",
//   "identifier": "com.apple.eloquence.en-GB.Shelley",
//   "identifier": "com.apple.voice.compact.en-GB.Daniel",
//   "identifier": "com.apple.ttsbundle.siri_Martha_en-GB_compact",
//   "identifier": "com.apple.eloquence.en-GB.Grandma",
//   "identifier": "com.apple.eloquence.en-GB.Grandpa",
//   "identifier": "com.apple.eloquence.en-GB.Flo",
//   "identifier": "com.apple.eloquence.en-GB.Eddy",
//   "identifier": "com.apple.eloquence.en-GB.Reed",
//   "identifier": "com.apple.eloquence.en-GB.Sandy",
//   "identifier": "com.apple.ttsbundle.siri_Arthur_en-GB_compact",
//   "identifier": "com.apple.voice.compact.en-IE.Moira",
//   "identifier": "com.apple.voice.compact.en-IN.Rishi",
//   "identifier": "com.apple.eloquence.en-US.Flo",
//   "identifier": "com.apple.speech.synthesis.voice.Bahh",
//   "identifier": "com.apple.speech.synthesis.voice.Albert",
//   "identifier": "com.apple.speech.synthesis.voice.Fred",
//   "identifier": "com.apple.speech.synthesis.voice.Hysterical",
//   "identifier": "com.apple.speech.synthesis.voice.Organ",
//   "identifier": "com.apple.speech.synthesis.voice.Cellos",
//   "identifier": "com.apple.speech.synthesis.voice.Zarvox",
//   "identifier": "com.apple.eloquence.en-US.Rocko",
//   "identifier": "com.apple.eloquence.en-US.Shelley",
//   "identifier": "com.apple.speech.synthesis.voice.Princess",
//   "identifier": "com.apple.eloquence.en-US.Grandma",
//   "identifier": "com.apple.eloquence.en-US.Eddy",
//   "identifier": "com.apple.speech.synthesis.voice.Bells",
//   "language": "en-US",
//   "identifier": "com.apple.eloquence.en-US.Grandpa",
//   "identifier": "com.apple.speech.synthesis.voice.Trinoids",
//   "identifier": "com.apple.speech.synthesis.voice.Kathy",
//   "identifier": "com.apple.eloquence.en-US.Reed",
//   "identifier": "com.apple.speech.synthesis.voice.Boing",
//   "identifier": "com.apple.speech.synthesis.voice.Whisper",
//   "identifier": "com.apple.speech.synthesis.voice.Deranged",
//   "identifier": "com.apple.speech.synthesis.voice.GoodNews",
//   "identifier": "com.apple.ttsbundle.siri_Nicky_en-US_compact",
//   "identifier": "com.apple.speech.synthesis.voice.BadNews",
//   "identifier": "com.apple.ttsbundle.siri_Aaron_en-US_compact",
//   "identifier": "com.apple.speech.synthesis.voice.Bubbles",
//   "identifier": "com.apple.voice.compact.en-US.Samantha",
//   "identifier": "com.apple.eloquence.en-US.Sandy",
//   "identifier": "com.apple.speech.synthesis.voice.Junior",
//   "identifier": "com.apple.speech.synthesis.voice.Ralph",
//   "identifier": "com.apple.voice.compact.en-ZA.Tessa",
// }
  // Example of how to use the speak method from Speech
  // const speak = () => {
  //   const thingToSay = '1';
  //   Speech.speak(thingToSay);
  // };

  // Component to display a touchable text field with text to speech capability
  // params{ 
  // phrase (what to say with Speech)
  // text (what text is displayed) 
  // }
  class TTSText extends Component {
    render() {
      return (
        <TouchableOpacity onPress={Speech.speak(this.props.phrase, {voice: "com.apple.ttsbundle.siri_Catherine_en-AU_compact"})}>
          <Text style={this.props.style} onPress={()=>Speech.speak(this.props.phrase, {voice: "com.apple.ttsbundle.siri_Catherine_en-AU_compact"}) } >{this.props.text}</Text>
        </TouchableOpacity>
      )
    };
  }

  // Component to only use text to speech
  class Say extends Component {
    render() {
      return (
          <Text onPress={Speech.speak(this.props.phrase, {voice: "com.apple.ttsbundle.siri_Catherine_en-AU_compact"})} />
      )
    };
  }

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
  );
}

function CategoriesScreen({ navigation }) {
  return (
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
      </TouchableOpacity>
    </View>
  );
}



function HistoryScreen({ navigation }) {
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
