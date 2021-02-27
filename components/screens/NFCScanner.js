import React from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';

class NFCScanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      supported: false,
    };
  }
  componentDidMount() {
    // console.log('props scanpage');
    // await NfcManager.start();
    NfcManager.isSupported().then((supported) => {
      console.log(supported, 'sss');
      this.setState({supported});
      if (supported) {
        this._startNfc();
      }
    });
  }

  _startNfc() {
    NfcManager.start({
      onSessionClosedAndroid: () => {
        console.log('ios session closed');
      },
    })
      .then((result) => {
        console.log(result, 'result');
        this.setState({nfcSupport: true});
      })
      .catch((err) => {
        this.setState({nfcSupport: false});
      });
    if (Platform.OS === 'android') {
      NfcManager.registerTagEvent(
        (tag) => {
          console.log('Tag Discovered', tag);
        },
        'Hold your device over the tag',
        true,
      );
      NfcManager.isEnabled()
        .then((enabled) => {
          console.log(enabled, 'enabled');
          this.setState({
            nfcSupport: enabled ? true : false,
            nfcAllow: enabled ? true : false,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    return (
      <View style={{padding: 20}}>
        <Text>NFC Demo</Text>
        <TouchableOpacity
          style={{
            padding: 10,
            width: 200,
            margin: 20,
            borderWidth: 1,
            borderColor: 'black',
          }}
          onPress={this._test}>
          <Text>Test</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 10,
            width: 200,
            margin: 20,
            borderWidth: 1,
            borderColor: 'black',
          }}
          onPress={this._cancel}>
          <Text>Cancel Test</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _cancel = () => {
    NfcManager.unregisterTagEvent().catch(() => 0);
  };

  _test = async () => {
    try {
      await NfcManager.registerTagEvent();
    } catch (ex) {
      console.warn('ex', ex);
      NfcManager.unregisterTagEvent().catch(() => 0);
    }
  };
}

export default NFCScanner;
