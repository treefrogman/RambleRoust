import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { styles } from "./styles";
import { MainScreen } from './screens/MainScreen';
import { ArchiveScreen } from './screens/ArchiveScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import type { RootStackParamList } from './types';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={styles.backgroundColor.backgroundColor} />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Archive" component={ArchiveScreen} options={{ headerShown: false, animation: "slide_from_left" }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false, animation: "slide_from_right" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

