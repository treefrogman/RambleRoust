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
    width: 100,
    margin: 35,
    marginTop: 0,
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
