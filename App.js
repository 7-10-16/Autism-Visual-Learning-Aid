import React, { Component, useState } from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { TouchableOpacity as TouchableOpacityGesture } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Speech from 'expo-speech';

import { styles } from './config/componentColourPalette.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FruitScreen from './screens/FruitScreen';
import AnimalScreen from './screens/AnimalScreen';
import RandomScreen from './screens/RandomScreen';
import ProfileScreen from './screens/ProfileScreen';

//Starting screen of app FOR NOW
function HomeScreen({ navigation }) {

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
        <TouchableOpacity onPress={Speech.speak(this.props.phrase)}>
          <Text style={this.props.style} onPress={()=>Speech.speak(this.props.phrase) } >{this.props.text}</Text>
        </TouchableOpacity>
      )
    };
  }

  // Component to only use text to speech
  class Say extends Component {
    render() {
      return (
        <TouchableOpacity onPress={Speech.speak(this.props.text)}>
          <Text onPress={()=>Speech.speak(this.props.text) } />
        </TouchableOpacity>
      )
    };
  }



  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TTSText style={{ fontSize: 26, fontWeight: 'medium'}} text="Welcome Back" phrase="Welcome Back"/>
      <TTSText style={{ fontSize: 26, fontWeight: 'medium', color: '#00cc00'}} text="Nathan!" phrase="Nathan!"/>

      <Say text="What would you like to do?"/>
      
            <TouchableOpacity style ={styles.lightButton} onPress = {() => {navigation.navigate('Categories')}}>
            <TTSText style={{ fontSize: 26, fontWeight: 'medium', color: '#00cc00'}} text="Quiz" phrase="take a quiz?"/>
                <Ionicons name='library-outline' size={50} style = {styles.darkIcon}></Ionicons>
            </TouchableOpacity>

            <Say text="Or"/>
            
            <View style={{flexDirection: 'row', marginTop: '10%'}}>
                <TouchableOpacity style ={styles.darkButton} onPress = {() => {navigation.navigate('Profile')}}>
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

      <TouchableOpacity style ={styles.fruitButton} onPress = {() => {navigation.navigate('Fruit')}}>
                <Text style={styles.buttonText}>Fruit</Text>
                  <Ionicons name='nutrition' size={50} style = {styles.catIcon}></Ionicons>
      </TouchableOpacity>
      <TouchableOpacity style ={styles.animalButton} onPress = {() => {navigation.navigate('Animal')}}>
                <Text style={styles.buttonText}>Animal</Text>
                  <Ionicons name='paw' size={50} style = {styles.catIcon}></Ionicons>
      </TouchableOpacity>
      <TouchableOpacity style ={styles.randomButton} onPress = {() => {navigation.navigate('Random')}}>
                <Text style={styles.buttonText}>Random</Text>
                <Ionicons name='help' size={50} style = {styles.catIcon}></Ionicons>
      </TouchableOpacity>
      <TouchableOpacity style ={styles.cHomeButton} onPress = {() => {navigation.navigate('Home')}}>
                <Text style={styles.buttonText}>Home</Text>
                   <Ionicons name='home' size={50} style = {styles.catIcon}></Ionicons>
      </TouchableOpacity>
    </View>
  );
}


function HistoryScreen({ navigation }) {
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
