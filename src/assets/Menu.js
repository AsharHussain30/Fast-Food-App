import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

export const Menu = () => {
  const items = useSelector(state => state.cart.cart);
const navigation = useNavigation();
  return (
    <View style={{}}>
     <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
        <Text style={{paddingRight:20}}><MaterialCommunityIcons name="cart" size={34} color="black"/>{items.length}</Text>
     </TouchableOpacity>
     
    </View>
  )
}


const styles = StyleSheet.create({})