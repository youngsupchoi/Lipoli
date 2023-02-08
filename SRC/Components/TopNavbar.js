import {StyleSheet, Text, View, Image} from 'react-native';
import logo from '../../assets/Lipoli_logo_white.png';
import Ionicons from 'react-native-vector-icons/Ionicons';

import React from 'react';
import {icon1, logo2} from '../CommonCss/pagecss';

const TopNavbar = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={logo2} />
      <Ionicons
        onPress={() => navigation.navigate('All_Chats')}
        name="chatbubble"
        size={24}
        color="black"
        style={icon1}
      />
    </View>
  );
};

export default TopNavbar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    paddingVertical: 10,
    top: 0,
    backgroundColor: '#111111',
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
