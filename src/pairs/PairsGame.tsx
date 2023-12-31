import React, { RefObject, useContext, useRef } from "react";
import { PairsGameState } from "./PairsGameState";

export const PairsGameContext = React.createContext<RefObject<PairsGameState>>({
  current: new PairsGameState(),
});

export const usePairsGame = () => {
  return useContext(PairsGameContext);
}

type PairsGameProps = {
  children: React.ReactNode;
}

export const PairsGame: React.FC<PairsGameProps> = ({ children }) => {
  const state = useRef(new PairsGameState());

  return (
    <PairsGameContext.Provider value={state}>
      {children}
    </PairsGameContext.Provider>
  );
};
