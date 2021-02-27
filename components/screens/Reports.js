import React from 'react';
import {View, Text, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const reports = () => {
  return (
    <View style={{flex: 6, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',

          alignItems: 'center',

          marginTop: 20,
        }}>
        <View
          style={{
            backgroundColor: 'black',
            width: 30,
            marginLeft: 10,
            borderRadius: 8,
          }}>
          <Entypo
            name="chevron-left"
            style={{padding: 5, paddingLeft: 5}}
            color="white"
            size={20}
          />
        </View>
        <Text style={{textAlign: 'center', flex: 1, fontSize: 20}}>
          Weekly report
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          marginTop: 30,
          height: 300,
          width: '100%',
          // borderBottomRightRadius: 20,
          // borderBottomLeftRadius: 20,
          // alignItems: 'center',
        }}>
        <Image
          style={{height: '70%', alignSelf: 'center', width: '80%'}}
          source={require('../images/Report.png')}
        />
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'row',
              margin: 10,
              marginTop: 30,
              paddingLeft: 20,
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: 'red',
                borderRadius: 5,
                width: 20,
                height: 20,
              }}></View>
            <Text style={{paddingLeft: 10, textTransform: 'capitalize'}}>
              expenses
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              margin: 10,
              marginTop: 20,
              paddingLeft: 20,
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: 'black',
                borderRadius: 5,
                width: 20,
                height: 20,
              }}></View>
            <Text style={{paddingLeft: 10, textTransform: 'capitalize'}}>
              deposite
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 5,
          backgroundColor: 'rgb(196, 196, 196)',
        }}>
        <View style={{paddingHorizontal: 20, paddingTop: 10}}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                width: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <AntDesign
                name="delete"
                style={{padding: 10}}
                color="black"
                size={25}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                // backgroundColor: 'green',
                width: '85%',
              }}>
              <View style={{paddingLeft: 10}}>
                <Text>Movie</Text>
                <Text style={{fontSize: 18}}>Spend on fun mall cenima</Text>
                <Text>02- Monday</Text>
              </View>
              <Text style={{fontSize: 18}}>$33.02</Text>
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, paddingTop: 10}}>
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'center',
              // alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                width: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Entypo
                name="cup"
                style={{padding: 10}}
                color="black"
                size={25}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                // backgroundColor: 'green',
                width: '85%',
              }}>
              <View style={{paddingLeft: 10}}>
                <Text>Movie</Text>
                <Text style={{fontSize: 18}}>Spend on starbuks</Text>
                <Text>02- Monday</Text>
              </View>
              <Text style={{fontSize: 18}}>$33.02</Text>
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, paddingTop: 10}}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                width: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <FontAwesome
                name="square"
                style={{padding: 10}}
                color="black"
                size={25}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                // backgroundColor: 'green',
                width: '85%',
              }}>
              <View style={{paddingLeft: 10}}>
                <Text>Movie</Text>
                <Text style={{fontSize: 18}}>Spend on suppor marki</Text>
                <Text>02- Monday</Text>
              </View>
              <Text style={{fontSize: 18}}>$33.02</Text>
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, paddingTop: 10}}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                width: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <FontAwesome
                name="square"
                style={{padding: 10}}
                color="black"
                size={25}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                // backgroundColor: 'green',
                width: '85%',
              }}>
              <View style={{paddingLeft: 10}}>
                <Text>Movie</Text>
                <Text style={{fontSize: 18}}>Spend on suppor marki</Text>
                <Text>02- Monday</Text>
              </View>
              <Text style={{fontSize: 18}}>$33.02</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default reports;
