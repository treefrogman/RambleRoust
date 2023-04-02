/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';

function App(): JSX.Element {
  const backgroundColor = "#222";
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor={backgroundColor} />
      <View style={{
        backgroundColor,
        flex: 1,
      }}></View>
    </SafeAreaView>
  );
}

export default App;
