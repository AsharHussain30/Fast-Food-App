import 'react-native-reanimated';
import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'
import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons'
import { useDispatch } from 'react-redux';
import { remove} from '../../store/CartSlice'
import {increment} from '../../store/CartSlice'
import {decrement} from '../../store/CartSlice'
import { useNavigation } from '@react-navigation/native';

export const Cart = () => {
  const navigation = useNavigation();
  const items = useSelector(state => state.cart.cart);  
  const products = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  const increase = (item) => {
    dispatch(increment(item))    
  }
  const decrease = (item) => {
    dispatch(decrement(item))
  }
    
   const handleRemove = (product) => {
     dispatch(remove(product))
     console.log(product)
   };
  return (
    <ScrollView style={{backgroundColor:"black"}}>
      <TouchableOpacity onPress={() => navigation.goBack("")} style={{padding:25}}>
      <MaterialCommunityIcons name='arrow-back-circle-outline' size={34} color="white"/>
      </TouchableOpacity>
      {
      products.map((product,index) => (
        <View key={index} style={styles.card1}>
                  {product.image}
                   <Text style={{ color:"white",paddingLeft:20,fontSize: 13,fontWeight:"bold", textAlign: "center" }}>{product.title}</Text>
                   <TouchableOpacity onPress={() => increase(product)}>
                   <Text style={{ color:"white",paddingHorizontal:20,fontSize: 25, fontFamily: "JosefinSans_600SemiBold_Italic", textAlign: "center" }}>+</Text>
                   </TouchableOpacity>
                   <Text>{product.quantity}</Text>
                   <TouchableOpacity onPress={() => decrease(product)}>
                     <Text style={{ color:"white",paddingHorizontal:20,fontSize: 25, fontFamily: "JosefinSans_600SemiBold_Italic", textAlign: "center" }}>-</Text>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={() => {handleRemove(product)}}>
                     <MaterialCommunityIcons name='remove' size={27} color='white' />
                   </TouchableOpacity>
                   
               </View>
               ))}
    </ScrollView>
  )
      };


const styles = StyleSheet.create({
  card1:{
    marginHorizontal: 15,
    padding: 20,
    marginVertical: 15,
    flex:1,
    flexDirection:"row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#d60664",
    borderRadius: 20,
    borderColor: "#d60664",
    aspectRatio:undefined
  }
})