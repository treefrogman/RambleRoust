import { View, Text } from "react-native";
import { ViewWithNavBar } from "../components/ViewWithNavBar";
import { styles } from "../styles";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useState } from "react";
import { MainScreenProps } from "../types";
import { RoundButton } from "../components/RoundButton";
import { recordColor } from "../colors";
import { useDeviceOrientation } from '@react-native-community/hooks'
import useSizes from '../useSizes';

export function MainScreen({ navigation }: MainScreenProps) {
  const [date, setDate] = useState(new Date("2000-01-01T08:00:00"));
  const portrait = useDeviceOrientation() == 'portrait';
  const { mainScreen } = useSizes();

  const onChange = (_event: unknown, selectedDate: Date | undefined) => {
    if (selectedDate !== undefined) {
      setDate(selectedDate);
    }
  };

  const showModal = () => {
    DateTimePickerAndroid.open({
      value: date,
      mode: "time",
      onChange
    });
  };
  return (
    <ViewWithNavBar buttons={[
      {
        symbol: "history",
        onPress: () => { navigation.navigate('Archive'); },
      },
      {
        symbol: "settings",
        onPress: () => { navigation.navigate('Settings'); },
      },
    ]}>
      <View style={[styles.backgroundColor, {
        width: '100%',
        flex: 1,
        flexDirection: portrait ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: mainScreen.gap,
        padding: mainScreen.padding,
      }]}>
        <RoundButton onPress={showModal} style={{ flex: 3, minWidth: mainScreen.timeButton.minWidth, maxWidth: '100%' }}>
          <Text style={[styles.text, { fontSize: mainScreen.timeButton.fontSize }]}>{formatTime(date)}</Text>
        </RoundButton>
        <RoundButton onPress={()=>{}} style={{ flex: 2, minWidth: mainScreen.recordButton.minWidth, backgroundColor: recordColor }}>
          <Text style={[styles.text, { fontSize: mainScreen.recordButton.fontSize }]}>{mainScreen.recordButton.fontSize}</Text>
        </RoundButton>
      </View>
    </ViewWithNavBar>
  );
}

function formatTime(date: Date) {
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}
