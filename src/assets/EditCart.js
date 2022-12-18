import 'react-native-reanimated';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {remove} from '../../store/CartSlice';
import {increment} from '../../store/CartSlice';
import {decrement} from '../../store/CartSlice';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export const EditCart = ({route}) => {
  const navigation = useNavigation();
  const {height, width} = Dimensions.get('window');

  const [cartnotification, setCartnotification] = useState([]);

  const items = useSelector(state => state.cart);
  const products = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const increase = item => {
    dispatch(increment(item));
  };
  const decrease = item => {
    dispatch(decrement(item));
  };

  const handleRemove = product => {
    dispatch(remove(product));
    console.log(product);
  };

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => navigation.goBack('')}
        style={{padding: 25}}>
        <Ionicons name="arrow-back-circle-outline" size={34} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        style={{position: 'absolute', alignSelf: 'flex-end', padding: 25}}>
        <Text style={{paddingRight: 20, textAlign: 'right'}}>
          <MaterialCommunityIcons name="cart" size={34} color="black" />
        </Text>
      </TouchableOpacity>
      <View style={{marginTop: 10, flex: 1, marginHorizontal: 25}}>
        <View style={{flexDirection: 'row', marginTop: 40}}>
          <Text style={{fontWeight: '680', fontSize: 35, color: 'black'}}>
            Edit Your Cart
          </Text>
          <Image
            source={require('../../assets/themePics/textburger.png')}
            style={{height: 50, width: 50}}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginVertical: 20,
          }}>
          <Text style={{fontSize: 17, textAlignVertical: 'center',color:"gray"}}>
            Items Choosen
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('EditCart')}>
            <AntDesign name="edit" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
          <View style={{alignItems: 'center', marginVertical: 40}}>
            {products.map((product, index) => (
              <>
                <View key={index} style={styles.card1}>
                  <LinearGradient
                    colors={['orange', 'red']}
                    style={{
                      borderRadius: 100,
                      position: 'absolute',
                      bottom: 100,
                      left: 30,
                      height: 50,
                      width: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 24,
                        color: 'white',
                        textAlignVertical: 'center',
                      }}>
                      {product.quantity}
                    </Text>
                  </LinearGradient>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'space-evenly',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity onPress={() => handleRemove(product)}>
                      <MaterialCommunityIcons name="delete" size={30} color="gray" />
                    </TouchableOpacity>

                    <Text
                      style={{
                        color: 'black',
                        paddingLeft: 30,
                        fontSize: 23,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        textAlignVertical: 'center',
                      }}>
                      {product.title}
                    </Text>
                    <View style={{marginBottom: 25, paddingLeft: 20}}>
                      {product.image}
                    </View>
                  </View>
                </View>
              </>
            ))}
          </View>
        </ScrollView>

        {products == !cartnotification ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'center',
              paddingVertical: 130,
            }}>
            <Image
              source={require('../../assets/themePics/emptycart.png')}
              style={{
                resizeMode: 'contain',
                position: 'absolute',
                width: '100%',
                height: '150%',
              }}
            />
          </View>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: '#ffcc00',
              width: '100%',
              height: 100,
              borderRadius: 25,
              justifyContent: 'center',
              marginBottom: 20,
            }}>
            <Text
              style={{
                textAlign: 'center',
                textAlignVertical: 'center',
                fontSize: 17,
                color: 'black',
                fontWeight: 'bold',
              }}>
              Checkout
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card1: {
    marginHorizontal: 15,
    padding: 0,
    marginVertical: 35,
    height: 120,
    width: 360,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 15,
    borderRadius: 20,
  },
});
