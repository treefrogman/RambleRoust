
import React from 'react';
import {
  Pressable,
} from 'react-native';
import { styles } from "../styles";

type Props = {
  onPress: () => void;
  color?: string;
  diameter?: number;
  children?: React.ReactElement;
};
export function RoundButton({ onPress, color, diameter, children }: Props): JSX.Element {
  const diameterStyle = diameter ? { width: diameter } : null;
  const colorStyle = color ? { backgroundColor: color } : null;
  return (
    <Pressable style={({ pressed }) => [styles.roundButton, pressed ? styles.pressed : null, colorStyle, diameterStyle]} onPress={onPress}>
      {children}
    </Pressable>
  );
}
