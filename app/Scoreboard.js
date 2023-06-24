import { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { styles } from "./stylesheet/styles";
import Player from './components/Player';

function Scoreboard() {

  const [wildCard, setWildCard] = useState(3);
  const [players, setPlayers] = useState([
    { "name": "Taco Man", "score": 80, "isDealer": true, "isLeader": false },
    { "name": "GunnerBoi", "score": 70, "isDealer": false, "isLeader": false },
    { "name": "LadyKrista", "score": 60, "isDealer": false, "isLeader": false },
    { "name": "Cheese Dude", "score": 50, "isDealer": false, "isLeader": false },
    { "name": "Rizzo", "score": 40, "isDealer": false, "isLeader": false },
    { "name": "Godzilla", "score": 30, "isDealer": false, "isLeader": false },
    { "name": "Gut Punch", "score": 20, "isDealer": false, "isLeader": false },
    { "name": "Donkey", "score": 10, "isDealer": false, "isLeader": true },
  ]);
  // const [players, setPlayers] = useState([]);
  const route = useRoute();

  useEffect(() => {
    if (!players.length) {
      setPlayers(route.params.players);
      console.log("Players Set");
    }
    console.log("useEffect Ran")
  }, [wildCard]);

  return (
    <SafeAreaView>
      <View style={styles.growContainer}>
        <Text style={styles.title}>{wildCard}s are wild!</Text>
        <View style={styles.scoreboard}>
          <Player />
          {players.map((player, index) => {
            return <Player player={player} key={index} />
          })}
        </View>
        <View style={styles.scoreboardBtns}>
          <TouchableOpacity style={styles.btnMed}>
            <Text style={styles.btnMedText}>End Round</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnMed}>
            <Text style={styles.btnMedText}>See All Scores</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Scoreboard;