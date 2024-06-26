import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import {type Task} from './types'

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    return JSON.parse(storedTasks);
  }
  return [];
}

function updateStorage(tasks:Task[]):void{
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


function Component() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

  const addTask = (task: Task):void => {
    setTasks([...tasks, task]);
  }
  const toggleTask = ({id}:{id:string}) => {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    }))
  }

  useEffect(
    () => {
      updateStorage(tasks);
    },
    [tasks]
  )

  return (
    <section>
      <Form addTask={addTask} />
      <List tasks={tasks} toggleTask={toggleTask} />
    </section>
  );
}
export default Component;
