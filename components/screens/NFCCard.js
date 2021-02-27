import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {color} from 'react-native-reanimated';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NFCCard = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <ImageBackground
        style={{width: '110%', height: '100%'}}
        source={require('../images/NfcScnImg.png')}>
        <View
          style={{
            marginTop: 10,
            // backgroundColor: 'green',
            height: 50,
            alignItems: 'flex-end',
          }}>
          <View
            style={{
              //   backgroundColor: 'gray',
              width: 300,
              height: '100%',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
            }}>
            <Text style={{alignSelf: 'center', color: 'white', fontSize: 20}}>
              Scane NFC Card
            </Text>
            <MaterialIcons
              name="segment"
              style={{
                marginRight: 10,
              }}
              color="white"
              size={30}
            />
          </View>
        </View>
        <View
          style={{
            // marginTop: 20,
            // flex: 8,
            height: '45%',
            justifyContent: 'flex-end',
            // backgroundColor: 'red',
            // alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../images/arrow1.png')} />
          <Image source={require('../images/arrow2.png')} />
          <Image source={require('../images/arrow3.png')} />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 300,
            // backgroundColor: 'green',
          }}>
          <Text style={{color: 'white', fontSize: 18}}>
            Hold Your Card Tight To
          </Text>
          <Text style={{color: 'white', fontSize: 18}}>
            The Back of Your Phone for Scanning
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default NFCCard;
