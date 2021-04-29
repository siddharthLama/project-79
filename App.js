import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, Modal,ScrollView,KeyboardAvoidingView} from 'react-native';
import SignupLoginScreen from "./screens/SignupLoginScreen"
import HomeScreen from './screens/HomeScreen'
import Exchange from './screens/ExchangeScreen';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default function App() {
  return (
    
    <AppContainer/>
    
  );
}

const TabNavigator = createBottomTabNavigator({
  HomeScreen: {screen: HomeScreen},
  Exchange: {screen: Exchange},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName === "HomeScreen"){
        return(
          <Image
          source={require("./assets/home.png")}
          style={{width:20, height:20}}
        />
        )

      }
      else if(routeName === "ExchangeScreen"){
        return(
          <Image
          source={require("./assets/exchange.png")}
          style={{width:20, height:20,}}
        />)

      }
    }
  })
}
);

const switchNavigator = createSwitchNavigator({
SignupLoginScreen:{screen: SignupLoginScreen},
BottomTab:{screen: TabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
