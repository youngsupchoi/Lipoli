import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {containerFull, goback, hr80, logo1} from '../../../CommonCss/pagecss';
import Login from '../Login/Login';
import Ionicons from 'react-native-vector-icons/Ionicons';
import logo from '../../../../assets/Lipoli_logo_white.png';
import {formbtn, formHead2, formInput} from '../../../CommonCss/formcss';

const ForgotPassword_EnterEmail = ({navigation}) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={goback}>
        <Ionicons name="arrow-back" size={24} color="gray" />
        <Text style={{color: 'gray', fontSize: 14}}>Go Back</Text>
      </TouchableOpacity>
      <Image source={logo} style={logo1} />
      <Text style={formHead2}>Verify Your Email</Text>
      <TextInput
        placeholderTextColor="gray"
        placeholder="Enter Your Email"
        style={[formInput, {marginBottom: 0, borderWidth: 0}]}
      />
      <View style={[hr80, {marginTop: 0, width: '75%'}]}></View>

      <Text
        style={formbtn}
        onPress={() =>
          navigation.navigate('ForgotPassword_EnterVerificationCode')
        }>
        next
      </Text>
    </View>
  );
};

export default ForgotPassword_EnterEmail;

const styles = StyleSheet.create({});
