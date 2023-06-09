import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import PlayerAdd from "./components/PlayerAdd";
import { styles } from "./stylesheet/styles";

export default function PlayerSetup() {

  const [players, setPlayers] = useState([{}, {}]);
  const [errors, setErrors] = useState([]);
  const navigation = useNavigation();

  function goToScoreboardScreen() {
    let errorsArray = [];
    let foundBlankName = false;

    // check if any player inputs are blank
    players.forEach(player => {
      if (!player.name) {
        foundBlankName = true;
      }
    });

    if (foundBlankName) {
      errorsArray.push("* Please provide a name for every player or remove them.")
    }

    if (players.length < 2) {
      errorsArray.push("* You need at least two players.")
    }

    if (errorsArray.length) {
      setErrors(errorsArray);
    } else {
      navigation.navigate('Scoreboard', { players });
    }
  }

  function handleUpdatePlayer(text, index) {
    let newArray = [...players]
    let playerObject = {
      "name": text,
      "score": 0,
      "isDealer": false,
      "isLeader": false
    }
    if (index === 0) {
      playerObject.isDealer = true;
    }
    newArray[index] = playerObject;
    setPlayers(newArray);
  }

  function handleRemovePlayer(index) {
    let newArray = [...players];
    newArray.splice(index, 1);
    setPlayers(newArray);
  }

  function handleAddPlayer() {
    const newPlayer = {};
    let newArray = [...players, newPlayer];
    setPlayers(newArray);
  }

  return (
    <View style={styles.growContainer}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Let's set up the players!</Text>
        {errors.map((error, index) => {
          return (
            <View style={styles.errorContainer} key={index}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )
        })}
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

        <TouchableOpacity style={styles.btnLrg} onPress={goToScoreboardScreen}>
          <Text style={styles.btnLrgText}>Start Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}