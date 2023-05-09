import { View, Text } from "react-native";
import { ViewWithNavBar } from "../components/ViewWithNavBar";
import { styles } from "../styles";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useState } from "react";
import { MainScreenProps } from "../types";
import { RoundButton } from "../components/RoundButton";
import { recordColor } from "../colors";

export function MainScreen({ navigation }: MainScreenProps) {
  const [date, setDate] = useState(new Date("2000-01-01T08:00:00"));

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
        alignItems: 'center',
        justifyContent: 'center',
      }]}>
        <RoundButton onPress={showModal} style={{ width: 350 }}>
          <Text style={[styles.text, { fontSize: 100 }]}>{formatTime(date)}</Text>
        </RoundButton>
        <RoundButton onPress={()=>{}} style={{ width: 230, backgroundColor: recordColor }}>
          <Text style={[styles.text, { fontSize: 40 }]}>RECORD</Text>
        </RoundButton>
      </View>
    </ViewWithNavBar>
  );
}

function formatTime(date: Date) {
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}
