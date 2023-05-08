import { View, Text } from "react-native";
import { ViewWithNavBar } from "../components/ViewWithNavBar";
import { styles } from "../styles";
import { SettingsScreenProps } from "../types";

export function SettingsScreen({ navigation }: SettingsScreenProps) {
  return (
    <ViewWithNavBar buttons={[
      {
        symbol: "arrow-back",
        onPress: () => { navigation.goBack(); },
      },
    ]}>
      <View style={[styles.backgroundColor, {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }]}>
        <Text>
          Settings
        </Text>
      </View>
    </ViewWithNavBar>
  );
}
