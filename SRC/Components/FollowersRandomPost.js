import {StyleSheet, Text, ScrollView} from 'react-native';
import React from 'react';
import Post_Big_Card from '../Cards/Post_Big_Card';

const FollowersRandomPost = () => {
  let data = [
    {
      id: 1,
      username: 'user_123',
      image:
        'https://cdn.pixabay.com/photo/2023/02/01/16/04/fog-7760708__340.jpg',
      profile_image:
        'https://cdn.pixabay.com/photo/2023/01/24/13/23/viet-nam-7741017_640.jpg',
      likes: ['harshl_123', 'viral_123'],
      comments: [
        {
          id: 1,
          username: 'harshal_123',
          comments: 'nice post',
        },
      ],
    },
    {
      id: 2,
      username: 'user_123',
      image:
        'https://cdn.pixabay.com/photo/2022/12/16/15/37/flower-7659988_640.jpg',
      profile_image:
        'data:image/jpeg;base64,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',
      likes: ['harshl_123', 'viral_123'],
      comments: [
        {
          id: 1,
          username: 'harshal_123',
          comments: 'nice post',
        },
        {
          id: 2,
          username: 'sup1214',
          comments: 'good, I like this',
        },
      ],
    },
    {
      id: 3,
      username: 'user_123',
      image:
        'https://cdn.pixabay.com/photo/2022/08/12/17/08/food-7382109__340.jpg',
      profile_image:
        'https://cdn.pixabay.com/photo/2023/01/25/12/31/couple-7743478__340.jpg',
      likes: ['harshl_123', 'viral_123'],
      comments: [
        {
          id: 1,
          username: 'harshal_123',
          comments: 'nice post',
        },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {data.map(item => {
        return (
          <Post_Big_Card
            key={item.id}
            username={item.username}
            profile_pic={item.profile_image}
            post_pic={item.image}
            likes={item.likes}
            comments={item.comments}
          />
        );
      })}
    </ScrollView>
  );
};

export default FollowersRandomPost;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
