
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TaskInputScreen from "./AddTaskTab";
import TaskListScreen from "./TaskListTab";
import styles from "./Styles";
import { View } from "react-native";

interface Task {
  title: string;
  description: string;
}

interface TabsProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  editIndex: number | null;
  setEditIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const Tab = createMaterialTopTabNavigator();

const Tabs: React.FC<TabsProps> = ({ tasks, setTasks, editIndex, setEditIndex }) => {
  return (
    <View style={styles.containertab}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabLabel,
          tabBarIndicatorStyle: styles.tabIndicator,
        }}
      >
        <Tab.Screen name="Add Task">
          {() => <TaskInputScreen tasks={tasks} setTasks={setTasks} editIndex={editIndex} setEditIndex={setEditIndex} />}
        </Tab.Screen>
        <Tab.Screen name="Task List">
          {() => <TaskListScreen tasks={tasks} setTasks={setTasks} setEditIndex={setEditIndex} />}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
};

export default Tabs;
