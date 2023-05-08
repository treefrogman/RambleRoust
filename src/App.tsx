import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { styles } from "./styles";
import { MainScreen } from './screens/MainScreen';
import { ArchiveScreen } from './screens/ArchiveScreen';
import { SettingsScreen } from './screens/SettingsScreen';

export default function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor={styles.backgroundColor.backgroundColor} />
      {/* <MainScreen /> */}
      {/* <ArchiveScreen /> */}
      <SettingsScreen />
    </SafeAreaView>
  );
}

