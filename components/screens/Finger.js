import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {
  Alert,
  Image,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes,
  Platform,
} from 'react-native';

import FingerprintScanner from 'react-native-fingerprint-scanner';
// import styles from './FingerprintPopup.component.styles';
// import ShakingText from './ShakingText.component';

// - this example component supports both the
//   legacy device-specific (Android < v23) and
//   current (Android >= 23) biometric APIs
// - your lib and implementation may not need both
class Finger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessageLegacy: undefined,
      biometricLegacy: undefined,
    };

    this.description = null;
  }

  componentDidMount() {
    if (this.requiresLegacyAuthentication()) {
      //   this.authLegacy();
    } else {
      this.authCurrent();
    }
  }

  componentWillUnmount = () => {
    FingerprintScanner.release();
  };

  requiresLegacyAuthentication() {
    return Platform.Version < 23;
  }

  authCurrent() {
    FingerprintScanner.authenticate({title: 'Log in with Biometrics'}).then(
      () => {
        this.props.onAuthenticate();
      },
    );
  }

  authLegacy() {
    FingerprintScanner.authenticate({
      onAttempt: this.handleAuthenticationAttemptedLegacy,
    })
      .then(() => {
        this.props.handlePopupDismissedLegacy();
        Alert.alert('Fingerprint Authentication', 'Authenticated successfully');
      })
      .catch((error) => {
        this.setState({
          errorMessageLegacy: error.message,
          biometricLegacy: error.biometric,
        });
        this.description.shake();
      });
  }

  //   handleAuthenticationAttemptedLegacy = (error) => {
  //     this.setState({errorMessageLegacy: error.message});
  //     this.description.shake();
  //   };

  //   renderLegacy() {
  //     const {errorMessageLegacy, biometricLegacy} = this.state;
  //     const {style, handlePopupDismissedLegacy} = this.props;

  //     return (
  //       //   <View style={{flex: 1, backgroundColor: 'green'}}>
  //       <View style={{flex: 1, backgroundColor: 'green'}}>
  //         <Image style={{}} source={require('../images/s.png')} />

  //         <Text style={{}}>Biometric{'\n'}Authentication</Text>

  //         <TouchableOpacity style={{}} onPress={handlePopupDismissedLegacy}>
  //           <Text style={{}}>BACK TO MAIN</Text>
  //         </TouchableOpacity>
  //       </View>
  //     );
  //   }

  render = () => {
    // if (this.requiresLegacyAuthentication()) {
    return <Text>jjj</Text>;
    // }

    // current API UI provided by native BiometricPrompt
    // return null;
  };
}

// BiometricPopup.propTypes = {
//   onAuthenticate: PropTypes.func.isRequired,
//   handlePopupDismissedLegacy: PropTypes.func,
//   style: ViewPropTypes.style,
// };

export default Finger;
