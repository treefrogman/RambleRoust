import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  roundButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999999,
    backgroundColor: '#333',
    aspectRatio: 1,
    width: 100,
    margin: 20,
  },
  smallButton: {
    marginTop: 0,
  },
  pressed: {
    opacity: 0.5,
  },
  text: {
    fontSize: 10,
    color: '#bbb',
  },
  backgroundColor: {
    backgroundColor: '#222',
  },
});
