import React, {useState} from 'react';
import {View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CraditCardPin = ({navigation}) => {
  const [modalVesible, setModalVesible] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: 'rgb(216, 216, 216)'}}>
      <LinearGradient
        colors={['rgb(252, 28, 98)', 'rgb(238, 26, 95)']}
        start={{x: 1.0, y: 0.0}}
        end={{x: 0.0, y: 1.0}}
        locations={[0.0, 5.2]}
        useAngle={true}
        angle={45}
        angleCenter={{x: 0.8, y: 0.5}}
        style={{
          flex: 6,
          shadowColor: 'gray',
          shadowOpacity: 0.8,

          elevation: 2,
        }}>
        <Text
          style={{
            padding: 10,
            alignSelf: 'center',
            color: 'white',
            fontSize: 20,
          }}>
          Phone Confirmation
        </Text>
        <Entypo
          name="chevron-left"
          size={20}
          color="white"
          style={{marginLeft: 10, paddingBottom: 10}}
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderTopLeftRadius: 10,
            borderTopEndRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 20,
              marginTop: 20,
              paddingTop: 20,
            }}>
            Cradit Card Pin Code
          </Text>
          <Text
            style={{
              margin: 20,
              marginTop: 10,
              color: 'gray',
            }}>
            You can have this code from login in to your bank account
            information
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: 20,
              marginHorizontal: 20,
            }}>
            <TextInput
              keyboardType="phone-pad"
              style={{
                borderColor: 'rgb(143, 193, 251)',
                paddingLeft: 30,
                paddingRight: 10,
                fontSize: 20,
                borderWidth: 2,
                borderRadius: 5,
              }}
            />
            <TextInput
              keyboardType="phone-pad"
              style={{
                borderColor: 'rgb(143, 193, 251)',
                paddingLeft: 30,
                paddingRight: 10,
                fontSize: 20,
                borderWidth: 2,
                borderRadius: 5,
              }}
            />
            <TextInput
              keyboardType="phone-pad"
              style={{
                borderColor: 'rgb(143, 193, 251)',
                paddingLeft: 30,
                paddingRight: 10,
                fontSize: 20,
                borderWidth: 2,
                borderRadius: 5,
              }}
            />
            <TextInput
              keyboardType="phone-pad"
              style={{
                borderColor: 'rgb(143, 193, 251)',
                paddingLeft: 30,
                paddingRight: 10,
                fontSize: 20,
                borderWidth: 2,
                borderRadius: 5,
              }}
            />
          </View>
          <View style={{justifyContent: 'flex-end', flex: 8}}>
            <LinearGradient
              colors={['rgb(252, 28, 98)', 'rgb(238, 26, 95)']}
              start={{x: 1.0, y: 0.0}}
              end={{x: 0.0, y: 1.0}}
              locations={[0.0, 5.2]}
              useAngle={true}
              angle={45}
              angleCenter={{x: 0.8, y: 0.5}}
              style={{
                shadowColor: 'gray',
                shadowOpacity: 0.8,
                elevation: 2,
                margin: 20,
              }}>
              <TouchableOpacity
                style={{alignItems: 'center', fontSize: 20, padding: 10}}
                onPress={() => navigation.navigate('TabNavig')}>
                <Text style={{}}></Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default CraditCardPin;
