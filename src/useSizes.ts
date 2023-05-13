// import {useWindowDimensions} from 'react-native'
import { useContext } from 'react';
import { ResizerContext } from './components/LayoutTestResizer/ResizerContext';

export default function useSizes() {
  // const {width, height} = useWindowDimensions()
  const { dimensions, setDimensions } = useContext(ResizerContext);
  const { width, height } = dimensions;
  const sizes = {
    navBar: {
      padding: 25,
      buttonSize: 100,
      symbolSize: 50,
    },
    mainScreen: {
      padding: 25,
      gap: 50,
      timeButton: {
        fontSize: 100,
        minWidth: height / 6,
      },
      recordButton: {
        fontSize: height / 10,
        minWidth: width,
      },
    }
  };
  return sizes;
}
