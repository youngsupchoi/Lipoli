import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {icon1} from '../CommonCss/pagecss';
import NotioficationPage from '../Screens/Mainpage/NotioficationPage';

const Bottomnavbar = ({navigation, page}) => {
  return (
    <View style={styles.container}>
      {page === 'Mainpage' ? (
        <MaterialCommunityIcon
          name="home-variant"
          size={24}
          color="black"
          style={styles.icon1Active}
          onPress={() => {
            navigation.navigate('Mainpage');
          }}
        />
      ) : (
        <MaterialCommunityIcon
          name="home-variant"
          size={24}
          color="black"
          style={icon1}
          onPress={() => {
            navigation.navigate('Mainpage');
          }}
        />
      )}

      {page === 'SearchUserPage' ? (
        <Fontisto
          name="search"
          size={24}
          color="black"
          style={styles.icon1Active}
          onPress={() => {
            navigation.navigate('SearchUserPage');
          }}
        />
      ) : (
        <Fontisto
          name="search"
          size={24}
          color="black"
          style={icon1}
          onPress={() => {
            navigation.navigate('SearchUserPage');
          }}
        />
      )}
      {page === 'NotioficationPage' ? (
        <Ionicons
          name="ios-heart"
          size={24}
          color="black"
          style={styles.icon1Active}
          onPress={() => {
            navigation.navigate('NotificationPage');
          }}
        />
      ) : (
        <Ionicons
          name="ios-heart"
          size={24}
          color="black"
          style={icon1}
          onPress={() => {
            navigation.navigate('NotificationPage');
          }}
        />
      )}

      {page === 'MyUserProfile' ? (
        <FontAwesome
          name="user-circle"
          size={24}
          color="black"
          style={styles.icon1Active}
          onPress={() => {
            navigation.navigate('MyUserProfile');
          }}
        />
      ) : (
        <FontAwesome
          name="user-circle"
          size={24}
          color="black"
          style={icon1}
          onPress={() => {
            navigation.navigate('MyUserProfile');
          }}
        />
      )}
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
  icon1Active: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    borderRadius: 15,
    padding: 4,
  },
});
