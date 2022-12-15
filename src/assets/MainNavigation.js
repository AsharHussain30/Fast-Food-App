import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Started } from './Started'
import { Started1 } from './Started1'
import { Started2 } from './Started2'
import { Started3 } from './Started3'
import { Drink } from './Drink'
import { Hexagon } from './Hexagon'
import { Cart } from './Cart'

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Started" component={Started}/>
        <Stack.Screen name="Started1" component={Started1}/>
        <Stack.Screen name="Started2" component={Started2}/>
        <Stack.Screen name="Started3" component={Started3}/>
        <Stack.Screen name="Drink" component={Drink}/>
        <Stack.Screen name="Home" component={Hexagon}/>
        <Stack.Screen name="Cart" component={Cart}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
