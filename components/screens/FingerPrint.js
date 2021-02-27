import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';

const FingerPrint = () => {
  return (
    <View
      style={{
        flex: 1,

        backgroundColor: 'rgb(244, 244, 244)',
      }}>
      <ImageBackground
        source={require('../images/loginImg.png')}
        imageStyle={{
          height: 350,

          width: '100%',
          backgroundColor: 'white',
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}
        style={{}}>
        <View
          style={{
            alignItems: 'center',

            justifyContent: 'flex-end',
            height: 470,
          }}>
          <Image style={{}} source={require('../images/Finger.png')} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default FingerPrint;
