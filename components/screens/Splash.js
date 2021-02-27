import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

const Splash = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../images/splashImg.png')}
      style={{width: '100%', height: '100%', justifyContent: 'space-around'}}>
      <View style={{alignItems: 'center'}}>
        <Fontisto name="credit-card" color="white" size={50} />
        <Text
          style={{
            color: 'white',
            textTransform: 'capitalize',
            fontSize: 50,
            fontWeight: 'bold',
          }}>
          betake
        </Text>
      </View>
      <View style={{alignItems: 'center', marginHorizontal: 20}}>
        <LinearGradient
          colors={['rgb(239, 25, 98)', 'rgb(244, 101, 150)']}
          start={{x: 0.0, y: 0.0}}
          end={{x: 0.0, y: 1.0}}
          locations={[0.0, 5.2]}
          useAngle={true}
          angle={45}
          angleCenter={{x: 0.8, y: 0.5}}
          style={{
            margin: 10,
            width: '90%',
            borderRadius: 30,
            shadowColor: 'gray',
            shadowOpacity: 0.8,

            elevation: 2,
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'space-around',
              flexDirection: 'row',
            }}
            onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                color: 'rgb(247, 152, 185)',
                fontSize: 20,
                paddingLeft: 30,
                padding: 10,
              }}>
              Sign in with your account
            </Text>
            <Entypo
              name="chevron-right"
              style={{paddingTop: 5, paddingRight: 10}}
              color="gray"
              size={20}
            />
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={['rgb(8, 149, 144)', 'rgb(95, 175, 205)']}
          start={{x: 0.0, y: 0.0}}
          end={{x: 0.0, y: 1.0}}
          locations={[0.0, 5.2]}
          useAngle={true}
          angle={45}
          angleCenter={{x: 0.8, y: 0.5}}
          style={{
            margin: 10,
            width: '90%',
            borderRadius: 30,
            shadowColor: 'gray',
            shadowOpacity: 0.8,
            elevation: 2,
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
            onPress={() => navigation.navigate('Signup')}>
            <Text
              style={{
                color: 'rgb(172, 223, 220)',
                fontSize: 20,
                padding: 10,
                paddingLeft: 50,
                // alignSelf: 'center',
              }}>
              Open an account
            </Text>
            <Entypo
              name="chevron-right"
              style={{paddingTop: 5, paddingLeft: 5}}
              color="white"
              size={20}
            />
          </TouchableOpacity>
        </LinearGradient>
        <View style={{marginTop: 50, alignItems: 'center'}}>
          <TouchableOpacity style={{alignItems: 'center', marginTop: 10}}>
            <Text style={{color: 'white', fontSize: 20}}>www.betake.come</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems: 'center', marginTop: 10}}>
            <Text style={{color: 'white', fontSize: 20}}>
              Forgot Password ?
            </Text>
            <Text style={{color: 'white', fontSize: 20}}>Contact us</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Splash;
