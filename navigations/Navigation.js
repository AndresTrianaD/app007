import * as React from 'react';
//import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//import { NavigationContainer } from '@react-navigation/native'
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import { Text } from 'react-native';


import CostosStack from './CostosStack'
import GazapoStack from './GazapoStack'
import LevanteStack from './LevanteStack'
import Conejo_al_canalStack from './Conejo_al_canalStack'





const Tab = createBottomTabNavigator()


export default function Navigation() {

    return(
           
         <Tab.Navigator>
              
             
            <Tab.Screen
                name="gazapo"
                component={GazapoStack}
                options={{ 
                   tabBarIcon: ({ focused }) => (
                        <>
                            <Icon
                                name='home'
                                size={20}
                                color={focused ? '#0a9396' : '#d62828'}
                            />
                            <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#0a9396' : '#d62828',
                                    width: 50,
                                    fontSize: 15,
                                    textAlign: 'center'
                                }}>
                                { "Gazapo"/* Texto Aqui */}
                               
                            </Text>
                        </>
                    ),title:"ga"
                }}

                
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
    )
}

/* 
<Tab.Screen
                name="costos"
                component={CostosStack}
                options={{ title: "Costos"}}
                screenOptions ={{
                headerShown: false,
                 }}
                        />

**/