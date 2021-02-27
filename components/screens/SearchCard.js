import React from 'react';
import {View, Text, ImageBackground, Image, TextInput} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const SearchCard = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          //   flex: 3,
          backgroundColor: 'rgb(240, 240, 240)',
          height: 200,
          width: '100%',
        }}>
        <Text
          style={{
            alignSelf: 'center',
            color: 'rgb(160, 160, 161)',
            marginTop: 10,
            textTransform: 'capitalize',
            fontWeight: 'bold',
          }}>
          choose your card
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Entypo
            name="chevron-left"
            style={{paddingTop: 10, paddingLeft: 5}}
            color="rgb(254, 27, 97)"
            size={25}
          />
          <View
            style={{
              borderRadius: 20,
              backgroundColor: 'rgba(52, 52, 52, 0.8)',
              width: '80%',
              //   height: 130,
              marginTop: 20,
            }}>
            <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 10}}>
              <Image
                style={{
                  //   marginLeft: 10,
                  height: 60,
                  width: 60,
                }}
                source={require('../images/profileImg.png')}
              />
              <View style={{marginTop: 5, paddingLeft: 5}}>
                <Text
                  style={{
                    textTransform: 'capitalize',
                    // fontSize: 16,
                    color: 'rgb(154, 154, 155)',
                  }}>
                  name
                </Text>
                <Text
                  style={{
                    textTransform: 'capitalize',

                    color: 'rgb(154, 154, 155)',
                  }}>
                  zidane petrick doe!
                </Text>
                <Text
                  style={{
                    textTransform: 'capitalize',
                    fontSize: 10,
                    color: 'rgb(107, 108, 109)',
                  }}>
                  last login 10:20 AM 19:09:217
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'rgb(254, 27, 97)',
                height: 20,
                borderRadius: 10,
                marginRight: 10,
                marginTop: -10,
                width: 20,
                alignSelf: 'flex-end',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Entypo name="check" style={{}} color="white" size={15} />
            </View>
            <View
              style={{
                width: 70,
                // height: 30,
                borderRadius: 20,
                backgroundColor: 'rgb(10, 10, 10)',
                marginLeft: 15,
                marginTop: -5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: 5,
              }}>
              <Image
                style={{
                  height: 25,
                  width: 25,
                }}
                source={require('../images/profileImg.png')}
              />
              <Text style={{color: 'rgb(154, 154, 155)'}}>USD</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 7, alignItems: 'center'}}>
        <Text
          style={{
            color: 'rgb(160, 160, 161)',
            marginTop: 10,
            textTransform: 'capitalize',
            fontWeight: 'bold',
          }}>
          choose your card
        </Text>
        <View
          style={{
            width: '90%',
            borderRadius: 50,
            shadowColor: 'gray',
            shadowOpacity: 5,
            elevation: 3,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TextInput
            style={{marginLeft: 10, paddingLeft: 10, width: 280}}
            placeholder="Search cards"
          />
          <Entypo
            name="chevron-down"
            style={{marginRight: 10}}
            color="black"
            size={20}
          />
        </View>
        <Image
          style={{height: 400, width: 300, marginTop: 10}}
          source={require('../images/Cards.png')}
        />
      </View>
    </View>
  );
};

export default SearchCard;
