/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import AppHeader from '../components/AppHeader';

function Home() {
  return (
    <>
      <AppHeader />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
      </View>
    </>
  );
}

export default Home;
