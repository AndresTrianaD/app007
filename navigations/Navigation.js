import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {Icon} from 'react-native-elements';


import GazapoStack from './GazapoStack'
import LevanteStack from './LevanteStack'
import Conejo_al_canalStack from './Conejo_al_canalStack'





const Tab = createBottomTabNavigator()


export default function Navigation() {
    const screenOptions = (route, color) => {
        let iconName
        switch (route.name) {
            case "gazapo":
                iconName = "compass-outline"
                break;
            case "levante":
                iconName = "heart-outline"
                break;
            case "Conejo-al-canal":
                iconName = "star-outline"
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
    return(
           
         <Tab.Navigator
         initialRouteName="gazapo"
         tabBarOption={{
             inactiveTintColor:"#063970",
             activeTintColor:"#eab676" 
         }}
         screenOptions={({ route })=>({
             tabBarIcon: ({ color }) => screenOptions(route, color)
         })}
         >
            <Tab.Screen
                name="gazapo"
                component={GazapoStack}
                options={{ title:"Gazapo"}}
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