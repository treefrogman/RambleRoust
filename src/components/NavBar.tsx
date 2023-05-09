
import React from 'react';
import {
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import type { NavBarButtonConfig } from '../types';
import { styles } from "../styles";
import { RoundButton } from './RoundButton';
import { useDeviceOrientation } from '@react-native-community/hooks'

type Props = {
  buttons: Array<NavBarButtonConfig>;
};
export function NavBar({ buttons }: Props): JSX.Element {
  const portrait = useDeviceOrientation() == 'portrait';
  
  return (
    <View style={[
      {
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      portrait ? {
        flexDirection: 'row',
        height: 120,
        width: "100%",
      } : {
        flexDirection: 'column',
        height: "100%",
        width: 120,
      }
    ]}>
      {
        buttons.map((button: NavBarButtonConfig, index: number) => (
          <RoundButton onPress={button.onPress} style={{ width: 100 }} key={index}>
            <MaterialIcons name={button.symbol} size={50} color={styles.text.color} />
          </RoundButton>
        ))
      }
    </View>
  );
}
