import React from 'react';
import {View, Text, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';

const ChooseCard = () => {
  const {loginData} = useSelector((state) => state.LoginRed);
  // console.log(loginData, 'data');
  // console.log(loginData[0].userPhoneNumber, 'dat');
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          //   flex: 3,
          backgroundColor: 'rgb(244, 244, 244)',
          height: 180,
          width: '100%',
        }}>
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
              backgroundColor: 'rgba(234, 234, 234, 0.8)',
              width: '85%',
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
                  {loginData[0].userName}
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
                flexDirection: 'row',

                justifyContent: 'space-between',
                marginHorizontal: 20,
                marginBottom: 20,
              }}>
              <View
                style={{
                  width: '35%',
                  height: 50,
                  borderRadius: 15,
                  shadowColor: 'gray',
                  shadowOpacity: 5,
                  elevation: 3,
                  flexDirection: 'row',
                  padding: 5,
                  //   justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'rgb(183, 183, 183)'}}>Cradit Card</Text>
                <Entypo
                  name="chevron-down"
                  style={{}}
                  color="black"
                  size={20}
                />
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
                <Text style={{color: 'rgb(183, 183, 183)'}}>
                  Master Card **56
                </Text>
                <Entypo
                  name="chevron-down"
                  style={{}}
                  color="black"
                  size={20}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          //   backgroundColor: 'green',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            width: '60%',
            flexDirection: 'row',
            // backgroundColor: 'red',
            alignItems: 'center',
            // justifyContent: 'center',
          }}>
          <Text style={{fontSize: 20, color: 'rgb(197, 197, 197)'}}>
            Cradit Card Category
          </Text>
          <Entypo
            name="chevron-down"
            style={{}}
            color="rgb(139, 139, 139)"
            size={20}
          />
        </View>
        <EvilIcons
          name="close-o"
          style={{marginRight: 20}}
          color="rgb(139, 139, 139)"
          size={40}
        />
      </View>
      <View
        style={{
          //   width: '60%',
          flexDirection: 'row',
          //   backgroundColor: 'red',
          //   alignItems: 'center',
          justifyContent: 'space-around',
          //   marginHorizontal: 20,
        }}>
        <Entypo
          name="chevron-left"
          style={{}}
          color="rgb(139, 139, 139)"
          size={30}
        />
        <Text style={{fontSize: 30, color: 'rgb(147, 148, 149)'}}>
          Choose Your Card
        </Text>

        <Entypo
          name="chevron-right"
          style={{}}
          color="rgb(139, 139, 139)"
          size={30}
        />
      </View>
      <View
        style={{
          height: 170,
        }}>
        <Swiper
          style={
            {
              // height: 120,
            }
          }
          showsButtons={false}>
          <View
            style={{
              width: '100%',
              flex: 1,
              alignItems: 'center',
            }}>
            <Image
              style={{height: 120, width: 220}}
              source={require('../images/atmCard.png')}
            />
          </View>
          <View
            style={{
              width: '100%',
              flex: 1,
              alignItems: 'center',
            }}>
            <Image
              style={{height: 120, width: 220}}
              source={require('../images/ip.png')}
            />
          </View>
          <View
            style={{
              width: '100%',
              flex: 1,
              alignItems: 'center',
            }}>
            <Image
              style={{height: 120, width: 220}}
              source={require('../images/Lafc.png')}
            />
          </View>
        </Swiper>
      </View>
      <View
        style={{
          //   backgroundColor: 'green',
          alignItems: 'center',
          marginTop: -30,
        }}>
        <Text style={{fontSize: 20, color: 'rgb(197, 197, 197)'}}>
          Available Balance
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // backgroundColor: 'red',
            width: 170,
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              height: 15,
              width: 15,
              borderRadius: 10,
              backgroundColor: 'rgb(26, 205, 240)',
            }}></View>
          <Text style={{fontSize: 35, color: 'rgb(147, 148, 149)'}}>
            $ 1,234.00
          </Text>
        </View>
        {/* <View> */}
        <Text
          style={{marginTop: 20, fontSize: 20, color: 'rgb(147, 148, 149)'}}>
          History of Transection
        </Text>
        {/* </View> */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            marginTop: 2,
            // backgroundColor: 'red',
            justifyContent: 'center',
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            marginTop: 5,
            // backgroundColor: 'red',
            justifyContent: 'center',
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            marginTop: 5,
            // backgroundColor: 'red',
            justifyContent: 'center',
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            marginTop: 5,
            // backgroundColor: 'red',
            justifyContent: 'center',
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
            // marginBottom: 10,
            margin: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              // paddingLeft: 18,
              fontSize: 18,
              padding: 5,
              //   textTransform: 'capitalize',
              color: 'white',
            }}>
            Activate NFC
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
};

export default ChooseCard;
