import 'react-native-reanimated';
import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import {Calculator} from './android/app/src/assets/Calculator'
import { Provider, useSelector  } from 'react-redux';
import store from './store/store';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer} from '@react-navigation/native'
import {Cart} from './src/assets/Cart'
import { Hexagon } from './src/assets/Hexagon';
import { Started } from './src/assets/Started';
import { Started1 } from './src/assets/Started1';
import { Started2 } from './src/assets/Started2';
import { Started3 } from './src/assets/Started3';
import { Drink } from './src/assets/Drink';
import { Burger } from './src/assets/Burger'
import { HotDog } from './src/assets/HotDog'
import { Donut } from './src/assets/Donut'
import { SignIn } from './src/assets/AuthNavigation/SignIn';
import { SignUp } from './src/assets/AuthNavigation/SignUp';
import { ForgotPassword } from './src/assets/ForgotPassword';
import auth from '@react-native-firebase/auth';


function App() {
  
    const [user, setUser] = useState();
  
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(userExcist => {
        if (userExcist) {
          setUser(userExcist)
        } else {
          setUser('')
        }
      });
      return subscriber; 
    }, []);
  
  const Stack = createStackNavigator();
  return (
     <Provider store={store}>
       <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      { user 
        ?
        <>
        <Stack.Screen name="Home" component={Hexagon}/>
        <Stack.Screen name="Started" component={Started}/>
        <Stack.Screen name="Started1" component={Started1}/>
        <Stack.Screen name="Started2" component={Started2}/>
        <Stack.Screen name="Started3" component={Started3}/>
        <Stack.Screen name="Drink" component={Drink}/>
        <Stack.Screen name="Donut" component={Donut}/>
        <Stack.Screen name="HotDog" component={HotDog}/>
        <Stack.Screen name="Burger" component={Burger}/>
        <Stack.Screen name="Cart" component={Cart}/>
        </>
        :
        <>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
        <Stack.Screen name="SignUp" component={SignUp}/> 
        </>
        }
       </Stack.Navigator>
    </NavigationContainer>
      </Provider>
  )
}

export default App
