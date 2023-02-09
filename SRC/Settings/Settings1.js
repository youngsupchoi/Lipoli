import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {icon1} from '../CommonCss/pagecss';
import {formHead} from '../CommonCss/formcss';
const Settings1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.formHead}>Settings</Text>
      <Ionicons
        onPress={() => navigation.navigate('MyUserProfile')}
        name="chevron-back-circle"
        size={24}
        color="black"
        style={styles.backIcon}
      />
      <Text style={styles.txt1}>Edit Profile</Text>
      <Text style={styles.txt1}>Change Password</Text>
      <Text style={styles.txt1}>Customer Support</Text>
    </View>
  );
};

export default Settings1;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',

    paddingTop: 30,
  },
  backIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
    color: 'white',

    fontSize: 30,
  },
  formHead: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
  },
  txt1: {
    color: 'white',

    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: 'white',
    marginTop: 20,
  },
});
