import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {containerFull} from '../../CommonCss/pagecss';
import {formHead} from '../../CommonCss/formcss';
import Bottomnavbar from '../../Components/Bottomnavbar';
import TopNavbar from '../../Components/TopNavbar';
import FollowersRandomPost from '../../Components/FollowersRandomPost';

const MyUserProfile = ({navigation}) => {
  const data = {
    username: 'harshal123',
    followers: 1100,
    following: 1500,
    descrption: 'I am a software developer and I love to code',
    profile_image: 'https://picsum.photos/500/500',
    posts: [
      {
        id: 1,
        post_image: 'https://picsum.photos/400/400',
      },
      {
        id: 2,
        post_image: 'http://picsum.photos/300/300',
      },
      {
        id: 3,
        post_image: 'http://picsum.photos/200/200',
      },
      {
        id: 4,
        post_image: 'http://picsum.photos/250/150',
      },
      {
        id: 5,
        post_image: 'http://picsum.photos/550/300',
      },
    ],
  };
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavbar navigation={navigation} page={'MyUserProfile'} />
      <Bottomnavbar navigation={navigation} page={'MyUserProfile'} />
      <ScrollView>
        <View style={styles.c2}>
          <Image
            source={{uri: data.profile_image}}
            style={styles.profile_image}
          />
          <Text style={styles.username}>@{data.username}</Text>
          <View style={styles.info}>
            <View style={styles.infoTextBox}>
              <Text style={styles.infoText}>Followers</Text>
              <Text style={styles.infoText}>{data.followers}</Text>
            </View>

            <View style={styles.verticalLine}></View>
            <View style={styles.infoTextBox}>
              <Text style={styles.infoText}>following</Text>
              <Text style={styles.infoText}>{data.following}</Text>
            </View>
            <View style={styles.verticalLine}></View>
            <View style={styles.infoTextBox}>
              <Text style={styles.infoText}>Post</Text>
              <Text style={styles.infoText}>{data.posts.length}</Text>
            </View>
          </View>
          <Text style={styles.profileDescription}>{data.descrption}</Text>
        </View>

        <View style={styles.c2}>
          <Text style={styles.txt}>Your Post</Text>
          <View style={styles.c13}>
            {data.posts.map(item => {
              return (
                <Image
                  key={item.id}
                  style={styles.postPic}
                  source={{uri: item.post_image}}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
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
  c2: {
    backgroundColor: 'black',
    alignItems: 'center',
  },
  profile_image: {
    height: 110,
    width: 110,
    borderRadius: 65,
    marginVertical: 20,
  },
  username: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
  },
  info: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',

    paddingVertical: 10,
  },
  verticalLine: {
    backgroundColor: 'white',
    width: 1,
    height: 40,
  },
  infoTextBox: {
    alignItems: 'center',
    flex: 1,
  },
  infoText: {
    color: 'white',
    fontSize: 15,
  },
  profileDescription: {
    color: 'white',
    width: '100%',
    paddingLeft: 10,
    paddingVertical: 20,
    backgroundColor: '#111111',
  },
  txt: {
    margin: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#111111',
    width: '40%',
    alignContent: 'center',
    textAlign: 'center',
    borderRadius: 20,
    padding: 3,
  },
  c13: {
    width: '99%',
    backgroundColor: 'black',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
    justifyContent: 'center',
  },
  postPic: {
    width: '31%',
    height: 110,
    margin: 4,
  },
});
