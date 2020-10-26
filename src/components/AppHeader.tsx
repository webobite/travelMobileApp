import React from 'react';
import {Platform} from 'react-native';
import {Appbar} from 'react-native-paper';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

function AppHeader() {
  return (
    <Appbar.Header>
      <Appbar.Content
        title="Travely"
        subtitle={'Get Your Travel assistant here'}
      />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
  );
}

export default AppHeader;
