import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Five Crowns Scoreboard</Text>
        <Link href="/PlayerSelect" asChild>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>New Game</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    marginBottom: 40,
    fontSize: 64,
    fontWeight: "bold",
    textAlign: "center"
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 75,
    borderRadius: 50,
    backgroundColor: "#000"
  },
  btnText: {
    fontSize: 30,
    color: "#fff"
  }
});
