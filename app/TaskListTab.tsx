import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./Styles";

interface TaskListProps {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

const TaskListScreen: React.FC<TaskListProps> = ({ tasks, setTasks }) => {
  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task List</Text>
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <View style={styles.task}>
            <Text style={styles.itemList}>{item}</Text>
            <TouchableOpacity onPress={() => handleDeleteTask(index)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default TaskListScreen;
