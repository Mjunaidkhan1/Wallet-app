import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import * as firebase from 'firebase';
import {useDispatch} from 'react-redux';
import {LoginAct} from '../actions/LoginAct';

function Signup({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const dispetch = useDispatch();

  // componentDidMount() {
  // const myitem = firebase.database().ref('users');
  // myitem.on('value', (datasnape) => {
  //   console.log(datasnape.val());
  // });
  // }

  const SingUP = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.replace('Login');
        const id = firebase.auth().currentUser.uid;
        const usrData = firebase.database().ref('users-data' + id);
        usrData.set({
          name: name,
          PhoneNumber: PhoneNumber,
        });
        setEmail('');
        setName('');
        setPassword('');
        setPhoneNumber('');
        Alert.alert('sign up sucsessfully');

        firebase
          .database()
          .ref('users-data' + id)
          .once('value')
          .then(function (datasnape) {
            const userName = datasnape.val().name;
            const userPhoneNumber = datasnape.val().PhoneNumber;
            dispetch(LoginAct({userName, userPhoneNumber}));
            // console.log(a, b, 'name');
            // console.log(datasnape.val());
          });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
    // const id = firebase.auth().currentUser.uid;
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="">
      <View style={{flex: 1}}>
        <ImageBackground
          imageStyle={{width: '100%', height: 420}}
          style={{
            backgroundColor: 'red',
          }}
          source={require('../images/SignupBg.png')}>
          <Entypo
            name="chevron-left"
            style={{paddingTop: 15, paddingLeft: 5}}
            color="rgb(254, 27, 97)"
            size={25}
            onPress={() => navigation.goBack()}
          />
          <Image
            style={{alignSelf: 'center', marginTop: 20, marginRight: 20}}
            source={require('../images/SignupLogo.png')}
          />
          <Text
            style={{
              alignSelf: 'center',
              color: 'white',
              fontSize: 50,
              fontWeight: 'bold',
              marginTop: -20,
            }}>
            Betake
          </Text>
        </ImageBackground>
        <View style={{flex: 3, justifyContent: 'flex-end'}}>
          <View
            style={{
              // marginTop: 20,
              backgroundColor: 'rgb(255, 255, 255)',
              // flex: 3,
              borderRadius: 20,
              padding: 10,
              // justifyContent: 'center',
              // backgroundColor: 'red',

              alignItems: 'center',
            }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'rgb(229, 236, 236)',
                width: '90%',
                // height: 50,
                // margin: 10,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                // backgroundColor: 'blue',
              }}>
              <Image
                style={{margin: 10, height: 25, width: 25}}
                source={require('../images/userName.png')}
              />
              <TextInput
                style={{
                  fontSize: 25,
                  width: 250,
                  // marginLeft: 10,
                  // backgroundColor: 'green',
                }}
                placeholder="Full Name"
                placeholderTextColor="black"
                onChangeText={(e) => setName(e)}
              />
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'rgb(229, 236, 236)',
                width: '90%',
                // height: 50,
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',

                // backgroundColor: 'blue',
              }}>
              <Image
                style={{margin: 10, height: 25, width: 25}}
                source={require('../images/email.png')}
              />
              <TextInput
                style={{
                  fontSize: 25,
                  width: 250,
                }}
                value={email}
                placeholder="Email"
                onChangeText={(e) => setEmail(e)}
                placeholderTextColor="black"
              />
            </View>

            <View
              style={{
                borderWidth: 1,
                borderColor: 'rgb(229, 236, 236)',
                width: '90%',
                // height: 50,
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',

                // backgroundColor: 'blue',
              }}>
              <Image
                style={{margin: 10, height: 25, width: 25}}
                source={require('../images/lock.png')}
              />
              <TextInput
                style={{
                  fontSize: 25,
                  width: 250,
                }}
                value={password}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(e) => setPassword(e)}
                placeholderTextColor="black"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  width: 70,
                  height: 50,
                  borderLeftWidth: 1,
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  borderColor: 'rgb(193, 195, 197)',
                }}>
                <Text style={{fontSize: 20}}>+41</Text>
                <Entypo name="chevron-down" size={15} style={{}} />
              </TouchableOpacity>
              <TextInput
                keyboardType="phone-pad"
                style={{
                  borderColor: 'rgb(82, 155, 223)',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  width: 235,

                  fontSize: 20,
                  borderWidth: 1,
                }}
                placeholder="Phone Number"
                onChangeText={(e) => setPhoneNumber(e)}
              />
            </View>

            {/* <View style={{justifyContent: 'flex-end', flex: 8}}> */}
            <LinearGradient
              colors={['rgb(33, 69, 105)', 'rgb(241, 30, 98)']}
              start={{x: 1.0, y: 0.0}}
              end={{x: 0.0, y: 1.0}}
              locations={[0.0, 5.2]}
              useAngle={true}
              angle={90}
              angleCenter={{x: 0.5, y: 0.5}}
              style={{
                // shadowColor: 'gray',
                shadowOpacity: 0.8,
                elevation: 2,
                marginTop: 10,
                width: '90%',
                borderRadius: 30,
              }}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  fontSize: 20,
                  padding: 15,
                  // backgroundColor: 'green',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
                onPress={() => SingUP(email, password)}>
                <Text
                  style={{
                    width: '60%',
                    textAlign: 'right',
                    fontSize: 20,
                    color: 'white',
                  }}>
                  Sign Up
                </Text>
                <Entypo
                  name="chevron-right"
                  style={{}}
                  color="white"
                  size={25}
                />
              </TouchableOpacity>
            </LinearGradient>
            <Text style={{borderBottomWidth: 1, fontSize: 20, color: 'gray'}}>
              I have an account already
            </Text>
          </View>
          {/* </View> */}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Signup;
