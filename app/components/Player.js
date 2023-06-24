import { View, Text, Image } from "react-native";
import { styles } from "../stylesheet/styles";

export default function Player({ player }) {
  return (
    <View style={styles.playerContainer}>
      <View style={styles.playerSection}>
        {player ?
          <Text>{player.name}</Text> :
          <Text style={styles.bold}>Player</Text>
        }
      </View>
      <View style={styles.playerSection}>
        {player ?
          <Text>{player.isDealer === true ?
            <Image source={require('../icons/dealer.png')} resizeMode="contain" style={styles.icon} /> : ""}
          </Text> :
          <Text style={styles.bold}>Dealer</Text>
        }
      </View>
      <View style={styles.playerSection}>
        {player ?
          <Text>{player.isLeader === true ?
            <Image source={require('../icons/crown.png')} resizeMode="contain" style={styles.icon} /> : ""}
          </Text> :
          <Text style={styles.bold}>Leader</Text>
        }
      </View>
      <View style={styles.playerSection}>
        {player ?
          <Text>{player.score}</Text> :
          <Text style={styles.bold}>Current Score</Text>
        }
      </View>
    </View >
  )
}