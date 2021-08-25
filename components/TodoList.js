import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoList = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity onPress={() => deleteItem(item.id)}>
      <View style={styles.todos}>
        <MaterialIcons name="delete" size={23} color="#333" />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  todos: {
    marginTop: 5,
    marginBottom: 7,
    padding: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderStyle: "dashed",
    borderRadius: 5,
    flexDirection: "row",
  },
  text: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: "600",
  },
});
