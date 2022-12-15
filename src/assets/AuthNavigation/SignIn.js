import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground ,Dimensions} from 'react-native';
import { CustomTextInput } from '../CustomTextInput';
import { CustomButtons } from '../CustomButtons';
import { CustomPasswordInput } from '../CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import {Auth} from '../Firebase/'
import { MotiView } from 'moti';

export const SignIn = () => {
const naviagtion = useNavigation();


    const images = [
            "../../../assets/backgroundAnimation/bg.png",
            "../../../assets/backgroundAnimation/bg1.jpg",  
            "../../../assets/backgroundAnimation/bg2.jpeg"
] 

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [username,setUsername] = useState();

    return(
        <View style={styles.main}>
            <Image source={require("../../../assets/bg1.gif")} blurRadius={2} style={{flex:1,width:"100%",height:"120%",position:"absolute",opacity:0.4}}/>
            <View style={styles.auth}>
                <CustomTextInput placeholder='Username' value={email} setValue={e => setEmail(e)}/>
                <CustomPasswordInput placeholder="Password"  value={password} setValue={e => setPassword(e)}/>  
                <CustomButtons text='Sign In' onPress={() => Auth.signIn(email,password)}/>
                 <CustomButtons text='Forgot Password?' type='' onPress={() => naviagtion.navigate("ForgotPassword")} /> 
                 <CustomButtons text="Don't Have an Account? Create one" type='' onPress={() => naviagtion.navigate("SignUp")} /> 
            </View>
         </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        alignItems: "center",
        justifyContent: "center",
        height: 300,
        borderBottomLeftRadius: 30,
        borderBottomEndRadius: 30,
        borderBottomColor: "cyan",
        shadowColor:"black",
        shadowRadius:23,
        shadowOffset:{height:1,width:3}
    },
    Logo: {
        height: 100,
        width: 100,
        aspectRatio: 2,
        alignItems:"center",
        borderWidth:2,
        borderColor:"#411d8c",
        borderRadius:100,
        
    },
    main: {
        flex: 1,
        justifyContent:"center",
        backgroundColor:"#baa2e1",
        opacity:1
    },
    auth: {
        flex: 0,
        marginTop: 40,
        backgroundColor:"transparent",
        justifyContent: "center",
        paddingVertical:30,
        paddingTop:60,
        borderTopLeftRadius:35,
        borderTopRightRadius:35
    },
});
