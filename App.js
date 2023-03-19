import React from 'react'
import DrawerNavigation from './navigations/DrawerNavigation'

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
     <DrawerNavigation/>
    </NavigationContainer>
  )
}


