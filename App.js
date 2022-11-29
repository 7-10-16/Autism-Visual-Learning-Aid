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

import { styles } from "./config/componentColourPalette.js";
import Ionicons from "react-native-vector-icons/Ionicons";
import FruitScreen from "./screens/FruitScreen";
import AnimalScreen from "./screens/AnimalScreen";
import RandomScreen from "./screens/RandomScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ExampleScreen from "./screens/ExampleScreen";
import LogIn from "./screens/LoginScreen.js";
import Reg from "./screens/RegScreen.js";
import Speech from "expo-speech";

//Starting screen of app FOR NOW
function HomeScreen({ navigation }) {
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
