import React,{useState} from 'react'
import { Text, StyleSheet, View, Dimensions,Pressable,Image, Alert } from 'react-native'
import { CustomTextInput } from './CustomTextInput'
import { CustomButtons } from './CustomButtons'
import { Auth } from './Firebase'
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

export const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email,setEmail] = useState();
  const {height,width} = Dimensions.get("window")

  return (
      <View style={{flex:1,backgroundColor:"#baa2e1",}}>
         <Image source={require("../../assets/bg1.gif")} style={{flex:1,width:"100%",height:"120%",position:"absolute",opacity:0.4}}/>
        <Pressable onPress={() => navigation.goBack()} style={{padding:25,}}>
      <MaterialCommunityIcons name='arrow-back-circle-outline' size={34} color="black"/>
      </Pressable>
      <View style={{justifyContent:"center",flex:1,position:"absolute",height:height,width:width}}>
        <Text style={{textAlign:"center",fontSize:25,color:"black",paddingVertical:15}}>Reset Your Password!</Text>
        <CustomTextInput placeholder='Email' value={email} setValue={(e) => setEmail(e)}/>
        <CustomButtons text='Submit' onPress={() => {Auth.forgetPassword(email),Alert.alert("Email:","Your Forgot Password Request Has Been Send SuccessFully Check Your Email Spam Folder..")}}/>
      </View>
      </View> 
    )
  }

const styles = StyleSheet.create({})