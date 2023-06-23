import { Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { styles } from "./stylesheet/styles"

export default function Page() {
  return (
    <View style={styles.growContainer}>
      <View style={styles.mainContainer}>
        <Text style={styles.mainTitle}>Five Crowns Scoreboard</Text>
        <Link href="/PlayerSetup" asChild>
          <TouchableOpacity style={styles.btnLrg}>
            <Text style={styles.btnLrgText}>New Game</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
