import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PamentHistory = () => {
  return (
    <LinearGradient
      colors={['rgb(246, 19, 80)', 'rgb(247, 20, 90)']}
      start={{x: 5.0, y: 0.0}}
      end={{x: 0.0, y: 5.0}}
      locations={[0.0, 5.2]}
      useAngle={true}
      angle={45}
      angleCenter={{x: 0.0, y: 0.0}}
      style={{
        flex: 1,
        shadowColor: 'gray',
        shadowOpacity: 0.8,
        alignItems: 'center',

        elevation: 2,
      }}>
      <View
        style={{
          borderWidth: 3,
          borderColor: 'white',
          borderRadius: 70,
          alignItems: 'center',
          justifyContent: 'center',
          height: 130,
          width: 130,
          marginTop: 10,
        }}>
        <Entypo
          style={{marginLeft: 10, marginBottom: 10}}
          name="rss"
          s
          size={70}
          color="white"
        />
      </View>
      <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
        NFC
      </Text>
      <Entypo style={{marginTop: 20}} name="check" s size={70} color="white" />
      <Text style={{color: 'white', fontSize: 25, marginTop: 10}}>
        PAYMENT SUCCESSFULLY
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: 'rgb(254, 165, 192)',
          paddingHorizontal: 20,
          fontSize: 18,
          marginTop: 10,
        }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been
      </Text>
      <Text style={{color: 'white', fontSize: 25, marginTop: 20}}>Receipt</Text>
      <View
        style={{
          flexDirection: 'row',
          width: 220,
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              borderWidth: 3,
              borderColor: 'white',
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              height: 60,
              width: 60,
            }}>
            <Fontisto style={{}} name="email" s size={30} color="white" />
          </View>
          <Text style={{color: 'white', paddingTop: 5}}>Email</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              borderWidth: 3,
              borderColor: 'white',
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              height: 60,
              width: 60,
            }}>
            <Ionicons
              style={{}}
              name="chatbubbles-outline"
              s
              size={30}
              color="white"
            />
          </View>
          <Text style={{color: 'white', paddingTop: 5}}>SMS</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              borderWidth: 3,
              borderColor: 'white',
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              height: 60,
              width: 60,
            }}>
            <Fontisto style={{}} name="print" s size={30} color="white" />
          </View>
          <Text style={{color: 'white', paddingTop: 5}}>Print</Text>
        </View>
      </View>
      <Text style={{color: 'white', paddingTop: 20, fontSize: 20}}>
        Failed Sending receipt to email
      </Text>
      <Text style={{color: 'white', fontSize: 20}}>xyz@gmail.com</Text>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          marginTop: 20,
          backgroundColor: 'white',
          width: '100%',
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'rgb(247, 20, 90)',
            fontWeight: 'bold',
            padding: 10,
          }}>
          Go back
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default PamentHistory;
