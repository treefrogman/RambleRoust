import { View, Text } from "react-native";
import { ViewWithNavBar } from "../components/ViewWithNavBar";
import { styles } from "../styles";

export function SettingsScreen() {
  return (
    <ViewWithNavBar buttons={[
      {
        symbol: "arrow-back",
        onPress: () => null,
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
