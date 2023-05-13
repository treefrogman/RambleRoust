
import React, { createContext, useState } from "react";

interface Dimensions {
  width: number;
  height: number;
}

interface ResizerContextType {
  dimensions: Dimensions;
  setDimensions: React.Dispatch<React.SetStateAction<Dimensions>>;
}

export const ResizerContext = createContext<ResizerContextType>({
  dimensions: { width: 393, height: 777 },
  setDimensions: () => { },
});

export function ResizerContextProvider({ children }: { children: React.ReactNode }) {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 393,
    height: 777,
  });
  return (
    <ResizerContext.Provider value={{ dimensions, setDimensions }}>
      {children}
    </ResizerContext.Provider>
  );
}
