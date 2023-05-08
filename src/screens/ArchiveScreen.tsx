import { View, Text } from "react-native";
import { ViewWithNavBar } from "../components/ViewWithNavBar";
import { styles } from "../styles";

export function ArchiveScreen() {
  return (
    <ViewWithNavBar buttons={[
      {
        symbol: "arrow-forward",
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
          Archive
        </Text>
      </View>
    </ViewWithNavBar>
  );
}
