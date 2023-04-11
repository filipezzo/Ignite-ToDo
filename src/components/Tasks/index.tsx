import styles from './tasks.module.css'
import { Task } from '../Task'
import { ITask } from '../../App'
import {TbClipboardText} from 'react-icons/tb'

interface Props{
  tasks: ITask[];
  onDelete: (taskId:string) =>void;
   onComplete: (taskId:string) =>void;
}
export function Tasks({tasks,onDelete,onComplete}:Props){
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter
  ((task)=>task.isCompleted).length;

return(
  <section className={styles.tasks}>
    <header className={styles.header}>
       <div>
        <p>Created Tasks</p>
        <span>{tasksQuantity}</span>
       </div>

        <div>
        <p className={styles.completedText}>Completed</p>
        <span>{completedTasks} of {tasksQuantity}</span>
       </div>
    </header>

    <div className={styles.list}>
      {tasks.map((task)=>(
      <Task key={task.id} task={task}
        onDelete={onDelete}
        onComplete={onComplete}
      /> 
      
      ))}
      
      {tasks.length <=0 && (
        <section className={styles.empty}>
          <TbClipboardText size={50}/>
          <div>
            <p>You don't have any tasks registered yet.</p>
            <span>Create tasks and organize your life :D</span>
          </div>
        </section>
      )
      
      }
     
    </div>
  </section>
)
}