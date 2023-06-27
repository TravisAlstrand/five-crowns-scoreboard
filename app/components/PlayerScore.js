import { View, Text, TextInput } from 'react-native';
import { styles } from "../stylesheet/styles";


export default function PlayerScore({ player }) {
  return (
    <View style={styles.scoreEdit}>
      <View style={styles.textContainer}>
        <Text>{player.name}</Text>
      </View>
      <View style={styles.editInputContainer}>
        <TextInput
          style={styles.playerInput}
          keyboardType='numeric'
          maxLength={10}
        />
      </View>
    </View>
  )
};