import { StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

export const AuthSplash = () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
        navigation.replace("SignIn")
        },4000)
    } )
  const {height,width} = Dimensions.get("window");
    return (
    <View style={{flex:1,backgroundColor:"#baa2e1"}}>
      <LinearGradient colors={["purple","pink"]} style={{height:100,flex:1,elevation:25,}}>
      <Image source={require("../../../assets/themePics/logo1.png")} style={{resizeMode:"cover",width:160,alignSelf:"center",height:300,borderColor:"purple",shadowColor:"red",position:"absolute",borderRadius:100,top:50,}}/>
      </LinearGradient>
      <Image source={require("../../../assets/themePics/paupau.gif")} style={{resizeMode:"contain",width:width,height:"150%",position:"absolute",opacity:0.8}}/>
    </View>
  )
}

const styles = StyleSheet.create({})