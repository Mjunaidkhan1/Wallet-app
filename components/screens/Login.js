import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import * as firebase from 'firebase';
import {useDispatch} from 'react-redux';
import {LoginAct} from '../actions/LoginAct';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispetch = useDispatch();
  const signIn = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.replace('TabNavig');
        const id = firebase.auth().currentUser.uid;

        setEmail('');

        setPassword('');
        firebase
          .database()
          .ref('users-data' + id)
          .once('value')
          .then(function (datasnape) {
            const userName = datasnape.val().name;
            const userPhoneNumber = datasnape.val().PhoneNumber;
            dispetch(LoginAct({userName, userPhoneNumber}));
            console.log(userName, userPhoneNumber, 'name');
            console.log(datasnape.val());
          });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <ImageBackground
          source={require('../images/loginImg.png')}
          imageStyle={{width: '100%', height: 300}}
          style={{
            flex: 3,
            width: 500,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{marginRight: 20}}
            source={require('../images/SigninLogo.png')}
          />
        </ImageBackground>

        <View
          style={{
            backgroundColor: 'white',
            // marginBottom: 20,

            width: '90%',
            borderRadius: 20,
          }}>
          <View
            style={{
              backgroundColor: 'rgb(243, 243, 243)',
              alignSelf: 'flex-end',
              borderRadius: 20,
              margin: 10,
            }}>
            <Fontisto name="close-a" style={{padding: 10}} size={15} />
          </View>
          <Text style={{textAlign: 'center', fontSize: 30, color: 'gray'}}>
            Sing in
          </Text>
          <View style={{marginVertical: 10, marginHorizontal: 20}}>
            <Text
              style={{
                fontSize: 20,
                // fontWeight: 'bold',
                textTransform: 'uppercase',
                color: 'gray',
                marginTop: 20,
              }}>
              pro id
            </Text>
            <TextInput
              placeholder="Enter your bank ID"
              autoFocus={true}
              style={{borderBottomWidth: 1, borderColor: 'gray'}}
              onChangeText={(e) => setEmail(e)}
            />
            <Text
              style={{
                fontSize: 20,
                // fontWeight: 'bold',
                textTransform: 'uppercase',
                color: 'gray',
                marginTop: 20,
              }}>
              PASSWORD
            </Text>
            <TextInput
              placeholder="******"
              style={{borderBottomWidth: 1, borderColor: 'gray'}}
              onChangeText={(e) => setPassword(e)}
              secureTextEntry={true}
            />
          </View>
          <View
            style={{
              marginHorizontal: 20,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <View
              style={{
                height: 15,
                width: 15,
                borderWidth: 1,
                borderRadius: 20,
                borderColor: 'rgb(187, 189, 190)',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesome
                name="check"
                // style={{paddingTop: 5, paddingLeft: 5}}
                color="rgb(65, 212, 241)"
                size={10}
              />
            </View>
            <Text style={{paddingLeft: 20, color: 'rgb(187, 189, 190)'}}>
              Remember my ID for future logins
            </Text>
          </View>

          <View
            style={{
              marginHorizontal: 20,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <View
              style={{
                height: 15,
                width: 15,
                borderWidth: 1,
                borderRadius: 20,
                borderColor: 'rgb(187, 189, 190)',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesome
                name="check"
                // style={{paddingTop: 5, paddingLeft: 5}}
                color="rgb(65, 212, 241)"
                size={10}
              />
            </View>
            <Text style={{paddingLeft: 20, color: 'rgb(187, 189, 190)'}}>
              use fingerprint recognition next time
            </Text>
          </View>
          <LinearGradient
            colors={['rgb(31, 137, 177)', 'rgb(50, 242, 197)']}
            start={{x: 0.0, y: 0.0}}
            end={{x: 0.0, y: 1.0}}
            locations={[0.0, 5.2]}
            useAngle={true}
            angle={45}
            angleCenter={{x: 0.8, y: 0.5}}
            style={{
              margin: 20,

              borderRadius: 30,
              shadowColor: 'gray',
              shadowOpacity: 0.8,
              elevation: 2,
            }}>
            <TouchableOpacity
              style={{width: '100%', alignItems: 'center'}}
              onPress={() => navigation.navigate('TabNavig')}
              onPress={() => signIn(email, password)}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    paddingVertical: 10,
                    color: 'rgb(161, 223, 224)',
                  }}>
                  Sing in
                </Text>
                <Entypo
                  name="chevron-right"
                  style={{paddingTop: 5, paddingLeft: 5}}
                  color="white"
                  size={20}
                />
              </View>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
