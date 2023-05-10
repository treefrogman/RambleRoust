import { useState } from "react";
import {
  Pressable,
  Text,
  View,
} from "react-native";
import ResizerContext from "./ResizerContext";

type dimensions = {
  width: number,
  height: number,
};
type Props = {
  children?: React.ReactNode;
};
export function LayoutTestResizer({ children }: Props): JSX.Element {
  const [dimensions, setDimensions] = useState({ width: 393, height: 777 });
  const dimString = (({ width, height }) => Math.round(width) + " x " + Math.round(height))(dimensions);
  function updateDimensions({ width, height }: dimensions) {
    setDimensions({ width, height });
  }
  
  return (
    <ResizerContext.Provider value={dimensions}>
      <View style={{
        width: dimensions.width,
        height: dimensions.height,
      }}>
        {children}
      </View>
      <Pressable style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onPress={({ nativeEvent: {pageX: width, pageY: height} }) => {updateDimensions({ width, height })}}>
        <Text>{dimString}</Text>
      </Pressable>
    </ResizerContext.Provider>
  );
}
