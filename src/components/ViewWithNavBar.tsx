import { NavBar } from './NavBar';
import type { NavBarButtonConfig } from '../types';
import { styles } from "../styles";

type Props = {
  buttons: Array<NavBarButtonConfig>;
  children?: React.ReactNode;
};
import {
  View,
} from 'react-native';
export function ViewWithNavBar({ buttons, children }: Props): JSX.Element {
  return (
    <View style={[
      styles.backgroundColor, {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }
    ]}>
      {children}
      <NavBar buttons={buttons}></NavBar>
    </View>
  );
}
