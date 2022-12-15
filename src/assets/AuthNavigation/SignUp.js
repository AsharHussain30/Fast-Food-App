import React,{useState} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import  {CustomTextInput}  from '../CustomTextInput';
import  {CustomButtons} from '../CustomButtons';
import { CustomPasswordInput } from '../CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import {Auth} from "../Firebase"

export const SignUp = () => {
    const navigation = useNavigation();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [username,setUsername] = useState();

    return (
        <View style={styles.main}>
            <Image source={require("../../../assets/bg1.gif")} blurRadius={20} style={{flex:1,width:"100%",height:"120%",position:"absolute",opacity:0.4}}/>
            <View style={styles.auth}>
                <CustomTextInput placeholder='Email' value={email} setValue={e => setEmail(e)}/>
                <CustomTextInput placeholder='Username'  value={username} setValue={e => setUsername(e)}/>
                <CustomPasswordInput placeholder='Password'  value={password} setValue={e => setPassword(e)}/> 
                <CustomButtons text='Sign UP' onPress={() => Auth.signUp(username,email,password)}/>
                <CustomButtons text='Forgot Password?' type='' onPress={() => navigation.navigate("ForgotPassword")}/>
                <CustomButtons text="Already Have an Account?" type='' onPress={() => navigation.navigate("SignIn")}/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'cyan',
        alignItems: "center",
        justifyContent: "center",
        height: 300,
        borderBottomLeftRadius: 30,
        borderBottomEndRadius: 30,
        borderBottomColor: "cyan",
        elevation:15
    },
    main: {
        flex: 1,
        backgroundColor: "#baa2e1",
    },
    auth: {
        flex: 1,
        justifyContent: "center",
    },
});
