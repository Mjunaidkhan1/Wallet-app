import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

const ScaneImage = () => {
  const image = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
    });
  };
  return (
    <View>
      <TouchableOpacity
        onPress={image}
        style={{
          width: 100,
          backgroundColor: 'green',
          padding: 10,
          alignItems: 'center',
        }}>
        <Text>click</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScaneImage;
