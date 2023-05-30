import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from "expo-router";

function PlayerSelect() {

  const numOfBtns = [2, 3, 4, 5, 6, 7, 8];

  return (
    <View style={styles.main}>

      <Text style={styles.title}>Number of Players</Text>
      <ScrollView style={styles.scrollView}>
        {numOfBtns.map((num, index) => {
          return (
            <Link href="/PlayerSelect" key={index} asChild>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>{num}</Text>
              </TouchableOpacity>
            </Link>
          );
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    marginBottom: 40,
    fontSize: 64,
    fontWeight: "bold",
    textAlign: "center"
  },
  scrollView: {
    maxHeight: "50%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#eee"
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
    width: 300,
    height: 75,
    borderRadius: 50,
    backgroundColor: "#000"
  },
  btnText: {
    fontSize: 30,
    color: "#fff"
  }
})

export default PlayerSelect;