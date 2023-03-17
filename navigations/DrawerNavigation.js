import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import Costos from '../screens/Costos';
import Navigation from './Navigation';
import Prueba from '../screens/Prueba';
import CostosStack from './CostosStack';



const Drawer = createDrawerNavigator()

export default function DrawerNavigation() {
  return (
   
    <Drawer.Navigator 
 
    
    >



        <Drawer.Screen 
        name = "Navegacion"
        component = { Navigation}
        options={{ title: "Activo Bioligico"}}
        />
        <Drawer.Screen 
        name = "Pr"
        component = { Costos}
        options={{ title: "Costos empresa"}}
        />
       
    </Drawer.Navigator>

    
  )
}

//screenOptions={{ headerShown: false}}