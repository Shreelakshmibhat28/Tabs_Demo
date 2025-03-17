import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./Styles";

interface TaskInputProps {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
  editIndex: number | null;
  setEditIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const TaskInputScreen: React.FC<TaskInputProps> = ({ tasks, setTasks, editIndex, setEditIndex }) => {
  const [task, setTask] = useState<string>("");

  useEffect(() => {
    if (editIndex !== null) {
      setTask(tasks[editIndex]);
    }
  }, [editIndex]);

  const handleAddTask = () => {
    if (task) {
      if (editIndex !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, task]);
      }
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
        <Text style={styles.addButtonText}>{editIndex !== null ? "Update Task" : "Add Task"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskInputScreen;