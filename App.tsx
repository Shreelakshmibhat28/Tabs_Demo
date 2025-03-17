import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import TaskInputScreen from "./app/AddTaskTab";
import TaskListScreen from "./app/TaskListTab";
import AppBar from "./app/AppBar";
import styles from "./app/Styles";
import { View } from "react-native";

const Tab = createMaterialTopTabNavigator();

const App = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  
  return (
    <NavigationContainer>
      
      <AppBar />
      <View style={styles.containertab}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabLabel,
          tabBarIndicatorStyle: styles.tabIndicator,
        }}
      >
       <Tab.Screen name="Add Task" >
          {() => <TaskInputScreen tasks={tasks} setTasks={setTasks} editIndex={editIndex} setEditIndex={setEditIndex}/>}
        </Tab.Screen>
        <Tab.Screen name="Task List">
          {() => <TaskListScreen tasks={tasks} setTasks={setTasks} setEditIndex={setEditIndex}/>}
        </Tab.Screen>
      </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};



export default App;