
import React from 'react';
import {
  Pressable,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import type { NavBarButtonConfig } from './types';

type Props = {
  buttons: any;
};

export function NavBar({ buttons }: Props): JSX.Element {
  return (
    <View style={{
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      flex: 2,
      width: "100%",
    }}>
      {
        buttons.map((button: NavBarButtonConfig, index: number) => (
          <Pressable style={({ pressed }) => [styles.roundButton, styles.smallButton, pressed ? styles.pressed : null]} onPress={button.onPress} key={index}>
            <MaterialIcons name={button.symbol} size={50} color={styles.text.color} />
          </Pressable>
        ))
      }
    </View>
  );
}
