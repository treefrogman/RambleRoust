/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { ViewWithNavBar } from './components/ViewWithNavBar';
import { styles } from "./styles";

function App(): JSX.Element {
  const [date, setDate] = useState(new Date("2000-01-01T08:00:00"));

  const onChange = (_event: unknown, selectedDate: Date | undefined) => {
    if (selectedDate !== undefined) {
      setDate(selectedDate);
    }
  };

  const showModal = () => {
    DateTimePickerAndroid.open({
      value: date,
      mode: "time",
      onChange
    });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor={styles.backgroundColor.backgroundColor} />
      <ViewWithNavBar buttons={[
        {
          symbol: "history",
          onPress: () => null,
        },
        {
          symbol: "settings",
          onPress: () => null,
        },
      ]}>
        <View style={[styles.backgroundColor, {
          width: '100%',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }]}>
          <Pressable style={({ pressed }) => [styles.roundButton, {
            flex: 5,
          }, pressed ? styles.pressed : null]} onPress={showModal}>
            <Text style={[styles.text, { fontSize: 100 }]}>{formatTime(date)}</Text>
          </Pressable>
          <Pressable style={({ pressed }) => [styles.roundButton, {
            flex: 3,
            marginBottom: 0,
            backgroundColor: "#800",
          }, pressed ? styles.pressed : null]} onPress={() => { }}>
            <Text style={[styles.text, { fontSize: 40 }]}>RECORD</Text>
          </Pressable>
        </View>
      </ViewWithNavBar>
    </SafeAreaView>
  );
}

function formatTime(date: Date) {
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

export default App;
