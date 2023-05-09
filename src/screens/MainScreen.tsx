import { View, Text } from "react-native";
import { ViewWithNavBar } from "../components/ViewWithNavBar";
import { styles } from "../styles";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useState } from "react";
import { MainScreenProps } from "../types";
import { RoundButton } from "../components/RoundButton";
import { recordColor } from "../colors";
import { useDeviceOrientation } from '@react-native-community/hooks'

export function MainScreen({ navigation }: MainScreenProps) {
  const [date, setDate] = useState(new Date("2000-01-01T08:00:00"));
  const portrait = useDeviceOrientation() == 'portrait';

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
        gap: 50,
        padding: 25,
      }]}>
        <RoundButton onPress={showModal} style={{ flex: 3, aspectRatio: portrait ? 1 : 1.7, maxWidth: '100%' }}>
          <Text style={[styles.text, { fontSize: 80 }]}>{formatTime(date)}</Text>
        </RoundButton>
        <RoundButton onPress={()=>{}} style={{ flex: 2, backgroundColor: recordColor }}>
          <Text style={[styles.text, { fontSize: 40 }]}>RECORD</Text>
        </RoundButton>
      </View>
    </ViewWithNavBar>
  );
}

function formatTime(date: Date) {
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}
