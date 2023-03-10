import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import logo from '../../../../assets/Lipoli_logo_white.png';
import {containerFull, hr80, logo1} from '../../../CommonCss/pagecss';
import {
  formbtn,
  formHead,
  formInput,
  formTextLinkCenter,
  formTextLinkRight,
} from '../../../CommonCss/formcss';

const Login = ({navigation}) => {
  return (
    <View style={containerFull}>
      <Image source={logo} style={logo1} />
      <Text style={formHead}>Login</Text>
      <TextInput
        placeholderTextColor="gray"
        placeholder="Enter Your Email"
        style={formInput}
      />
      <TextInput
        secureTextEntry={true}
        placeholderTextColor="gray"
        placeholder="Enter Your Password"
        style={formInput}
      />
      <Text
        style={formTextLinkRight}
        onPress={() => navigation.navigate('ForgotPassword_EnterEmail')}>
        Forgot Password?
      </Text>

      <Text style={formbtn} onPress={() => navigation.navigate('Mainpage')}>
        Submit
      </Text>
      <View style={hr80}></View>
      <Text style={formTextLinkCenter}>
        Don't have an account?{' '}
        <Text
          style={{color: 'white'}}
          onPress={() => navigation.navigate('Signup_EnterEmail')}>
          Signup
        </Text>
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
