
import React from 'react';
import {
  Pressable,
  ViewStyle,
} from 'react-native';
import { styles } from "../styles";

type Props = {
  onPress: () => void;
  style?: ViewStyle | Array<ViewStyle>;
  children?: React.ReactElement;
};
export function RoundButton({ onPress, style, children }: Props): JSX.Element {
  return (
    <Pressable style={({ pressed }) => [styles.roundButton, pressed ? styles.pressed : null, style]} onPress={onPress}>
      {children}
    </Pressable>
  );
}
