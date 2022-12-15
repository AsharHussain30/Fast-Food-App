import React,{useState} from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const CustomPasswordInput = ({ value, setValue, placeholder }) => {
  const [hide,setHide] = useState(true)
  const [visible,setVisible] = useState(true)  
  return (
    <View style={Passwordstyles.pssection}>
      <TextInput placeholder={placeholder} secureTextEntry={visible}  placeholderTextColor="gray" value={value} onChangeText={setValue} style={Passwordstyles.ps} />
      <TouchableOpacity 
        onPress={() => {
          setHide(!hide)
          setVisible(!visible)
        }} 
      >
      <MaterialCommunityIcons name={ !hide === true ? "eye" : "eye-off" } size={25} style={Passwordstyles.eye}/> 
      </TouchableOpacity>
    </View>
  )
}


export const CustomTextInput = ({ value, setValue, placeholder }) => {
  return (
    <View style={styles.pssection}>
      <TextInput placeholderTextColor="gray" placeholder={placeholder} value={value} onChangeText={setValue} style={styles.username} />
    </View>
  )
}



const Passwordstyles = StyleSheet.create({
  pssection: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 30,
    height:60,
    marginBottom:10,
    borderRadius: 10
  },
  ps: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 0,
    paddingLeft: 40,
    fontSize: 20,
    marginHorizontal: 20,
  },
  eye: {
    textAlign: "right",
    justifyContent: "center",
    paddingRight: 10,
  },
})  

const styles = StyleSheet.create({
  pssection: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 30,
    height:60,
    marginBottom:15,
    borderRadius: 10,
  },
  username: {
    flex:1,
    backgroundColor: "#fff",
    paddingLeft: 30,
    fontSize: 20,
    marginHorizontal: 30,
  },
})  