import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Bottomnavbar = () => {
  return (
    <View style={styles.container}>
      <Text>Bottomnavbar</Text>
      <MaterialCommunityIcon name="home-variant" size={24} />
    </View>
  );
};

export default Bottomnavbar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 100,
  },
});
