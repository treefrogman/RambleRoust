
import React from 'react';
import {
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import type { NavBarButtonConfig } from '../types';
import { styles } from "../styles";
import { RoundButton } from './RoundButton';

type Props = {
  buttons: Array<NavBarButtonConfig>;
};
export function NavBar({ buttons }: Props): JSX.Element {
  return (
    <View style={{
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      height: 120,
      width: "100%",
    }}>
      {
        buttons.map((button: NavBarButtonConfig, index: number) => (
          <RoundButton onPress={button.onPress} diameter={100} key={index}>
            <MaterialIcons name={button.symbol} size={50} color={styles.text.color} />
          </RoundButton>
        ))
      }
    </View>
  );
}
