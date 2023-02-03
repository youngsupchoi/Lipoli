import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {containerFull, goback} from '../../../CommonCss/pagecss';
import Login from '../Login/Login';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Signup_EnterEmail = ({navigation}) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={goback}>
        <Ionicons name="arrow-back" size={24} color="gray" />
        <Text style={{color: 'gray', fontSize: 14}}>Go Back</Text>
      </TouchableOpacity>
      <Text>Signup_EnterEmail</Text>
    </View>
  );
};

export default Signup_EnterEmail;

const styles = StyleSheet.create({});
