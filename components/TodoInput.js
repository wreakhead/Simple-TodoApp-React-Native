import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const TodoInput = ({ pushData }) => {
  const [text, setText] = useState("");

  return (
    <View style={styles.inputBlock}>
      <TextInput
        style={styles.textInput}
        onChangeText={setText}
        value={text}
        placeholder="Add todo..."
      />
      <Button
        style={styles.button}
        onPress={() => pushData(text)}
        title="Add to list"
        color="tomato"
      />
    </View>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  inputBlock: {
    marginBottom: 20,
  },
  button: {
    fontWeight: "700",
  },
  textInput: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    height: 40,
  },
});
