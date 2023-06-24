import { View, TextInput } from "react-native";
import { styles } from "../stylesheet/styles";

export default function PlayerAdd({ editPlayer, index, player }) {
  function handleChange(text) {
    editPlayer(text, index)
  }

  return (
    <View>
      <TextInput
        onChangeText={handleChange}
        style={styles.playerInput}
        placeholder="Edit Player Name..."
        value={player.name ? player.name : ""}
        maxLength={10}
      />
    </View>
  );
}
