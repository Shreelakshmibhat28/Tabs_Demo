import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import TaskInputScreen from "./app/AddTaskTab";
import TaskListScreen from "./app/TaskListTab";
import AppBar from "./app/AppBar";

const Tab = createMaterialTopTabNavigator();

const App = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <NavigationContainer>
      <AppBar />
      <Tab.Navigator>
        <Tab.Screen name="Add Task" >
          {() => <TaskInputScreen tasks={tasks} setTasks={setTasks} />}
        </Tab.Screen>
        <Tab.Screen name="Task List">
          {() => <TaskListScreen tasks={tasks} setTasks={setTasks} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
