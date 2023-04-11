import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import {useEffect, useState} from 'react';

const LOCAL_STORAGE_KEY = "todo:saved"
export interface ITask{
  id: string;
  title: string;
  isCompleted: boolean;

}

export function App(){
  const [tasks, setTasks] = useState<ITask[]>([]);

const loadSavedTask = () =>{
  const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (saved){
    setTasks(JSON.parse(saved))
  }
}

useEffect(()=>{
  loadSavedTask();
},[]);

const saveTasks = (newTasks: ITask[]) =>{
setTasks(newTasks);
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
}


function addTask(taskTitle:string){
saveTasks([
  ...tasks, {
    id: crypto.randomUUID(),
    title: taskTitle,
    isCompleted: false, 

  }
])
}

function deleteTaskById(taskId: string){
  const newTasks = tasks.filter(task=>task.id!==taskId);
  saveTasks(newTasks)
}

function toggleTaskCompletedById(taskId:string){
  const newTasks = tasks.map((task)=>{
    if(task.id === taskId){
        return{
          ...task,  isCompleted: !task.isCompleted
        };
    }
    return task;
  });
  saveTasks(newTasks);
}

return (
    <div className="App">

      <Header onAddTask={addTask}/>
      <Tasks
        tasks = {tasks}
        onDelete={deleteTaskById}
        onComplete = {toggleTaskCompletedById}

      />
    </div>
  )
}


