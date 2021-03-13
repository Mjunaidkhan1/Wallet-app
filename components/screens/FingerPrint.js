import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  DeviceEventEmitter,
  Alert,
  NativeModules,
} from 'react-native';

export default class FingerPrint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Scane your Fingerprin',
    };
  }
  componentDidMount() {
    DeviceEventEmitter.addListener(
      'FINGERPRINT_SCANNER_AUTHENTICATION',
      (msg) => {
        this.setState({status: msg});
      },
    );
    this.scan().then((succes) =>
      succes
        ? this.setState({status: 'authentication succes'})
        : console.log(succes),
    );
  }

  async scan() {
    return await NativeModules.ReactNativeFingerprintScanner.authenticate(
      'j',
      'k',
      'l',
      'm',
    );
  }
  render() {
    return (
      <View
        style={{
          flex: 1,

          backgroundColor: 'rgb(244, 244, 244)',
        }}>
        <ImageBackground
          source={require('../images/loginImg.png')}
          imageStyle={{
            height: 350,

            width: '100%',
            backgroundColor: 'white',
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}
          style={{}}>
          <View
            style={{
              alignItems: 'center',

              justifyContent: 'flex-end',
              height: 470,
            }}>
            <Image style={{}} source={require('../images/Finger.png')} />
          </View>
        </ImageBackground>
        <View style={{alignItems: 'center'}}>
          <Text>{this.state.status}</Text>
        </View>
      </View>
    );
  }
}
