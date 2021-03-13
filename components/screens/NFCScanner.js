import React, {useEffect} from 'react';
import {Image, Text, View, Modal, TouchableOpacity} from 'react-native';
import NfcManager, {NfcEvents, NfcTech, Ndef} from 'react-native-nfc-manager';

function AppV2(props) {
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    NfcManager.start();
    NfcManager.setEventListener(NfcEvents.DiscoverTag, (tag) => {
      console.warn('tag', tag);
      NfcManager.setAlertMessageIOS('I got your tag!');
      NfcManager.unregisterTagEvent().catch(() => 0);
    });
  }, []);

  const cancel = () => {
    NfcManager.unregisterTagEvent().catch(() => 0);

    setVisible(false);
  };

  const _test = async () => {
    setVisible(true);
    let tag = null;
    try {
      await NfcManager.requestTechnology([NfcTech.Ndef]);

      tag = await NfcManager.getTag();
      tag.ndefStatus = await NfcManager.ndefHandler.getNdefStatus();
    } catch (ex) {
      console.warn(ex);
    }

    NfcManager.cancelTechnologyRequest().catch(() => 0);
    return tag;
  };

  return (
    <View
      style={{
        flex: 1,

        backgroundColor: 'rgb(205, 205, 205)',
      }}>
      <View
        style={{
          flex: 5,

          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <Image
          source={require('../images/nfcImg.png')}
          style={{width: 120, height: 120}}
          resizeMode="contain"
        />

        <TouchableOpacity
          style={{
            padding: 10,
            width: 200,
            margin: 20,
            borderWidth: 1,
            alignItems: 'center',
            borderColor: 'gray',
            borderRadius: 20,
          }}
          onPress={_test}>
          <Text>Scann NFC</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 5}}></View>
      <Modal transparent={true} visible={visible}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              height: 300,
              width: '90%',
              borderRadius: 20,
              marginBottom: 20,
            }}>
            <View style={{marginTop: 20, alignItems: 'center'}}>
              <Image
                source={require('../images/nfcImg.png')}
                style={{width: 120, height: 120, marginTop: 20}}
                resizeMode="contain"
              />

              <Text style={{marginTop: 20, fontSize: 20}}>
                Please tap your NFC tag
              </Text>

              <TouchableOpacity
                style={{
                  marginTop: 30,
                  alignItems: 'center',

                  width: '60%',
                  borderWidth: 1,
                  borderColor: 'gray',
                  borderRadius: 30,
                }}
                onPress={cancel}>
                <Text style={{padding: 10}}>CANCEL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
  // }
}

export default AppV2;
