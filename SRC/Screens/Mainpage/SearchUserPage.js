import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {containerFull} from '../../CommonCss/pagecss';
import {formHead} from '../../CommonCss/formcss';
import Bottomnavbar from '../../Components/Bottomnavbar';
import TopNavbar from '../../Components/TopNavbar';
import FollowersRandomPost from '../../Components/FollowersRandomPost';

let data = [
  {
    name: 'Jane',
    image:
      'https://media.istockphoto.com/id/1350993173/photo/winding-coast-road-in-corsica.jpg?b=1&s=170667a&w=0&k=20&c=ysJU3NQUzj_GgVmwtCVvwa8XzzWPfnF3OSh3i4MxLIQ=',
  },

  {
    name: 'James',
    image:
      'https://cdn.pixabay.com/photo/2021/12/21/14/47/vineyard-6885444__340.jpg',
  },

  {
    name: 'Tomas',
    image:
      'https://cdn.pixabay.com/photo/2023/02/03/15/27/bird-7765384__340.jpg',
  },
  {
    name: 'Ronaldo',
    image:
      'https://cdn.pixabay.com/photo/2023/01/23/15/02/beaver-rat-7738914__340.jpg',
  },
  {
    name: 'Jane1',
    image:
      'https://media.istockphoto.com/id/1350993173/photo/winding-coast-road-in-corsica.jpg?b=1&s=170667a&w=0&k=20&c=ysJU3NQUzj_GgVmwtCVvwa8XzzWPfnF3OSh3i4MxLIQ=',
  },

  {
    name: 'James1',
    image:
      'https://cdn.pixabay.com/photo/2021/12/21/14/47/vineyard-6885444__340.jpg',
  },

  {
    name: 'Tomas1',
    image:
      'https://cdn.pixabay.com/photo/2023/02/03/15/27/bird-7765384__340.jpg',
  },
  {
    name: 'Ronaldo1',
    image:
      'https://cdn.pixabay.com/photo/2023/01/23/15/02/beaver-rat-7738914__340.jpg',
  },
  {
    name: 'Jane2',
    image:
      'https://media.istockphoto.com/id/1350993173/photo/winding-coast-road-in-corsica.jpg?b=1&s=170667a&w=0&k=20&c=ysJU3NQUzj_GgVmwtCVvwa8XzzWPfnF3OSh3i4MxLIQ=',
  },

  {
    name: 'James2',
    image:
      'https://cdn.pixabay.com/photo/2021/12/21/14/47/vineyard-6885444__340.jpg',
  },

  {
    name: 'Tomas2',
    image:
      'https://cdn.pixabay.com/photo/2023/02/03/15/27/bird-7765384__340.jpg',
  },
  {
    name: 'Ronaldo2',
    image:
      'https://cdn.pixabay.com/photo/2023/01/23/15/02/beaver-rat-7738914__340.jpg',
  },
  {
    name: 'Jame',
    image:
      'https://cdn.pixabay.com/photo/2021/12/21/14/47/vineyard-6885444__340.jpg',
  },

  {
    name: 'Tomas3',
    image:
      'https://cdn.pixabay.com/photo/2023/02/03/15/27/bird-7765384__340.jpg',
  },
  {
    name: 'James4',
    image:
      'https://cdn.pixabay.com/photo/2021/12/21/14/47/vineyard-6885444__340.jpg',
  },

  {
    name: 'Tomas4',
    image:
      'https://cdn.pixabay.com/photo/2023/02/03/15/27/bird-7765384__340.jpg',
  },
];

const SearchUserPage = ({navigation}) => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavbar navigation={navigation} />

      <TextInput
        placeholder="Search By Username"
        style={styles.inputBar}
        onChangeText={inputText => setText(inputText)}></TextInput>

      <Bottomnavbar navigation={navigation} page={'SearchUserPage'} />
      <ScrollView style={styles.userContainer}>
        {data
          .filter(item => {
            if (text === '') {
              return null;
            } else if (item.name.toLowerCase().includes(text.toLowerCase())) {
              return item;
            }
          })
          .map(item => {
            return (
              <View key={item.name} style={styles.userBox}>
                <Image source={{uri: item.image}} style={styles.userImage} />
                <Text style={styles.userName}>{item.name}</Text>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default SearchUserPage;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    paddingVertical: 50,
    alignItems: 'center',
  },
  inputBar: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    height: 40,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  userContainer: {
    width: '100%',
    marginTop: 10,
  },
  userBox: {
    width: '90%',
    backgroundColor: '#111111',
    flexDirection: 'row',
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    alignItems: 'center',
    alignSelf: 'center',
  },
  userName: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  userImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
});
