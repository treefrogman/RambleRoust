export type NavBarButtonConfig = {
  symbol: string;
  onPress: () => void;
};
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Archive: undefined;
  Settings: undefined;
};
export type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type ArchiveScreenProps = NativeStackScreenProps<RootStackParamList, 'Archive'>;
export type SettingsScreenProps = NativeStackScreenProps<RootStackParamList, 'Settings'>;
