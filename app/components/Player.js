import { View, Text } from "react-native";
import { styles } from "../stylesheet/styles";

export default function Player({ player }) {
  return (
    <View style={styles.playerContainer}>
      <View style={styles.playerSection}>
        {player ?
          <Text>{player.name}</Text> :
          <Text>Player</Text>
        }
      </View>
      <View style={styles.playerSection}>
        {player ?
          <Text>{player.isDealer === true ? "dealer" : ""}</Text> :
          <Text>Dealer</Text>
        }
      </View>
      <View style={styles.playerSection}>
        {player ?
          <Text>{player.isLeader === true ? "leader" : ""}</Text> :
          <Text>Leader</Text>
        }
      </View>
      <View style={styles.playerSection}>
        {player ?
          <Text>{player.score}</Text> :
          <Text>Current Score</Text>
        }
      </View>
    </View >
  )
}