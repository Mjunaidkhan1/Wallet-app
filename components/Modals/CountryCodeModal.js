import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

import {ContryData} from '../ContryCodeData';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CountryCodeModal = (props) => {
  return (
    <Modal visible={props.visibel} transparent={true}>
      <View
        style={{
          flex: 1,
          marginBottom: 10,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '95%',
            height: 400,
            borderRadius: 20,
            paddingVertical: 10,
            backgroundColor: 'rgb(221, 222, 223)',
          }}>
          {/* <View style={{alignSelf: 'flex-end', marginRight: 20}}> */}
          <Ionicons
            style={{alignSelf: 'flex-end', marginRight: 20}}
            name="close"
            size={20}
            onPress={props.ModClose}
          />
          {/* </View> */}
          <ScrollView
            style={{marginHorizontal: 10}}
            showsVerticalScrollIndicator={false}>
            {ContryData.map((item, ind) => {
              // console.log(item.code);
              return (
                <TouchableOpacity
                  onPress={() => Alert.alert('hello')}
                  style={{
                    // backgroundColor: 'green',
                    borderBottomWidth: 1,
                    padding: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                  key={ind}>
                  <Text style={{fontSize: 20}}>+{item.code}</Text>
                  <Text style={{fontSize: 20}}>{item.name}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          {/* <Text>hhh</Text> */}
          {/* <View style={{}}> */}
          {/* <TouchableOpacity
            style={{backgroundColor: 'red', alignItems: 'center'}}
            onPress={() => Alert.alert('button')}>
            <Text style>close</Text>
          </TouchableOpacity> */}
        </View>
        {/* </View> */}
      </View>
    </Modal>
  );
};

export default CountryCodeModal;
