import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
const PickedCard = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'rgb(244, 244, 244)'}}>
      <View
        style={{
          marginLeft: 10,
          height: 30,
          width: 30,
          borderRadius: 8,
          backgroundColor: 'rgb(255, 28, 98)',
          alignItems: 'center',
          justifyContent: 'center',
          //   alignSelf: 'flex-end',
          marginTop: 20,
        }}>
        <Entypo name="chevron-left" style={{}} color="white" size={20} />
      </View>

      <View
        style={{
          marginTop: -10,
          //   backgroundColor: 'green',
          width: '80%',
          //   height: 50,
          alignSelf: 'flex-end',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Image
          style={{width: 80, height: 80}}
          source={require('../images/profileImg.png')}
        />
        <View
          style={{
            // backgroundColor: 'red',
            height: 70,
            width: 120,
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'flex-end',
          }}>
          <Text style={{color: 'rgb(128, 130, 131)'}}>Zidane petrick doe!</Text>
          <Text style={{letterSpacing: 2}}>Picked Card</Text>
        </View>
        <Image
          style={{marginRight: 20, marginTop: 20}}
          source={require('../images/s.png')}
        />
      </View>

      <View
        style={{
          //   backgroundColor: 'green',
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 10,
        }}>
        <ImageBackground
          style={{
            height: 160,
            width: 160,
            alignItems: 'center',

            justifyContent: 'center',
          }}
          source={require('../images/CardBg1.png')}>
          <Image
            style={{marginTop: -20}}
            source={require('../images/atmCard.png')}
          />
        </ImageBackground>
        <ImageBackground
          style={{
            height: 160,
            width: 160,
            alignItems: 'center',

            justifyContent: 'center',
          }}
          source={require('../images/CardBg2.png')}>
          <Image
            style={{marginTop: -20}}
            source={require('../images/Lafc.png')}
          />
        </ImageBackground>
      </View>
      <View
        style={{
          //   backgroundColor: 'green',
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 10,
        }}>
        <ImageBackground
          style={{
            height: 160,
            width: 160,
            alignItems: 'center',

            justifyContent: 'center',
          }}
          source={require('../images/CardBg2.png')}>
          <Image
            style={{marginTop: -20, height: 70, width: 100}}
            source={require('../images/ip.png')}
          />
        </ImageBackground>
        <ImageBackground
          style={{
            height: 160,
            width: 160,
            alignItems: 'center',

            justifyContent: 'center',
          }}
          source={require('../images/CardBg2.png')}>
          <ImageBackground
            style={{
              height: 70,
              width: 120,
              marginTop: -20,
              alignItems: 'center',

              justifyContent: 'center',
            }}
            source={require('../images/Orang.png')}>
            <Image
              style={{height: 30, width: 100}}
              source={require('../images/ZARA.png')}
            />
          </ImageBackground>
        </ImageBackground>
      </View>
      <View
        style={{
          //   backgroundColor: 'green',
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 10,
        }}>
        <ImageBackground
          style={{
            height: 160,
            width: 160,
            alignItems: 'center',

            justifyContent: 'center',
          }}
          source={require('../images/CardBg2.png')}>
          <ImageBackground
            style={{
              height: 70,
              width: 120,
              marginTop: -20,
              alignItems: 'center',

              justifyContent: 'center',
            }}
            source={require('../images/red.png')}>
            <Image
              style={{height: 80, width: 80}}
              source={require('../images/m.png')}
            />
          </ImageBackground>
        </ImageBackground>
        <ImageBackground
          style={{
            height: 160,
            width: 160,
            alignItems: 'center',

            justifyContent: 'center',
          }}
          source={require('../images/CardBg2.png')}>
          <ImageBackground
            style={{
              height: 70,
              width: 120,
              marginTop: -20,
              alignItems: 'flex-end',

              justifyContent: 'center',
            }}
            source={require('../images/yellow.png')}>
            <View
              style={{
                height: 30,
                width: 30,
                borderWidth: 5,
                borderRadius: 15,
                borderColor: 'rgb(175, 180, 17)',
                marginRight: 10,
              }}></View>
          </ImageBackground>
        </ImageBackground>
      </View>
    </View>
  );
};

export default PickedCard;
