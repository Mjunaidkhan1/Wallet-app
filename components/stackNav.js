import React from 'react';
import FingerPrint from './screens/FingerPrint';
import Login from './screens/Login';
import Reports from './screens/Reports';
import Splash from './screens/Splash';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import PamentList from './screens/PamentList';
// import ScaneImage from './components/screens/ScaneImage';
import Recipt from './screens/Recipt';
import PamentHistory from './screens/PamentHistory';
import ForgotPassword from './screens/ForgotPassword';
import CraditCardPin from './screens/CraditCardPin';
import QRCode from './screens/QRCode';
import WeeklyReport from './screens/WeeklyReport';
import SearchCard from './screens/SearchCard';
import NFCCard from './screens/NFCCard';
import PickedCard from './screens/PickedCard';
import Signup from './screens/Signup';
import ChooseCard from './screens/ChooseCard';
import WeeklyReportt from './screens/WeeklyReportt';
import {createStackNavigator} from '@react-navigation/stack';
import NFCScanner from './screens/NFCScanner';

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
      {/* <Tab.Screen name="a" component={FingerPrint} /> */}
      {/* <Tab.Screen name="b" component={Login} /> */}
      <Tab.Screen name="o" component={ChooseCard} />
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
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
const Stack = createStackNavigator();
const StackNav = () => {
  return (
    // <Login />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="e"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CraditCardPin"
        component={CraditCardPin}
        options={{
          headerShown: false,
        }}
      /> */}
        <Stack.Screen
          name="TabNavig"
          component={TabNavig}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
