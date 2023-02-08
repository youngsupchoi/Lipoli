import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {icon1} from '../CommonCss/pagecss';

const Bottomnavbar = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcon
        name="home-variant"
        size={24}
        color="black"
        style={icon1}
      />
      <Fontisto name="search" size={24} color="black" style={icon1} />
      <Ionicons name="ios-heart" size={24} color="black" style={icon1} />
      <FontAwesome name="user-circle" size={24} color="black" style={icon1} />
    </View>
  );
};

export default Bottomnavbar;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#111111',
    width: '100%',
    zIndex: 100,

    paddingVertical: 10,
  },
});
