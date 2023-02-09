import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './SRC/Screens/LoginSingup/Login/Login';
import Signup_EnterEmail from './SRC/Screens/LoginSingup/Signup/Signup_EnterEmail';
import Signup_ChoosePassword from './SRC/Screens/LoginSingup/Signup/Signup_ChoosePassword';
import Signup_ChooseUsername from './SRC/Screens/LoginSingup/Signup/Signup_ChooseUsername';
import Signup_AccountCreated from './SRC/Screens/LoginSingup/Signup/Signup_AccountCreated';
import Signup_EnterVerificationCode from './SRC/Screens/LoginSingup/Signup/Signup_EnterVerificationCode';
import ForgotPassword_AccountRecovered from './SRC/Screens/LoginSingup/ForgotPassword/ForgotPassword_AccountRecovered';
import ForgotPassWord_ChoosePassword from './SRC/Screens/LoginSingup/ForgotPassword/ForgotPassWord_ChoosePassword';
import ForgotPassword_EnterEmail from './SRC/Screens/LoginSingup/ForgotPassword/ForgotPassword_EnterEmail';
import ForgotPassword_EnterVerificationCode from './SRC/Screens/LoginSingup/ForgotPassword/ForgotPassword_EnterVerificationCode';
import Mainpage from './SRC/Screens/Mainpage/Mainpage';
import All_Chats from './SRC/Screens/ChatSection/All_Chats';
import MyUserProfile from './SRC/Screens/Profile/MyUserProfile';
import SearchUserPage from './SRC/Screens/Mainpage/SearchUserPage';
import NotioficationPage from './SRC/Screens/Mainpage/NotioficationPage';

const Stack = createNativeStackNavigator();

const app = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        animation: 'slide_from_right'
      }}>
        <Stack.Screen name="Login" component={Login} options={{
          animation: 'slide_from_right'
        }} />
        <Stack.Screen name="Signup_EnterEmail" component={Signup_EnterEmail} />
        <Stack.Screen name='Signup_EnterVerificationCode' component={Signup_EnterVerificationCode} />
        <Stack.Screen name="Signup_ChooseUsername" component={Signup_ChooseUsername} />
        <Stack.Screen name="Signup_ChoosePassword" component={Signup_ChoosePassword} />
        <Stack.Screen name="Signup_AccountCreated" component={Signup_AccountCreated} />

        <Stack.Screen name="ForgotPassword_AccountRecovered" component={ForgotPassword_AccountRecovered} />
        <Stack.Screen name="ForgotPassWord_ChoosePassword" component={ForgotPassWord_ChoosePassword} />
        <Stack.Screen name="ForgotPassword_EnterEmail" component={ForgotPassword_EnterEmail} />
        <Stack.Screen name="ForgotPassword_EnterVerificationCode" component={ForgotPassword_EnterVerificationCode} />

        <Stack.Screen name="Mainpage" component={Mainpage} />
        <Stack.Screen name="All_Chats" component={All_Chats} 
        options={{
          animation: 'slide_from_bottom'
        }}
        />
        <Stack.Screen name="SearchUserPage" component={SearchUserPage} 
        options={{
          animation: 'slide_from_bottom'
        }}
        />
        <Stack.Screen name="NotificationPage" component={NotioficationPage} 
        />
        <Stack.Screen name="MyUserProfile" component={MyUserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default app;

const styles = StyleSheet.create({});
