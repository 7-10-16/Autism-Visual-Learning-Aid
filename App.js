import React, { Component, useState } from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { TouchableOpacity as TouchableOpacityGesture } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Speech from 'expo-speech';

import { styles } from './config/componentColourPalette.js';
import {TTSText, Say} from "./Components/TTS.js";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FruitScreen from './screens/FruitScreen';
import AnimalScreen from './screens/AnimalScreen';
import RandomScreen from './screens/RandomScreen';
import ProfileScreen from './screens/ProfileScreen';

//Starting screen of app FOR NOW
function HomeScreen({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <TTSText style={{ fontSize: 26, fontWeight: 'medium'}} text="Welcome Back" phrase="Welcome Back"/>
      <TTSText style={{ fontSize: 26, fontWeight: 'medium', color: '#00cc00'}} text="Nathan!" phrase="Nathan!"/>

      <Say phrase="What would you like to do?"/>
            <TouchableOpacity style ={styles.lightButton} onPress = {() => {Speech.stop(); Speech.speak("Quiz"); navigation.navigate("Categories")}}>
            <TTSText style={{ fontSize: 26, fontWeight: 'medium', color: '#00cc00'}} text="Quiz" phrase="take a quiz?"/>
                <Ionicons name='library-outline' size={50} style = {styles.darkIcon}></Ionicons>
            </TouchableOpacity>

            <Say phrase="Or"/>
            
            <View style={{flexDirection: 'row', marginTop: '10%'}}>
                <TouchableOpacity style ={styles.darkButton} onPress = {() => {Speech.stop(); Speech.speak("Profile"); navigation.navigate("Profile") }}>
                <TTSText style={{ fontSize: 26, fontWeight: 'medium', color: 'white'}} text="Profile" phrase="View your profile"/>
                    <Ionicons name='ios-person-circle-outline' size={50} style = {styles.lightIcon}></Ionicons>
                </TouchableOpacity>
            </View>
    </View>
  );
}

function CategoriesScreen({ navigation }) {
  return (
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
      </TouchableOpacity>
    </View>
  );
}


function HistoryScreen({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>History Screen</Text>
      <Button title="Go to History... again"onPress={() => navigation.push('History')}/>
      <Button title="Go Home" onPress={() => navigation.popToTop()}/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Group screenOptions={{headerShown: false, gestureEnabled: false}}>
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
