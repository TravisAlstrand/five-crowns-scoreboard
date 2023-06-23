import { createContext, useState, useContext } from 'react';

export const PlayerContext = createContext();

export const PlayerContextProvider = ({ children }) => {
  const [gamePlayers, setGamePlayers] = useState([]);

  return (
    <PlayerContext.Provider value={{ gamePlayers, setGamePlayers }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayerContext = () => useContext(PlayerContext);