import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

function Scoreboard() {

  const { number } = useLocalSearchParams();
  const [wildCard, setWildCard] = useState(3);

  useEffect(() => {

  }, [wildCard]);

  return (
    <View style={styles.main}>
      <Text style={styles.title}>{wildCard}s are wild!</Text>
      <ScrollView style={styles.scoreboard}>
        <View></View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 25,
    paddingBottom: 40
  },
  title: {
    marginBottom: 40,
    fontSize: 50,
    fontWeight: "bold"
  },
  scoreboard: {
    borderWidth: 5,
    width: "90%",
    height: "50%"
  }
});

export default Scoreboard;