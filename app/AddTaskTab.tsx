import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./Styles";

interface Task{
    title: string;
    description: string;
}

interface TaskInputProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  editIndex: number | null;
  setEditIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const TaskInputScreen: React.FC<TaskInputProps> = ({ tasks, setTasks, editIndex, setEditIndex }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    if (editIndex !== null) {
      setTitle(tasks[editIndex].title);
      setDescription(tasks[editIndex].description);
    }
  }, [editIndex]);

  const handleAddTask = () => {
    let finalTitle = title.trim();
    let finalDescription = description.trim();

    if (!finalDescription) {
      finalDescription = finalTitle; // If no description, use title
    }

    if (!finalTitle) {
      finalTitle = finalDescription.substring(0, 10); // If no title, use first 10 chars of description
    }

    const newTask: Task = { title: finalTitle, description: finalDescription };

    if (editIndex !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = newTask;
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, newTask]);
      }
  
      setTitle("");
      setDescription("");
    };

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Add & Organize Your Tasks!!</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter task title"
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter task description"
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
            <Text style={styles.addButtonText}>{editIndex !== null ? "Update Task" : "Add Task"}</Text>
          </TouchableOpacity>
        </View>
      );
};

export default TaskInputScreen;