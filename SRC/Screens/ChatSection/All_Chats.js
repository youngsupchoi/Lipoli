import {StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {formHead2, formInput} from '../../CommonCss/formcss';
import ChatCard from '../../Cards/ChatCard';

const All_Chats = ({navigation}) => {
  let chat = [
    {
      username: 'user1',
      lastmessage: 'hello',
      time: '12:00',
      profile_image:
        'https://cdn.pixabay.com/photo/2023/01/24/13/23/viet-nam-7741017_640.jpg',
    },
    {
      username: 'sara2',
      lastmessage: 'how much is it I will buy it',
      time: '1:00',
      profile_image:
        'https://cdn.pixabay.com/photo/2023/01/24/13/23/viet-nam-7741017_640.jpg',
    },
    {
      username: 'sara3',
      lastmessage: 'I like that',
      time: '1:00',
      profile_image:
        'https://cdn.pixabay.com/photo/2023/01/24/13/23/viet-nam-7741017_640.jpg',
    },
    {
      username: 'sara4',
      lastmessage: 'Thank you so much',
      time: '1:00',
      profile_image:
        'https://cdn.pixabay.com/photo/2023/01/24/13/23/viet-nam-7741017_640.jpg',
    },
    {
      username: 'sara5',
      lastmessage: 'I love you',
      time: '1:00',
      profile_image:
        'https://cdn.pixabay.com/photo/2023/01/24/13/23/viet-nam-7741017_640.jpg',
    },
  ];
  const [keyword, setKeyword] = React.useState('');
  console.log(keyword);
  return (
    <ScrollView style={styles.container}>
      <Ionicons
        name="chevron-back-circle"
        size={24}
        color="black"
        style={styles.gohomeicon}
        onPress={() => {
          navigation.navigate('Mainpage');
        }}
      />
      <View style={styles.c1}>
        <Text style={formHead2}>Your Chats</Text>
        <TextInput
          style={styles.searchbar}
          placeholder="Search"
          onChangeText={text => setKeyword(text)}
        />
      </View>
      {chat
        .filter(chat => {
          if (keyword == '') {
            return chat;
          } else if (
            chat.username.toLowerCase().includes(keyword.toLowerCase()) ||
            chat.lastmessage.toLowerCase().includes(keyword.toLowerCase())
          ) {
            return chat;
          }
        })
        .map(chat => {
          return <ChatCard key={chat.username} chat={chat} />;
        })}
    </ScrollView>
  );
};

export default All_Chats;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  gohomeicon: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
    color: 'white',

    fontSize: 30,
  },
  c1: {
    width: '95%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,

    margin: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#111111',
    alignSelf: 'center',
  },
  searchbar: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: '90%',
    color: 'black',
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 37,
    fontSize: 12,
  },
});
