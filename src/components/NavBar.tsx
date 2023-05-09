
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
  const buttonSize = 100;
  const padding = 25;
  const thickness = buttonSize + 2 * padding;
  
  return (
    <View style={[
      {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding,
      },
      portrait ? {
        flexDirection: 'row',
        height: thickness,
        width: "100%",
      } : {
        flexDirection: 'column-reverse',
        height: "100%",
        width: thickness,
      }
    ]}>
      {
        buttons.map((button: NavBarButtonConfig, index: number) => (
          <RoundButton onPress={button.onPress} style={{ width: buttonSize }} key={index}>
            <MaterialIcons name={button.symbol} size={50} color={styles.text.color} />
          </RoundButton>
        ))
      }
    </View>
  );
}
