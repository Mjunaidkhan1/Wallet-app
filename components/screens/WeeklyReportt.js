import React, {useState} from 'react';
import {View, Text, Image, Alert, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Slider from 'react-native-slider';
import LinearGradient from 'react-native-linear-gradient';
import {color} from 'react-native-reanimated';

const WeeklyReportt = () => {
  const [value, setValue] = useState();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgb(244, 244, 244)',
      }}>
      <View
        style={{
          width: '100%',

          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: 80,
            height: 60,
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
              fontSize: 20,
              textTransform: 'uppercase',
              color: 'white',
            }}>
            dashboard
          </Text>
          <Text
            style={{
              fontSize: 18,
              letterSpacing: 1.5,
              //   alignSelf: 'center',
              //   marginRight: 40,
              //   paddingTop: 20,
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
      <Text
        style={{
          fontSize: 25,
          textTransform: 'uppercase',
          color: 'rgb(0, 122, 204)',
          marginTop: 10,
        }}>
        funds tranfer
      </Text>
      <MaterialIcons
        name="segment"
        style={{
          marginTop: -40,
          alignSelf: 'flex-end',
          marginRight: 20,
        }}
        color="white"
        size={30}
      />

      <View
        style={{
          borderRadius: 20,
          backgroundColor: 'white',
          width: '85%',
          //   height: 130,
          marginTop: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            marginTop: 10,
            justifyContent: 'space-around',
          }}>
          <Image
            style={{
              height: 60,
              width: 60,
            }}
            source={require('../images/profileImg.png')}
          />
          <View style={{marginTop: 5}}>
            <Text
              style={{
                fontSize: 20,
                color: 'rgb(154, 154, 155)',
              }}>
              SENDER
            </Text>
            <Text
              style={{
                textTransform: 'capitalize',
                fontWeight: 'bold',
                color: 'rgb(112, 114, 115)',
              }}>
              zidane petrick doe!
            </Text>
          </View>
          <View
            style={{
              width: '35%',
              height: 50,
              borderRadius: 25,
              shadowColor: 'gray',
              shadowOpacity: 5,
              elevation: 3,
              flexDirection: 'row',
              //   padding: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <Text style={{color: 'rgb(183, 183, 183)'}}>Manage</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'rgb(254, 27, 97)',
            height: 20,
            borderRadius: 10,
            marginRight: 20,
            // marginTop: -10,
            width: 20,
            alignSelf: 'flex-end',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Entypo name="check" style={{}} color="white" size={15} />
        </View>
        <View
          style={{
            flexDirection: 'row',

            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginBottom: 10,
            marginTop: -10,
          }}>
          <View
            style={{
              width: '35%',
              height: 50,
              borderRadius: 25,
              shadowColor: 'gray',
              shadowOpacity: 5,
              elevation: 3,
              flexDirection: 'row',
              padding: 15,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image
              style={{height: 25, width: 25, borderRadius: 15}}
              source={require('../images/flag.png')}
            />
            <Text style={{color: 'rgb(183, 183, 183)', marginRight: 10}}>
              USD
            </Text>
            {/* <Entypo name="chevron-down" style={{}} color="black" size={20} /> */}
          </View>
          <View
            style={{
              width: '65%',
              height: 50,
              borderRadius: 30,
              shadowColor: 'gray',
              shadowOpacity: 5,
              elevation: 3,
              flexDirection: 'row',
              padding: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image
              style={{height: 25, width: 30}}
              source={require('../images/Mastercard-logo.png')}
            />
            <Text style={{color: 'rgb(183, 183, 183)'}}>Master Card **56</Text>
            <Entypo name="chevron-down" style={{}} color="black" size={20} />
          </View>
        </View>
      </View>
      <View
        style={{
          height: 140,
          flexDirection: 'row',

          width: '100%',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            borderColor: 'rgb(197, 242, 251)',
            borderWidth: 2,
            backgroundColor: 'white',
            // alignSelf: 'flex-end',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'rgb(177, 180, 182)',
            }}>
            AMOUNT
          </Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'red'}}>
            $ 500.00
          </Text>
        </View>
        <View style={{height: 110}}>
          <Text
            style={{
              alignSelf: 'flex-end',
              fontSize: 18,
              color: 'rgb(206, 208, 209)',
            }}>
            Money Limit
          </Text>
          <Text
            style={{
              alignSelf: 'flex-end',
              fontSize: 25,
              color: 'rgb(206, 208, 209)',
            }}>
            $ 1,500.00
          </Text>
          <Slider
            thumbStyle={{
              backgroundColor: 'white',
              height: 20,
              borderWidth: 2,
              borderColor: 'rgb(83, 162, 200)',
            }}
            // maximumTrackTintColor="rgb(174, 177, 179)"
            minimumTrackTintColor="rgb(0, 122, 204)"
            // thumbTintColor="blue"
            style={{
              height: 30,
              width: 180,
              marginLeft: 10,
            }}
            value={value}
            onValueChange={(e) => setValue(e)}
          />
        </View>
      </View>

      <View
        style={{
          borderRadius: 20,
          backgroundColor: 'white',
          width: '85%',
          //   height: 130,
          marginTop: 10,
          // backgroundColor: 'green',
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            marginTop: 10,
            justifyContent: 'space-around',
          }}>
          <Image
            style={{
              //   marginLeft: 10,
              height: 60,
              width: 60,
            }}
            source={require('../images/profileImg.png')}
          />
          <View style={{marginTop: 5}}>
            <Text
              style={{
                // textTransform: 'capitalize',
                fontSize: 20,
                color: 'rgb(154, 154, 155)',
                textTransform: 'uppercase',
              }}>
              recepient
            </Text>
            <Text
              style={{
                textTransform: 'capitalize',
                fontWeight: 'bold',
                color: 'rgb(112, 114, 115)',
              }}>
              ana jane roe
            </Text>
          </View>
          <View
            style={{
              width: '35%',
              height: 50,
              borderRadius: 25,
              shadowColor: 'gray',
              shadowOpacity: 5,
              elevation: 3,
              flexDirection: 'row',
              //   padding: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <Text style={{color: 'rgb(183, 183, 183)'}}>Manage</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginBottom: 10,
          }}>
          <View
            style={{
              width: '35%',
              height: 40,
              borderRadius: 25,
              shadowColor: 'gray',
              shadowOpacity: 5,
              elevation: 3,
              flexDirection: 'row',
              padding: 15,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image
              style={{height: 25, width: 25, marginTop: 5, borderRadius: 15}}
              source={require('../images/flag.png')}
            />
            <Text style={{color: 'rgb(183, 183, 183)', marginRight: 10}}>
              EUR
            </Text>
          </View>
          <LinearGradient
            colors={['rgb(235, 85, 85)', 'rgb(253, 145, 75)']}
            start={{x: 0.0, y: 0.0}}
            end={{x: 0.0, y: 1.0}}
            locations={[0.0, 5.2]}
            useAngle={true}
            angle={45}
            angleCenter={{x: 0.5, y: 0.5}}
            style={{
              // marginTop: 10,
              width: '65%',
              height: 40,
              borderRadius: 30,
              shadowColor: 'gray',
              shadowOpacity: 0.8,
              elevation: 2,
            }}>
            <TouchableOpacity
              style={{
                padding: 10,
                alignItems: 'center',
              }}
              onPress={() => Alert.alert('kk')}>
              <Text style={{color: 'white'}}>Transfer</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          width: '85%',
          marginTop: 10,
          paddingBottom: 10,
          borderRadius: 20,
        }}>
        <Text style={{fontSize: 20, margin: 10, color: 'rgb(147, 148, 149)'}}>
          History of Transection
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // marginTop: 2,
            justifyContent: 'center',
          }}>
          <Image
            style={{
              height: 40,
              width: 40,
            }}
            source={require('../images/profileImg.png')}
          />

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
            <Text style={{paddingLeft: 15, color: 'rgb(147, 147, 147)'}}>
              RAV KAV - online
            </Text>
            <Text style={{paddingLeft: 25, color: 'rgb(147, 147, 147)'}}>
              $29.876
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // marginTop: 2,
            justifyContent: 'space-around',
          }}>
          <Image
            style={{
              height: 40,
              width: 40,
            }}
            source={require('../images/profileImg.png')}
          />

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
            <Text style={{paddingLeft: 15, color: 'rgb(147, 147, 147)'}}>
              RAV KAV - online
            </Text>
            <Text style={{paddingLeft: 25, color: 'rgb(147, 147, 147)'}}>
              $29.876
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WeeklyReportt;
