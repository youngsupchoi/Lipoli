import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Post_Big_Card = ({post_pic, profile_pic, username, likes, comments}) => {
  const [isliked, setIsliked] = useState(false);
  const [showComment, setShowComment] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.c1}>
        <Image source={{uri: profile_pic}} style={styles.profilepic} />
        <Text style={styles.username}>{username}</Text>
      </View>
      <Image source={{uri: post_pic}} style={styles.image} />

      <View style={styles.s2}>
        {isliked ? (
          <View style={styles.s21}>
            <AntDesign
              name="heart"
              size={24}
              color="white"
              onPress={() => {
                setIsliked(!isliked);
              }}
              style={styles.liked}
            />
            <Text style={styles.notliked}>{likes.length + 1}</Text>
          </View>
        ) : (
          <View style={styles.s21}>
            <AntDesign
              name="hearto"
              size={24}
              color="white"
              onPress={() => {
                setIsliked(!isliked);
              }}
            />
            <Text style={styles.notliked}>{likes.length}</Text>
          </View>
        )}

        <FontAwesome
          name="comment"
          size={24}
          color="white"
          onPress={() => {
            setShowComment(!showComment);
          }}
        />
      </View>

      {showComment == true && (
        <View style={styles.s3}>
          {comments.map((item, index) => {
            return (
              <View style={styles.s31} key={item.id}>
                <Text style={styles.commentsUser}>{item.username}</Text>
                <Text style={styles.commentsContent}>{item.comments}</Text>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default Post_Big_Card;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    //height: 500,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: 'white',
  },
  c1: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'black',
    paddingVertical: 10,
  },
  profilepic: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 30,
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  username: {
    color: 'white',
    marginLeft: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  notliked: {
    color: 'gray',
    marginLeft: 10,
    fontSize: 20,
  },
  liked: {color: 'red'},
  iconliked: {},
  s2: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'black',

    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  s21: {
    alignItems: 'center',
    flexDirection: 'row',
    color: 'white',
  },
  s3: {
    padding: 10,
    width: '100%',
    backgroundColor: '#111111',
  },
  s31: {
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
  },
  commentsUser: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  commentsContent: {
    color: 'gray',
    fontSize: 15,
    marginLeft: 10,
  },
});
