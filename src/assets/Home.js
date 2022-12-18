import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {add} from '../../store/CartSlice';
import {remove} from '../../store/CartSlice';

export const Home = () => {
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();

  const handleAdd = product => {
    dispatch(add(product));
  };
  console.log(handleAdd);

  const Data = [
    {
      image: (
        <Image
          source={require('../../assets/burger.png')}
          style={{height: 70, width: 100}}
        />
      ),
      title: 'Burger',
      id: 1,
    },
    {
      image: (
        <Image
          source={require('../../assets/burger2.png')}
          style={{height: 70, width: 100}}
        />
      ),
      title: 'Burger',
      id: 2,
    },
    {
      image: (
        <Image
          source={require('../../assets/burger3.png')}
          style={{height: 70, width: 100}}
        />
      ),
      title: 'Burger',
      id: 3,
    },
    {
      image: (
        <Image
          source={require('../../assets/burger3.png')}
          style={{height: 70, width: 100}}
        />
      ),
      title: 'Burger',
      id: 4,
    },
  ];
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'black'}}>
      {Data.map((product, index) => (
        <View key={index} style={styles.card1}>
          <TouchableOpacity
            onPress={() => {
              handleAdd(product);
            }}>
            {product.image}
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontFamily: 'JosefinSans_600SemiBold_Italic',
                textAlign: 'center',
              }}>
              {product.title}
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{textAlignVertical: 'center', color: '#A2A2A1FF'}}>
                Add To Cart
              </Text>
              <Text style={styles.forward1}>
                <MaterialCommunityIcons
                  name="cart"
                  size={27}
                  color="#A2A2A1FF"
                />
                {}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card1: {
    marginHorizontal: 15,
    padding: 20,
    marginVertical: 15,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#195190FF',
    borderRadius: 20,
    borderColor: '#d60664',
    aspectRatio: undefined,
  },
});
