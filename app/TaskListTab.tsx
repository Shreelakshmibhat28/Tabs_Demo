import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./Styles";
import { useNavigation } from "@react-navigation/native";
import {Card, IconButton} from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface Task {
  title: string;
  description: string;
}

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setEditIndex?: React.Dispatch<React.SetStateAction<number | null>>;
}

const TaskListScreen: React.FC<TaskListProps> = ({ tasks, setTasks, setEditIndex }) => {

  const navigation = useNavigation();

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index: number) => {
    if (setEditIndex) {
      setEditIndex(index); 
    }
    navigation.navigate("Add Task" as never); 
  };

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task List</Text>
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <Card style={styles.taskcard}>
          <View style={styles.task}>
          <View>
                <Text style={styles.taskTitle}>{item.title}</Text>
                <Text style={styles.taskDescription}>{item.description}</Text>
              </View>
            <View style = {styles.taskbuttons}>
            <IconButton
                  icon="pencil"
                  size={20}
                  iconColor="blue"
                  onPress={() => handleEditTask(index)
                  
                  }
                  
                />
                <IconButton
                  icon="trash-can"
                  size={20}
                  iconColor="red"
                  onPress={() => handleDeleteTask(index)
                    
                  }
                 
                  
                />
                </View>
          </View>
          </Card>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default TaskListScreen;