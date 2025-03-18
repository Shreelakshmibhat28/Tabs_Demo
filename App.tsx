
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppBar from "./app/AppBar";
import Tabs from "./app/Tabs";

interface Task {
  title: string;
  description: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  return (
    <NavigationContainer>
      <AppBar />
      <Tabs tasks={tasks} setTasks={setTasks} editIndex={editIndex} setEditIndex={setEditIndex} />
    </NavigationContainer>
  );
};

export default App;
