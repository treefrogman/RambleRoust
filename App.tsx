/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function App(): JSX.Element {
  const backgroundColor = "#222";
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor={backgroundColor} />
      <View style={{
        backgroundColor,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Pressable style={({pressed})=> [styles.roundButton, {
          flex: 5,
        }, pressed?styles.pressed:null]} onPress={()=>{}}>
          <Text style={[styles.text, {fontSize: 100}]}>17:55</Text>
        </Pressable>
        <Pressable style={({pressed})=> [styles.roundButton, {
          flex: 3,
          marginBottom: 0,
          backgroundColor: "#800",
        }, pressed?styles.pressed:null]} onPress={()=>{}}>
          <Text style={[styles.text, {fontSize: 40}]}>RECORD</Text>
        </Pressable>
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          flex: 2,
          gap: 90,
        }}>
          <Pressable style={({pressed})=> [styles.roundButton, styles.smallButton, pressed?styles.pressed:null]} onPress={()=>{}}>
            <MaterialIcons name="history" size={50} color={styles.text.color} />
          </Pressable>
          <Pressable style={({pressed})=> [styles.roundButton, styles.smallButton, pressed?styles.pressed:null]} onPress={()=>{}}>
            <MaterialIcons name="settings" size={50} color={styles.text.color} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  roundButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999999,
    backgroundColor: '#333',
    aspectRatio: 1,
    width: 100,
    margin: 20,
  },
  smallButton: {
    marginTop: 0,
  },
  pressed: {
    opacity: 0.5,
  },
  text: {
    fontSize: 10,
    color: '#bbb',
  },
});

export default App;
