import { NavBar } from './NavBar';
import type { NavBarButtonConfig } from '../types';
import { styles } from "../styles";
import { useDeviceOrientation } from '@react-native-community/hooks'
import { LayoutTestResizer } from './LayoutTestResizer/LayoutTestResizer';

type Props = {
  buttons: Array<NavBarButtonConfig>;
  children?: React.ReactNode;
};
import {
  View,
} from 'react-native';
export function ViewWithNavBar({ buttons, children }: Props): JSX.Element {
  const portrait = useDeviceOrientation() == 'portrait';
  
  return (
    <LayoutTestResizer>
      <View style={[
        styles.backgroundColor, {
          flex: 1,
          flexDirection: portrait ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }
      ]}>
        {children}
        <NavBar buttons={buttons}></NavBar>
      </View>
    </LayoutTestResizer>
  );
}
