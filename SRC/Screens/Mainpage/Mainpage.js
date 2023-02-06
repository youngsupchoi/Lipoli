import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {containerFull} from '../../CommonCss/pagecss';
import {formHead} from '../../CommonCss/formcss';
import Bottomnavbar from '../../Components/Bottomnavbar';

const Mainpage = ({navigation}) => {
  return (
    <View style={containerFull}>
      <StatusBar />
      <Bottomnavbar />
      <Text style={formHead}>Mainpage</Text>
    </View>
  );
};

export default Mainpage;

const styles = StyleSheet.create({});
