import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./Styles";

interface TaskInputProps {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

const TaskInputScreen: React.FC<TaskInputProps> = ({ tasks, setTasks }) => {
  const [task, setTask] = useState<string>("");

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add & Organize Your Tasks!!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskInputScreen;