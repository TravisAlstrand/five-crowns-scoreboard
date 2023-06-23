import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import PlayerAdd from "./components/PlayerAdd";
import { usePlayerContext } from "./context";
import { styles } from "./stylesheet/styles";

export default function PlayerSetup() {

  const { gamePlayers, setGamePlayers } = usePlayerContext();
  const [players, setPlayers] = useState([{}, {}]);

  function handleUpdatePlayer(text, index) {
    let newArray = [...players]
    const playerObject = {
      "name": text,
      "score": 0,
      "position": index
    }
    newArray[index] = playerObject;
    setPlayers(newArray);
  }

  function handleRemovePlayer(index) {
    console.log(index);
    let newArray = [...players];
    newArray.splice(index, 1);
    setPlayers(newArray);
  }

  function handleAddPlayer() {
    const newPlayer = {};
    let newArray = [...players, newPlayer];
    setPlayers(newArray);
  }

  function updateContext() {
    handlePlayersChange(players);
  }

  return (
    <View style={styles.growContainer}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Let's set up the players!</Text>

        {players.map((player, index) => {
          return (
            <View key={index}>
              {index === 0 ? <Text>Starting Dealer</Text> : <Text>Player {index + 1}</Text>}
              <View style={styles.inputBtnView}>
                <PlayerAdd editPlayer={handleUpdatePlayer} index={index} player={player} />
                <TouchableOpacity style={styles.plusBtn} onPress={() => handleRemovePlayer(index)}>
                  <Text style={styles.plusBtnText}>x</Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        })}
        {players.length <= 7 ?
          <TouchableOpacity onPress={handleAddPlayer} style={styles.plusBtn}>
            <Text style={styles.plusBtnText}>+</Text>
          </TouchableOpacity> :
          <></>}

        <Link href="/Scoreboard" asChild>
          <TouchableOpacity style={styles.btnLrg} onPress={updateContext}>
            <Text style={styles.btnLrgText}>Start Game</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}