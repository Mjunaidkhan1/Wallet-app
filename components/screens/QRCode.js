import React from 'react';
import {View, Text, Image} from 'react-native';

const QRCode = () => {
  return (
    <View>
      <Image
        style={{width: '100%', marginLeft: 2}}
        source={require('../images/QRcode.png')}
      />
    </View>
  );
};

export default QRCode;
