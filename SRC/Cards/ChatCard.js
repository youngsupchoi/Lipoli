import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ChatCard = ({chat}) => {
  return (
    <View style={styles.container}>
      <View style={styles.c1}>
        <Image source={{uri: chat.profile_image}} style={styles.image} />
        <View style={{paddingLeft: 10}}>
          <Text style={styles.username}>{chat.username}</Text>
          <Text style={styles.lastmessage}>{chat.lastmessage}</Text>
        </View>
      </View>
    </View>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 10,
  },
  c1: {
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
  },
  username: {color: 'white', fontWeight: 'bold'},
  lastmessage: {color: 'gray'},
});
