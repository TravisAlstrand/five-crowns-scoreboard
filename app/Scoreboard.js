import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';

function Scoreboard() {

  const [wildCard, setWildCard] = useState(3);
  const [players, setPlayers] = useState([]);
  const route = useRoute();

  useEffect(() => {
    setPlayers(route.params.players);
    console.log(players)
  }, [wildCard]);

  return (
    <SafeAreaView>
      <View style={styles.main}>
        <Text style={styles.title}>{wildCard}s are wild!</Text>
        <View style={styles.scoreboard}>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 60
  },
  title: {
    marginBottom: 40,
    fontSize: 50,
    fontWeight: "bold"
  },
  scoreboard: {
    borderWidth: 5,
    width: "90%"
  }
});

export default Scoreboard;