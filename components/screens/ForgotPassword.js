import React, {useState} from 'react';
import {View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CountryCodeModal from '../Modals/CountryCodeModal';

const ForgotPassword = ({navigation}) => {
  const [modalVesible, setModalVesible] = useState(false);

  const ModOpn = () => {
    setModalVesible(true);
  };
  const ModClose = () => {
    setModalVesible(false);
  };
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
          Forgot Password
        </Text>

        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderTopLeftRadius: 10,
            borderTopEndRadius: 10,
          }}>
          <Entypo
            name="chevron-left"
            size={20}
            color="rgb(240, 26, 95)"
            style={{marginLeft: 10}}
            onPress={() => navigation.goBack()}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 20,
              marginTop: 20,
              paddingTop: 20,
            }}>
            Phone Number
          </Text>
          <Text
            style={{
              margin: 20,
              marginTop: 10,
              color: 'gray',
            }}>
            Please enter your phone number.We will send you a reset code
          </Text>
          <View
            style={{
              //   borderWidth: 2,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={{
                width: 70,
                height: 50,
                borderLeftWidth: 1,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                borderColor: 'rgb(193, 195, 197)',
              }}
              onPress={ModOpn}>
              <Text style={{fontSize: 20}}>+41</Text>
              <Entypo name="chevron-down" size={15} style={{}} />
            </TouchableOpacity>
            <TextInput
              keyboardType="phone-pad"
              style={{
                borderColor: 'rgb(82, 155, 223)',
                paddingVertical: 10,
                paddingHorizontal: 20,
                width: 200,

                fontSize: 20,
                borderWidth: 1,
              }}
              placeholder="Phone Number"
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
                onPress={() => navigation.navigate('CraditCardPin')}>
                <Text style={{}}></Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
        <CountryCodeModal visibel={modalVesible} ModClose={ModClose} />
      </LinearGradient>
    </View>
  );
};

export default ForgotPassword;
