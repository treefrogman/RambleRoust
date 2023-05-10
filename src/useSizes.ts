// import {useWindowDimensions} from 'react-native'
import { useContext, useMemo } from 'react';
import ResizerContext from './components/LayoutTestResizer/ResizerContext';

export default function useSizes() {
  // const {width, height} = useWindowDimensions()
  const {width, height} = useContext(ResizerContext);
  console.log(width);
  const sizes = useMemo(() => {
    return {
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
          minWidth: height/6,
        },
        recordButton: {
          fontSize: height/10,
          minWidth: width,
        },
      }
    };
  }, [width, height]);
  return sizes;
}
