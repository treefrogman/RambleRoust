import { StyleSheet } from 'react-native';
import {
  backgroundColor,
  buttonColor,
  textColor,
} from './colors';

export const styles = StyleSheet.create({
  roundButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999999,
    backgroundColor: buttonColor,
    aspectRatio: 1,
  },
  pressed: {
    opacity: 0.5,
  },
  text: {
    fontSize: 10,
    color: textColor,
  },
  backgroundColor: {
    backgroundColor: backgroundColor,
  },
});
