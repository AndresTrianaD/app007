import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator}from '@react-navigation/stack'
import UsersList from './UsersList'
import UserDelailScreen from './UserDelailScreen'
import CreateUserScreen from './CreateUserScreen'

    const Stack = createStackNavigator()

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name= "createuser" component={CreateUserScreen}/>
            <Stack.Screen name= "userslist1" component={UsersList} />
            <Stack.Screen name= "userdelail" component={UserDelailScreen}/>
            
        </Stack.Navigator>
    )
}

export default function Layout() {
  return (
    <MyStack/>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent: 'center',
    }
})

//name= "userslist1"