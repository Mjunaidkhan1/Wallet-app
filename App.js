import React from 'react';
import {View, Text} from 'react-native';
import FingerPrint from './components/screens/FingerPrint';
import Login from './components/screens/Login';
import Reports from './components/screens/Reports';
import Splash from './components/screens/Splash';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import PamentList from './components/screens/PamentList';
// import ScaneImage from './components/screens/ScaneImage';
import Recipt from './components/screens/Recipt';
import PamentHistory from './components/screens/PamentHistory';
import ForgotPassword from './components/screens/ForgotPassword';
import CraditCardPin from './components/screens/CraditCardPin';
import QRCode from './components/screens/QRCode';
import WeeklyReport from './components/screens/WeeklyReport';
import SearchCard from './components/screens/SearchCard';
import NFCCard from './components/screens/NFCCard';
import PickedCard from './components/screens/PickedCard';
import Signup from './components/screens/Signup';
import ChooseCard from './components/screens/ChooseCard';
import WeeklyReportt from './components/screens/WeeklyReportt';
import {createStackNavigator} from '@react-navigation/stack';
import NFCScanner from './components/screens/NFCScanner';

const Tab = createBottomTabNavigator();

function TabNavig() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 18,
          // backgroundColor: 'green',
          flex: 1,
          marginTop: 10,
          padding: 0,
        },
      }}>
      <Tab.Screen name="a" component={FingerPrint} />
      {/* <Tab.Screen name="b" component={Login} /> */}
      <Tab.Screen name="c" component={Reports} />
      <Tab.Screen name="d" component={Recipt} />
      {/* <Tab.Screen name="e" component={Splash} /> */}
      <Tab.Screen name="f" component={PamentHistory} />
      <Tab.Screen name="g" component={PamentList} />
      {/* <Tab.Screen name="h" component={ForgotPassword} /> */}
      {/* <Tab.Screen name="i" component={CraditCardPin} /> */}
      <Tab.Screen name="j" component={QRCode} />
      <Tab.Screen name="k" component={WeeklyReport} />
      <Tab.Screen name="l" component={SearchCard} />
      <Tab.Screen name="m" component={NFCCard} />
      <Tab.Screen name="n" component={PickedCard} />
      <Tab.Screen name="o" component={ChooseCard} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
const Stack = createStackNavigator();
export default function App() {
  return (
    <NFCScanner />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="e"
    //       component={Splash}
    //       options={{
    //         headerShown: false,
    //       }}
    //     />
    //     <Stack.Screen
    //       name="Login"
    //       component={Login}
    //       options={{
    //         headerShown: false,
    //       }}
    //     />
    //     <Stack.Screen
    //       name="Signup"
    //       component={Signup}
    //       options={{
    //         headerShown: false,
    //       }}
    //     />
    //     <Stack.Screen
    //       name="ForgotPassword"
    //       component={ForgotPassword}
    //       options={{
    //         headerShown: false,
    //       }}
    //     />
    //     <Stack.Screen
    //       name="CraditCardPin"
    //       component={CraditCardPin}
    //       options={{
    //         headerShown: false,
    //       }}
    //     />
    //     <Stack.Screen
    //       name="TabNavig"
    //       component={TabNavig}
    //       options={{
    //         headerShown: false,
    //       }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
