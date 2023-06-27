import { useState, useEffect } from 'react';
import { ScrollView, View, Text, SafeAreaView, TouchableOpacity, Modal } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { styles } from "./stylesheet/styles";
import Player from './components/Player';
import PlayerScore from './components/PlayerScore';

function Scoreboard() {

  const [wildCard, setWildCard] = useState(3);
  const [modalVisible, setModalVisible] = useState(false);
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
      <View style={!modalVisible ? styles.growContainer : styles.noDisplay}>
        <Text style={styles.title}>{wildCard}s are wild!</Text>
        <View style={styles.scoreboard}>
          <Player />
          {players.map((player, index) => {
            return <Player player={player} key={index} />
          })}
        </View>
        <View style={styles.scoreboardBtns}>
          <TouchableOpacity style={styles.btnMed}>
            <Text
              style={styles.btnMedText}
              onPress={() => setModalVisible(true)}>
              End Round
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnMed}>
            <Text style={styles.btnMedText}>See All Scores</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <Text style={styles.title}>Enter each player's score this round</Text>
              {players.map((player, index) =>
                <PlayerScore player={player} key={index} />
              )}
              <View style={styles.scoreboardBtns}>
                <TouchableOpacity
                  style={styles.btnMed}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.btnMedText}>Start Next Round</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnMed}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.btnMedText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View >

    </SafeAreaView >
  )
}

export default Scoreboard;