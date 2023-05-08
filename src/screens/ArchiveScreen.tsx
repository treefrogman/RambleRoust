import { View, Text } from "react-native";
import { ViewWithNavBar } from "../components/ViewWithNavBar";
import { styles } from "../styles";
import { ArchiveScreenProps } from "../types";

export function ArchiveScreen({ navigation }: ArchiveScreenProps) {
  return (
    <ViewWithNavBar buttons={[
      {
        symbol: "arrow-forward",
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
          Archive
        </Text>
      </View>
    </ViewWithNavBar>
  );
}
