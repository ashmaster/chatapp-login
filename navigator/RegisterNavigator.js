import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import EnterNumberScreen from '../screens/Register/EnterNumberScreen';
import EnterCodeScreen from '../screens/Register/EnterCodeScreen';
import ProfileScreen from '../screens/Register/ProfileScreen';
import ProfessionScreen from '../screens/Register/ProfessionScreen';
import StudentRegistrationScreen from '../screens/Register/StudentRegistrationScreen';
import TeacherRegistrationScreen from '../screens/Register/TeacherRegistrationScreen';
import AlumniRegistrationScreen from '../screens/Register/AlumniRegistrationScreen';
import Colors from '../constants/Colors';


const AppNavigator = createStackNavigator({
    EnterNumber: {
      screen: EnterNumberScreen
    },
    EnterCode : {
      screen: EnterCodeScreen
    },
    Profile: {
      screen: ProfileScreen
    },
    Profession : {
      screen: ProfessionScreen
    },
    StudentRegistration: {
      screen: StudentRegistrationScreen
    },
    TeacherRegistration : {
      screen: TeacherRegistrationScreen
    },
    AlumniRegistration: {
      screen: AlumniRegistrationScreen,
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  });
  
  export default createAppContainer(AppNavigator);

// ... other code from the previous section