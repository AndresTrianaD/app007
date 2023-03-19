import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import GazapoStack from '../navigations/GazapoStack'
import LevanteStack from '../navigations/LevanteStack'
import {Icon} from 'react-native-elements';
import Prueba from './Prueba'
import Layout from '../screensDos/Layout'

//import Icon from '@mdi/react';
//import { mdiRabbit } from '@mdi/js';

const Tab = createBottomTabNavigator() 

export default function Costos() {
  const screenOptions = (route, color) => {
    let iconName
    switch (route.name) {
        case "gazapo":
            iconName = "cast"
            break;
        case "levante":
            iconName = "heart-outline"
            break;
        case "prueba":
            iconName = "cart"
            break;
        case "layout":
            iconName = "home"
            break;
        
        
    }
    return(
        <Icon
            type="material-community"
            name={iconName}
            size={22}
            color={color}
        />
    )

}
  return (
    <Tab.Navigator
    
    initialRouteName="Gazapo"
    tabBarOption={{
        inactiveTintColor:"#ef0000",
        activeTintColor:"#280075" 
    }}
    screenOptions={({ route })=>({
        tabBarIcon: ({ color }) => screenOptions(route, color)
    })}
    
    
    >
      
        <Tab.Screen
                name="gazapo"
                component={GazapoStack}
                options={{ title: "Gazapo"}}
                />
        <Tab.Screen
                name="levante"
                component={LevanteStack}
                options={{ title: "Levante"}}
                />
        <Tab.Screen
                name="prueba"
                component={Prueba}
                options={{ title: "Prueba"}}
                />
        <Tab.Screen
                name="layout"
                component={Layout}
                options={{ title: "Layout"}}
                />
        
    </Tab.Navigator>
  )
}

//const styles = StyleSheet.create({})
//onPress= {()=>{navigarion.navigate('Prueba',{})}}