
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import { StyleSheet, Text, View } from 'react-native'

import CostosStack from './CostosStack'
import GazapoStack from './GazapoStack'
import LevanteStack from './LevanteStack'
import Conejo_al_canalStack from './Conejo_al_canalStack'
import Prueba from '../screens/Prueba'


const Tab = createBottomTabNavigator()

export default function Navigation() {

    return(
        <NavigationContainer>
            <Tab.Navigator>
           
                <Tab.Screen
                name="costos"
                component={CostosStack}
                options={{ title: "Costos"}}
                screenOptions ={{
                    headerShown: false,
                }}
                />
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
                name="Conejo-al-canal"
                component={Conejo_al_canalStack}
                options={{ title: "Comejo al canal"}}
                />
               

            </Tab.Navigator>
        </NavigationContainer>
    )
}

/*
<Tab.Screen
                name="prueba"
                component={Prueba}
                options={{ title: "Prueba"}}
                />
                
*/