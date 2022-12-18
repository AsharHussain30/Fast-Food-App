import {
  Button,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Animated,
  TouchableOpacityBase,
  Dimensions,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {MotiView, useAnimationState} from 'moti';
import {Easing} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import FontAweIcon from 'react-native-vector-icons/FontAwesome';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {DrawerAnimation} from './DrawerAnimation';
import {useDispatch, useSelector} from 'react-redux';
import {add} from '../../store/CartSlice';
import {remove} from '../../store/CartSlice';
import {useNavigation} from '@react-navigation/native';
import {MotiPressable} from 'moti/interactions';

export const Hexagon = () => {
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);

  const production = product => {
    if (product.id == 1) {
      navigation.navigate('Drink'), handleAdd(product);
    } else if (product.id == 2) {
      navigation.navigate('Donut'), handleAdd(product);
    } else if (product.id == 3) {
      navigation.navigate('HotDog'), handleAdd(product);
    } else if (product.id == 4) {
      navigation.navigate('Burger'), handleAdd(product);
    }
  };

  const moveToRight = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  const scrollviewRef = useRef();

  const scrollingtoward = useRef(new Animated.Value(0)).current;
  const scrollingdownward = useRef(new Animated.Value(1)).current;

  const {height, width} = Dimensions.get('window');
  const backward = useAnimationState({
    from: {
      translateX: 0,
    },
    animate: {
      translateX: 380,
    },
    transition: {
      type: 'spring',
      duration: 2000,
    },
  });
  const Forward = useAnimationState({
    from: {
      translateX: 0,
    },
    animate: {
      translateX: -380,

      transition: {
        type: 'spring',
        duration: 3000,
      },
    },
  });
  const dispatch = useDispatch();

  const tot = 1;

  const handleAdd = product => {
    dispatch(add(product));
  };

  const Data = [
    {
      image: (
        <Image
          source={require('../../assets/themePics/Drink.png')}
          style={{
            height: 200,
            width: 180,
            resizeMode: 'contain',
            position: 'relative',
            bottom: 50,
            left: -7,
            top: -15,
          }}
        />
      ),
      title: 'Drink',
      id: 1,
    },
    {
      image: (
        <Image
          source={require('../../assets/themePics/donut.png')}
          style={{
            height: 200,
            width: 180,
            resizeMode: 'contain',
            position: 'relative',
            bottom: 50,
            left: 0,
            top: 10,
          }}
        />
      ),
      title: 'Cakes',
      id: 2,
    },
    {
      image: (
        <Image
          source={require('../../assets/themePics/roll.png')}
          style={{
            height: 200,
            width: 180,
            resizeMode: 'contain',
            position: 'relative',
            bottom: 50,
            left: -5,
            top: 15,
          }}
        />
      ),
      title: 'Hot Dog',
      id: 3,
    },
    {
      image: (
        <Image
          source={require('../../assets/themePics/burger.png')}
          style={{
            height: 200,
            width: 180,
            resizeMode: 'contain',
            position: 'relative',
            top: 10,
            left: -5,
          }}
        />
      ),
      title: 'Burger',
      id: 4,
    },
  ];

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <DrawerAnimation />
      </View>
      <Animated.View
        style={{
          flex: 1,
          margin: 0,
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          position: 'absolute',
          borderTopLeftRadius: showMenu ? 80 : 0,
          borderBottomLeftRadius: showMenu ? 80 : 0,
          borderColor: showMenu ? 'white' : 'transparent',
          borderWidth: 2,
          padding: showMenu ? 22 : 0,
          backgroundColor: 'white',
          transform: [{scale: scale}, {translateX: moveToRight}],
        }}>
        <ScrollView style={{padding: height / 60}}>
          <TouchableOpacity
            style={{justifyContent: 'flex-start'}}
            onPress={() => {
              Animated.timing(scale, {
                toValue: showMenu ? 1 : 0.8,
                duration: 400,
                useNativeDriver: true,
              }).start();
              Animated.timing(moveToRight, {
                toValue: showMenu ? 0 : 300,
                duration: 400,
                useNativeDriver: true,
              }).start();
              setShowMenu(!showMenu);
            }}>
            <Image
              source={require('../../assets/menu.png')}
              style={{height: 35, width: 35, position: 'absolute'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Cart')}
            style={{position: 'absolute', alignSelf: 'flex-end'}}>
            <Text style={{paddingRight: 20, textAlign: 'right'}}>
              <MaterialCommunityIcons name="cart" size={34} color="black" />
            </Text>
          </TouchableOpacity>
          <View style={{marginTop: 100, flex: 1}}>
            <Text style={{fontWeight: '680', fontSize: 35, color: 'black'}}>
              Top of
            </Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={{fontWeight: '680', fontSize: 37, color: 'black'}}>
                the day
              </Text>
              <Image
                source={require('../../assets/themePics/textburger.png')}
                style={{height: 50, width: 50}}
              />
            </View>
            <View
              style={{
                backgroundColor: '#baa2e1',
                height: 205,
                width: '100%',
                borderRadius: 25,
                marginTop: 25,
                paddingVertical: 35,
                paddingHorizontal: 25,
                borderBottomWidth: 14,
                borderBottomColor: '#ece1ff',
              }}>
              <Text style={{color: '#d8c8ec', fontSize: 15}}>Discover</Text>
              <Text style={{color: '#fef9fb', fontSize: 25}}>Best lunch</Text>
              <Text style={{color: '#fef9fb', fontSize: 25}}>of the day</Text>
              <MaterialCommunityIcons
                name="arrow-right"
                size={23}
                color="#fef9fb"
                style={{paddingTop: 10}}
              />
              <Image
                source={require('../../assets/themePics/wine.png')}
                style={{
                  height: 220,
                  resizeMode: 'contain',
                  marginLeft: 135,
                  position: 'absolute',
                  bottom: 30,
                }}
              />
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flex: 1,
                flexDirection: 'row',
                paddingVertical: 20,
              }}>
              <Text style={{fontSize: 17}}>Most Popular</Text>
              <TouchableOpacity
                onPress={() => backward.transitionTo('animate')}>
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={23}
                  color="gray"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Forward.transitionTo('animate')}
                style={{marginLeft: -190}}>
                <MaterialCommunityIcons
                  name="arrow-right"
                  size={23}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {Data.map((product, index) => (
                <MotiView state={backward}>
                <MotiView state={Forward}>
                <View
                  style={{
                    justifyContent: 'space-evenly',
                    flexDirection: 'row',
                    flex: 1,
                    marginTop: 35,
                  }}>
                  <TouchableOpacity onPress={() => production(product)}>
                    <View
                      style={{
                        height: 215,
                        width: 145,
                        backgroundColor: '#d3eaf4',
                        borderRadius: 25,
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        marginLeft: 25,
                        marginRight: 25,
                      }}>
                      {product.image}
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 20,
                          fontWeight: '800',
                          color: 'black',
                          paddingBottom: 15,
                        }}>
                        {product.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                </MotiView>
                </MotiView>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

{
  /*<MotiView state={secanimationState}>
    <MotiView 
    from={{
          scale:0.7,
          translateX:-300,
          opacity:1
    }}
    animate={{
      opacity:1,
      scale:0.9,
      translateX:1,
      transition:{
        type:"timing",
        duration:40,
      }}
      }>
    <View style={styles.hexagon}>
    <View style={styles.hexagonInner}>
    {/* <TouchableOpacity onPress={() => {
    Animated.timing(scale,{
      toValue:showMenu ? 1 : 0.8,
      duration:300,
      useNativeDriver: true,
    }).start();
    Animated.timing(moveToRight,{
      toValue:showMenu ? 0 : 240,
      duration:300,
      useNativeDriver: true,
    }).start();
    }} style={{justifyContent:"center"}}>
     */
}
//  <TouchableOpacity>
//     <Text style={{fontSize:25,textAlign:"center",color:"white"}}>{text}</Text>
//   </TouchableOpacity>
//   </View>
// <View style={styles.hexagonBefore}/>
// <View style={styles.hexagonAfter}/>
// </View>
// </MotiView>
// </MotiView> */}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: 'black',
    marginBottom: 900,
  },
  shape: {
    borderWidth: 5,
    marginVertical: 15,
    shadowColor: 'cyan',
    shadowOffset: {height: 1, width: 1},
    shadowRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hexa: {
    height: 100,
    width: 100,
  },
  hexagon: {
    height: 55,
    width: 100,
    marginBottom: 45,
  },
  hexagonInner: {
    height: 55,
    width: 100,
    backgroundColor: 'cyan',
  },
  hexagonBefore: {
    position: 'absolute',
    bottom: -26,
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderTopWidth: 27,
    borderTopColor: 'cyan',
  },
  hexagonAfter: {
    position: 'absolute',
    top: -26,
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderBottomWidth: 27,
    borderBottomColor: 'cyan',
  },
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
  userimage: {
    height: 130,
    width: 130,
    marginTop: 40,
    marginLeft: 10,
    borderRadius: 100,
    backgroundColor: 'black',
  },
  name: {
    fontSize: 29,
    color: '#12c7a6',
    paddingTop: 80,
    paddingLeft: 170,
    fontWeight: 'bold',
    position: 'absolute',
  },
  screens: {
    paddingTop: 20,
  },
  screen: {
    flexDirection: 'row',
    borderRadius: 20,
    padding: 6,
    marginBottom: 15,
    marginHorizontal: 25,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    paddingLeft: 30,
    textAlign: 'center',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 40,
    marginTop: 50,
  },
  signout: {
    color: 'white',
    fontSize: 10,
    paddingLeft: 10,
    paddingTop: 5,
    textAlign: 'center',
  },
});
