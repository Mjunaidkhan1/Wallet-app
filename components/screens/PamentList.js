import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
          justifyContent: 'flex-end',
          height: 350,
        }}>
        <ImageBackground
          source={require('../images/loginImg.png')}
          imageStyle={{
            height: 350,
            width: '100%',
          }}
          style={{}}>
          <View
            style={{
              alignItems: 'center',

              justifyContent: 'flex-end',
              height: 300,
              marginTop: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                // backgroundColor: 'green',
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
            <Text>Payment amount</Text>
            <Text style={{fontSize: 40}}>$365.00</Text>
          </View>
        </ImageBackground>
      </View>
      <LinearGradient
        colors={['rgb(86, 248, 112)', 'rgb(101, 228, 225)']}
        start={{x: 0, y: 0}}
        end={{x: 0.0, y: 1}}
        locations={[0.0, 5.2]}
        useAngle={true}
        angle={45}
        angleCenter={{x: 0.8, y: 0.5}}
        style={{
          backgroundColor: 'green',
          alignSelf: 'center',
          //   padding: 10,
          width: 130,
          alignItems: 'center',
          //   marginTop: 10,
          borderRadius: 30,
          shadowColor: 'gray',
          shadowOpacity: 0.8,

          elevation: 2,
        }}>
        <TouchableOpacity>
          <Text style={{fontSize: 25, color: 'white'}}>Pay</Text>
        </TouchableOpacity>
      </LinearGradient>
      <View style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: 'rgb(221, 221, 221)',
            padding: 10,
          }}>
          <Text
            style={{textTransform: 'capitalize', color: 'rgb(174, 174, 174)'}}>
            tshert monatsj
          </Text>
          <Text
            style={{
              paddingLeft: 40,
              fontWeight: 'bold',
              fontSize: 16,
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
          }}>
          <Text
            style={{textTransform: 'capitalize', color: 'rgb(174, 174, 174)'}}>
            tshert monatsj
          </Text>
          <Text
            style={{
              paddingLeft: 40,
              fontWeight: 'bold',
              fontSize: 16,
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
          }}>
          <Text
            style={{textTransform: 'capitalize', color: 'rgb(174, 174, 174)'}}>
            tshert monatsj
          </Text>
          <Text
            style={{
              paddingLeft: 40,
              fontWeight: 'bold',
              fontSize: 16,
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
          }}>
          <Text
            style={{textTransform: 'capitalize', color: 'rgb(174, 174, 174)'}}>
            tshert monatsj
          </Text>
          <Text
            style={{
              paddingLeft: 40,
              fontWeight: 'bold',
              fontSize: 16,
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
          }}>
          <Text
            style={{textTransform: 'capitalize', color: 'rgb(174, 174, 174)'}}>
            tshert monatsj
          </Text>
          <Text
            style={{
              paddingLeft: 40,
              fontWeight: 'bold',
              fontSize: 16,
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
          }}>
          <Text
            style={{textTransform: 'capitalize', color: 'rgb(174, 174, 174)'}}>
            tshert monatsj
          </Text>
          <Text
            style={{
              paddingLeft: 40,
              fontWeight: 'bold',
              fontSize: 16,
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
          }}>
          <Text
            style={{textTransform: 'capitalize', color: 'rgb(174, 174, 174)'}}>
            tshert monatsj
          </Text>
          <Text
            style={{
              paddingLeft: 40,
              fontWeight: 'bold',
              fontSize: 16,
              color: 'rgb(157, 157, 157)',
            }}>
            $23456
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PamentList;
