import React from 'react';
import {View, Text, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const WeeklyReport = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          width: '100%',
          //   backgroundColor: 'green',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: 80,
            height: 60,
            // backgroundColor: 'gray',
          }}>
          <Entypo
            name="chevron-left"
            style={{paddingTop: 15, paddingLeft: 5}}
            color="rgb(254, 27, 97)"
            size={25}
          />
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 8,
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'flex-end',
              marginTop: 20,
            }}>
            <Entypo name="chevron-left" style={{}} color="white" size={20} />
          </View>
        </View>
        <View style={{marginTop: 10, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 18,
              letterSpacing: 1.5,
              //   alignSelf: 'center',
              //   marginRight: 40,
              paddingTop: 20,
            }}>
            Weekly report
          </Text>
        </View>
        <View
          style={{
            // backgroundColor: 'red',
            height: 50,
            width: 90,
            // justifyContent: 'space-between',
          }}>
          <MaterialIcons
            name="segment"
            style={{
              marginTop: 10,
              alignSelf: 'flex-end',
              marginRight: 10,
              // backgroundColor: 'red',
            }}
            color="rgb(253, 69, 126)"
            size={30}
          />
          <Image
            style={{height: 60, marginTop: -10, width: 60}}
            source={require('../images/s.png')}
          />
        </View>
      </View>

      <View
        style={{
          width: '90%',
          marginTop: 20,
          borderRadius: 30,
          //   zIndex: -1,
          backgroundColor: 'rgb(235, 235, 235)',
          alignItems: 'center',
          paddingBottom: 20,
        }}>
        <Image
          style={{
            marginTop: -45,

            height: 100,
            width: 100,
          }}
          source={require('../images/profileImg.png')}
        />
        <Text
          style={{
            textTransform: 'capitalize',
            fontSize: 30,
            color: 'rgb(154, 154, 155)',
          }}>
          Hello zidane doe!
        </Text>
        <Text
          style={{textTransform: 'capitalize', color: 'rgb(208, 209, 209)'}}>
          last login10:33AM 28:09:17
        </Text>
      </View>
      <LinearGradient
        colors={['rgb(23, 236, 183)', 'rgb(15, 133, 134)']}
        start={{x: 0.1, y: 0.3}}
        end={{x: 0.1, y: 0.2}}
        locations={[0.0, 0.4]}
        useAngle={true}
        angle={180}
        angleCenter={{x: 1.0, y: 1.0}}
        style={{
          marginTop: 20,
          width: '90%',
          //   height: 180,
          borderRadius: 30,
          shadowColor: 'gray',
          shadowOpacity: 0.8,
          elevation: 2,
          alignItems: 'center',
          padding: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            textTransform: 'capitalize',
            color: 'rgb(144, 124, 136)',
          }}>
          bank accounts
        </Text>
        <Text
          style={{
            fontSize: 20,
            textTransform: 'capitalize',
            color: 'white',
          }}>
          3 active cards
        </Text>
        <View
          style={{
            backgroundColor: 'rgb(28, 165, 165)',
            height: 1,
            width: 280,
            margin: 10,
          }}></View>
        <Text
          style={{
            fontSize: 18,
            textTransform: 'capitalize',
            color: 'rgb(140, 205, 221)',
          }}>
          cards balance
        </Text>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'blue',
            width: 160,
            justifyContent: 'space-around',
            marginRight: 10,
          }}>
          <View
            style={{
              backgroundColor: 'rgb(26, 205, 240)',
              height: 10,
              borderRadius: 5,
              width: 10,
              //   margin: 10,
              alignSelf: 'center',
            }}></View>
          <Text
            style={{
              fontSize: 30,
              textTransform: 'capitalize',
              color: 'rgb(140, 205, 221)',
              marginRight: 10,
            }}>
            $ 6,786.99
          </Text>
        </View>
      </LinearGradient>
      <View
        style={{
          backgroundColor: 'rgb(243, 243, 243)',
          flex: 3,
          height: 100,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          width: '100%',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            // flexDirection: 'row',
            backgroundColor: 'white',
            width: '90%',
            // height: 100,
            borderRadius: 20,
            // justifyContent: 'space-between',
            // marginTop: 20,
            alignItems: 'center',
            padding: 10,
          }}>
          <Text
            style={{
              margin: 10,
              color: 'rgb(154, 155, 156)',
              fontSize: 18,
              textTransform: 'capitalize',
            }}>
            scanned cards
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              // backgroundColor: 'green',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Image
              style={{height: 50, marginTop: 20, width: 80, borderRadius: 5}}
              source={require('../images/Lafc.png')}
            />
            <Image
              style={{height: 50, marginTop: 20, width: 80, borderRadius: 5}}
              source={require('../images/ip.png')}
            />
          </View>
          <Text
            style={{
              margin: 15,
              fontSize: 18,
              textTransform: 'capitalize',
              color: 'rgb(154, 155, 156)',
            }}>
            recent activity
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              marginTop: 2,
              // backgroundColor: 'green',
            }}>
            <View
              style={{
                backgroundColor: 'rgb(97, 52, 141)',
                width: 30,
                height: 30,
                // marginLeft: 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Text style={{fontWeight: 'bold', color: 'white'}}>zara</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                paddingBottom: 5,
                borderColor: 'rgb(228, 228, 228)',
              }}>
              <Text style={{paddingLeft: 10, color: 'rgb(147, 147, 147)'}}>
                29 sep 77
              </Text>
              <Text style={{paddingLeft: 20, color: 'rgb(147, 147, 147)'}}>
                RAV KAV - online
              </Text>
              <Text style={{paddingLeft: 30, color: 'rgb(147, 147, 147)'}}>
                $29.876
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              marginTop: 2,
              // backgroundColor: 'green',
            }}>
            <View
              style={{
                backgroundColor: 'rgb(97, 52, 141)',
                width: 30,
                height: 30,
                // marginLeft: 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Image
                style={{
                  height: 40,
                  width: 40,
                }}
                source={require('../images/profileImg.png')}
              />
              {/* <Text style={{fontWeight: 'bold', color: 'white'}}>zara</Text> */}
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                paddingBottom: 5,
                borderColor: 'rgb(228, 228, 228)',
              }}>
              <Text style={{paddingLeft: 10, color: 'rgb(147, 147, 147)'}}>
                29 sep 77
              </Text>
              <Text style={{paddingLeft: 20, color: 'rgb(147, 147, 147)'}}>
                RAV KAV - online
              </Text>
              <Text style={{paddingLeft: 30, color: 'rgb(147, 147, 147)'}}>
                $29.876
              </Text>
            </View>
          </View>
        </View>
        <LinearGradient
          colors={['rgb(85, 164, 193)', 'rgb(99, 243, 209)']}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.9, y: 0.9}}
          locations={[0.1, 0.5]}
          useAngle={true}
          angle={45}
          angleCenter={{x: 1.0, y: 1.0}}
          style={{
            width: 270,
            // height: 30,
            borderRadius: 15,
            marginBottom: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              // paddingLeft: 18,
              fontSize: 18,
              padding: 5,
              textTransform: 'capitalize',
              color: 'white',
            }}>
            view all
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
};

export default WeeklyReport;
