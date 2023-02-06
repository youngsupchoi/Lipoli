import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  containerFull,
  goback,
  hr80,
  logo1,
  row,
} from '../../../CommonCss/pagecss';
import Login from '../Login/Login';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import logo from '../../../../assets/Lipoli_logo_white.png';
import {
  formbtn,
  formHead2,
  formHead3,
  formInput,
} from '../../../CommonCss/formcss';

const ForgotPassword_AccountRecovered = ({navigation}) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ForgotPassWord_ChoosePassword')}
        style={goback}>
        <Ionicons name="arrow-back" size={24} color="gray" />
        <Text style={{color: 'gray', fontSize: 14}}>Go Back</Text>
      </TouchableOpacity>
      <Image source={logo} style={logo1} />

      <View style={row}>
        <MaterialCommunityIcons name="check-decagram" size={22} color="blue" />

        <Text style={formHead2}>Account Recovered Successfully</Text>
      </View>
      <Text style={formbtn} onPress={() => navigation.navigate('Login')}>
        Let's start
      </Text>
    </View>
  );
};

export default ForgotPassword_AccountRecovered;

const styles = StyleSheet.create({});
