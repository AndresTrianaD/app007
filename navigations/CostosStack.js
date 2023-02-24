import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Costos from '../screens/Costos'
import Prueba from '../screens/Prueba'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createNativeStackNavigator()


export default function CostosStack() {
  return (
        <Stack.Navigator>
          
            <Stack.Screen
            name="costos"
            component={Costos}
            
            screenOptions ={{
              headerShown: false,
          }}
            />
            <Stack.Screen
            name="prueba"
            component={Prueba}
           
            />
            

        </Stack.Navigator>
    //<View>
      //<Text>CostosStack</Text>
    //</View>
  )
}

const styles = StyleSheet.create({})





/*import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Costos from '../screens/Costos'


const Stack = createStackNavigator()
 
export default function CostosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
         name="costos"
         componet={Costos}
         options={{ title: "Costos"}}
      />
    </Stack.Navigator>
  )
}

*/
