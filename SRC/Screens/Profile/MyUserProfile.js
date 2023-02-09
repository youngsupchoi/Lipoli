import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {containerFull} from '../../CommonCss/pagecss';
import {formHead} from '../../CommonCss/formcss';
import Bottomnavbar from '../../Components/Bottomnavbar';
import TopNavbar from '../../Components/TopNavbar';
import FollowersRandomPost from '../../Components/FollowersRandomPost';

const MyUserProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavbar navigation={navigation} />
      <Text style={formHead}>MyUserProfile</Text>
      <Bottomnavbar navigation={navigation} page={'MyUserProfile'} />
    </View>
  );
};

export default MyUserProfile;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    paddingVertical: 50,
  },
});