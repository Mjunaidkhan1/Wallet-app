import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

const PamentList = () => {
  return (
    <View
      style={{
        flex: 1,

        backgroundColor: 'rgb(244, 244, 244)',
      }}>
      <View
        style={{
          backgroundColor: 'white',
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,

          height: 350,
        }}>
        <ImageBackground
          source={require('../images/loginImg.png')}
          imageStyle={{}}
          style={{
            // backgroundColor: 'green',
            alignSelf: 'flex-end',
            alignItems: 'center',
            width: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              // backgroundColor: 'gray',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <Entypo
              name="chevron-left"
              size={25}
              color="rgb(254, 27, 97)"
              style={{marginTop: 10}}
            />
            <Text
              style={{
                fontSize: 60,
                marginBottom: 10,
                marginLeft: 50,
                color: 'rgb(166, 31, 31)',
              }}>
              ZARA
            </Text>
            <View
              style={{
                backgroundColor: 'rgb(254, 27, 97)',
                width: 50,
                height: 50,
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'flex-end',
                marginRight: 20,
              }}>
              <Text style={{color: 'white', fontSize: 20}}>S</Text>
            </View>
          </View>
          <Image
            style={{height: 180, width: 180}}
            source={require('../images/barcode.png')}
          />
          <Text style={{letterSpacing: 2}}>Payment amount</Text>
          <Text style={{fontSize: 40, marginBottom: 10}}>$365.00</Text>
        </ImageBackground>
      </View>
      <LinearGradient
        colors={['rgb(86, 248, 112)', 'rgb(101, 228, 225)']}
        start={{x: 0, y: 0}}
        end={{x: 0.0, y: 1}}
        locations={[0.2, 0.8]}
        useAngle={true}
        angle={45}
        angleCenter={{x: 0.4, y: 0.8}}
        style={{
          backgroundColor: 'green',
          alignSelf: 'center',

          width: 130,

          borderRadius: 30,
          shadowColor: 'gray',
          shadowOpacity: 0.8,

          elevation: 2,
          marginTop: -18,
        }}>
        <TouchableOpacity
          style={{width: '100%', alignItems: 'center'}}
          onPress={() => Alert.alert('hell')}>
          <Text style={{fontSize: 25, color: 'white', padding: 5}}>Pay</Text>
        </TouchableOpacity>
      </LinearGradient>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            marginTop: 20,
            marginLeft: 10,
            width: 220,
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderColor: 'rgb(221, 221, 221)',
              padding: 10,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                textTransform: 'capitalize',
                color: 'rgb(174, 174, 174)',
                fontSize: 14,
              }}>
              tshert monatsj
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 14,
                color: 'rgb(157, 157, 157)',
              }}>
              $23456
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderColor: 'rgb(221, 221, 221)',
              padding: 10,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                textTransform: 'capitalize',
                color: 'rgb(174, 174, 174)',
                fontSize: 14,
              }}>
              tshert monatsj
            </Text>
            <Text
              style={{
                // paddingLeft: 40,
                fontWeight: 'bold',
                fontSize: 14,
                color: 'rgb(157, 157, 157)',
              }}>
              $23456
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderColor: 'rgb(221, 221, 221)',
              padding: 10,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                textTransform: 'capitalize',
                color: 'rgb(174, 174, 174)',
                fontSize: 14,
              }}>
              tshert monatsj
            </Text>
            <Text
              style={{
                // paddingLeft: 40,
                fontWeight: 'bold',
                fontSize: 14,
                color: 'rgb(157, 157, 157)',
              }}>
              $23456
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderColor: 'rgb(221, 221, 221)',
              padding: 10,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                textTransform: 'capitalize',
                color: 'rgb(174, 174, 174)',
                fontSize: 14,
              }}>
              tshert monatsj
            </Text>
            <Text
              style={{
                // paddingLeft: 40,
                fontWeight: 'bold',
                fontSize: 14,
                color: 'rgb(157, 157, 157)',
              }}>
              $23456
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderColor: 'rgb(221, 221, 221)',
              padding: 10,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                textTransform: 'capitalize',
                color: 'rgb(174, 174, 174)',
                fontSize: 14,
              }}>
              tshert monatsj
            </Text>
            <Text
              style={{
                // paddingLeft: 40,
                fontWeight: 'bold',
                fontSize: 14,
                color: 'rgb(157, 157, 157)',
              }}>
              $23456
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderColor: 'rgb(221, 221, 221)',
              padding: 10,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                textTransform: 'capitalize',
                color: 'rgb(174, 174, 174)',
                fontSize: 14,
              }}>
              tshert monatsj
            </Text>
            <Text
              style={{
                // paddingLeft: 40,
                fontWeight: 'bold',
                fontSize: 14,
                color: 'rgb(157, 157, 157)',
              }}>
              $23456
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderColor: 'rgb(221, 221, 221)',
              padding: 10,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                textTransform: 'capitalize',
                color: 'rgb(174, 174, 174)',
                fontSize: 14,
              }}>
              tshert monatsj
            </Text>
            <Text
              style={{
                // paddingLeft: 40,
                fontWeight: 'bold',
                fontSize: 14,
                color: 'rgb(157, 157, 157)',
              }}>
              $23456
            </Text>
          </View>
        </View>

        <Image
          style={{height: 360, marginTop: -20, width: 260}}
          source={require('../images/mostercard.png')}
        />
      </View>
    </View>
  );
};

export default PamentList;
