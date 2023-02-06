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
import {
  formbtn,
  formHead2,
  formHead3,
  formInput,
} from '../../../CommonCss/formcss';

const Signup_ChoosePassword = ({navigation}) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Signup_ChooseUsername')}
        style={goback}>
        <Ionicons name="arrow-back" size={24} color="gray" />
        <Text style={{color: 'gray', fontSize: 14}}>Go Back</Text>
      </TouchableOpacity>
      <Image source={logo} style={logo1} />
      <Text style={formHead2}>Choose a storng password</Text>

      <TextInput
        secureTextEntry={true}
        placeholderTextColor="gray"
        placeholder="Enter a password"
        style={[formInput, {marginBottom: 0, borderWidth: 0}]}
      />
      <View style={[hr80, {marginTop: 0, width: '75%'}]}></View>
      <TextInput
        secureTextEntry={true}
        placeholderTextColor="gray"
        placeholder="Confirm password"
        style={[formInput, {marginBottom: 0, borderWidth: 0}]}
      />
      <View style={[hr80, {marginTop: 0, width: '75%'}]}></View>

      <Text
        style={formbtn}
        onPress={() => navigation.navigate('Signup_AccountCreated')}>
        next
      </Text>
    </View>
  );
};

export default Signup_ChoosePassword;

const styles = StyleSheet.create({});
