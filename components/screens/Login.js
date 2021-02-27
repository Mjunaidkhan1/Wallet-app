import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

export default function Login({navigation}) {
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'rgb(243, 243, 243)',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            height: 200,
            width: '100%',
            alignItems: 'center',
          }}>
          <ImageBackground
            source={require('../images/loginImg.png')}
            style={{
              height: 220,
              width: 500,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Fontisto name="credit-card" color="red" size={50} />
          </ImageBackground>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            marginBottom: 20,
            height: 400,
            width: '90%',
            borderRadius: 20,
          }}>
          <View
            style={{
              backgroundColor: 'rgb(243, 243, 243)',
              alignSelf: 'flex-end',
              borderRadius: 20,
              margin: 10,
            }}>
            <Fontisto name="close-a" style={{padding: 10}} size={15} />
          </View>
          <Text style={{textAlign: 'center', fontSize: 30, color: 'gray'}}>
            Sing in
          </Text>
          <View style={{marginVertical: 10, marginHorizontal: 20}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textTransform: 'uppercase',
                color: 'gray',
                marginTop: 20,
              }}>
              pro id
            </Text>
            <TextInput
              placeholder="Enter your bank ID"
              autoFocus={true}
              style={{borderBottomWidth: 1, borderColor: 'gray'}}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textTransform: 'uppercase',
                color: 'gray',
                marginTop: 20,
              }}>
              PASSWORD
            </Text>
            <TextInput
              placeholder="******"
              // focusable={true}
              style={{borderBottomWidth: 1, borderColor: 'gray'}}
            />
          </View>
          <LinearGradient
            colors={['rgb(31, 137, 177)', 'rgb(50, 242, 197)']}
            start={{x: 0.0, y: 0.0}}
            end={{x: 0.0, y: 1.0}}
            locations={[0.0, 5.2]}
            useAngle={true}
            angle={45}
            angleCenter={{x: 0.8, y: 0.5}}
            style={{
              margin: 20,

              borderRadius: 30,
              shadowColor: 'gray',
              shadowOpacity: 0.8,
              elevation: 2,
            }}>
            <TouchableOpacity
              style={{width: '100%', alignItems: 'center'}}
              onPress={() => navigation.navigate('ForgotPassword')}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    paddingVertical: 10,
                    color: 'rgb(161, 223, 224)',
                  }}>
                  Sing in
                </Text>
                <Entypo
                  name="chevron-right"
                  style={{paddingTop: 5, paddingLeft: 5}}
                  color="white"
                  size={20}
                />
              </View>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
