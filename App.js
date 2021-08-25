import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [todoData, setData] = useState([
    { text: "Order Food", id: "1" },
    { text: "Pay Rent", id: "2" },
  ]);

  const pushData = (text) => {
    if (text.length > 3) {
      setData((prev) => {
        return [{ text: text, id: Math.random().toString() }, ...prev];
      });
    } else {
      Alert.alert("OOPS!", "Todo less than 3 char", [
        {
          text: "ok",
        },
      ]);
    }
  };
  const deleteItem = (id) => {
    setData((prev) => {
      return prev.filter((todo) => todo.id != id);
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Todo</Text>
        </View>
        <View style={styles.body}>
          <TodoInput pushData={pushData} />
          <FlatList
            style={styles.list}
            data={todoData}
            renderItem={({ item }) => (
              <TodoList item={item} deleteItem={deleteItem} />
            )}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "0",
  },
  header: {
    backgroundColor: "tomato",
    padding: 10,
  },
  headerText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 25,
    textAlign: "center",
  },
  body: {
    flex: 1,
    padding: 35,
  },
  list: { flex: 1 },
});
