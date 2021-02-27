import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Recipt = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'rgb(216, 216, 216)'}}>
      <LinearGradient
        colors={['rgb(244, 27, 96)', 'rgb(119, 15, 69)']}
        start={{x: 1.0, y: 0.0}}
        end={{x: 0.0, y: 1.0}}
        locations={[0.0, 5.2]}
        useAngle={true}
        angle={45}
        angleCenter={{x: 0.8, y: 0.5}}
        style={{
          flex: 6,
          shadowColor: 'gray',
          shadowOpacity: 0.8,

          elevation: 2,
        }}>
        <Text
          style={{
            paddingTop: 10,
            alignSelf: 'center',
            color: 'white',
            fontSize: 20,
          }}>
          Receipt
        </Text>
        <Feather
          name="more-horizontal"
          style={{
            marginRight: 10,
            alignSelf: 'flex-end',
            color: 'white',
            fontSize: 20,
          }}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderTopLeftRadius: 10,
            borderTopEndRadius: 10,
          }}>
          <Entypo
            name="chevron-left"
            size={20}
            color="rgb(240, 26, 95)"
            style={{marginLeft: 10}}
          />
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              27/7/2020 5:30:20
            </Text>
            <View
              style={{
                height: 3,
                width: 130,
                backgroundColor: 'gray',
                borderRadius: 5,
              }}
            />
          </View>
          <View style={{width: 150, marginTop: 10, alignItems: 'flex-end'}}>
            <Text style={{fontSize: 18, color: 'rgb(147, 147, 147)'}}>
              ORDER 102
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
            <View
              style={{
                backgroundColor: 'rgb(228, 228, 228)',
                width: 30,
                height: 30,
                marginLeft: 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Text style={{fontWeight: 'bold'}}>zara</Text>
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
                zara mail sof..
              </Text>
              <Text style={{paddingLeft: 30, color: 'rgb(147, 147, 147)'}}>
                $29.876
              </Text>
            </View>
          </View>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
            <View
              style={{
                backgroundColor: 'rgb(228, 228, 228)',
                width: 30,
                height: 30,
                marginLeft: 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Text style={{fontWeight: 'bold', color: 'rgb(209, 23, 88)'}}>
                zara
              </Text>
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
                zara mail sof..
              </Text>
              <Text style={{paddingLeft: 30, color: 'rgb(147, 147, 147)'}}>
                $29.876
              </Text>
            </View>
          </View>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
            <View
              style={{
                backgroundColor: 'rgb(228, 228, 228)',
                width: 30,
                height: 30,
                marginLeft: 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Text style={{fontWeight: 'bold', color: 'rgb(209, 23, 88)'}}>
                zara
              </Text>
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
                zara mail sof..
              </Text>
              <Text style={{paddingLeft: 30, color: 'rgb(147, 147, 147)'}}>
                $29.876
              </Text>
            </View>
          </View>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
            <View
              style={{
                backgroundColor: 'rgb(228, 228, 228)',
                width: 30,
                height: 30,
                marginLeft: 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Text style={{fontWeight: 'bold', color: 'rgb(209, 23, 88)'}}>
                zara
              </Text>
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
                zara mail sof..
              </Text>
              <Text style={{paddingLeft: 30, color: 'rgb(147, 147, 147)'}}>
                $29.876
              </Text>
            </View>
          </View>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
            <View
              style={{
                backgroundColor: 'rgb(228, 228, 228)',
                width: 30,
                height: 30,
                marginLeft: 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Text style={{fontWeight: 'bold', color: 'rgb(209, 23, 88)'}}>
                zara
              </Text>
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
                zara mail sof..
              </Text>
              <Text style={{paddingLeft: 30, color: 'rgb(147, 147, 147)'}}>
                $29.876
              </Text>
            </View>
          </View>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
            <View
              style={{
                backgroundColor: 'rgb(228, 228, 228)',
                width: 30,
                height: 30,
                marginLeft: 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Text style={{fontWeight: 'bold', color: 'rgb(209, 23, 88)'}}>
                zara
              </Text>
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
                zara mail sof..
              </Text>
              <Text style={{paddingLeft: 30, color: 'rgb(147, 147, 147)'}}>
                $29.876
              </Text>
            </View>
          </View>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
            <View
              style={{
                backgroundColor: 'rgb(228, 228, 228)',
                width: 30,
                height: 30,
                marginLeft: 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Text style={{fontWeight: 'bold', color: 'rgb(209, 23, 88)'}}>
                zara
              </Text>
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
                zara mail sof..
              </Text>
              <Text style={{paddingLeft: 30, color: 'rgb(147, 147, 147)'}}>
                $29.876
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
      <View
        style={{
          flex: 2,
          alignItems: 'flex-end',
          justifyContent: 'center',
          marginRight: 30,
        }}>
        <View
          style={{
            backgroundColor: 'rgb(247, 147, 26)',
            width: 50,
            height: 50,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: 'gray',
            shadowOpacity: 2,
            elevation: 7,
          }}>
          <FontAwesome name="square" size={15} color="white" />
        </View>
      </View>
    </View>
  );
};

export default Recipt;
