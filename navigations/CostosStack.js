import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CostosStack() {
  return (
    <View>
      <Text>CostosStack</Text>
    </View>
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
