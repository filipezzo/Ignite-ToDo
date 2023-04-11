import { ITask } from '../../App'
import styles from './task.module.css'
import {FiTrash2} from 'react-icons/fi'
import {BsFillCheckCircleFill} from 'react-icons/bs'
interface Props{
  task: ITask;
  onDelete: (taskId:string)=>void
  onComplete: (taskId:string)=>void
}

export function Task({task,  onDelete, onComplete}: Props){
 

  return(
      <div className={styles.task}>
        <button 
        className={styles.buttonCheck}
        onClick={()=>onComplete(task.id)}>
          {task.isCompleted ? <BsFillCheckCircleFill/> : <div/>}
        </button>
        <p className={task.isCompleted ? styles.completedText : "" }
        
        >{task.title}</p>
        <button className={styles.buttonDelete}
        onClick={()=>onDelete(task.id)}
        
        ><FiTrash2 size={20}/></button>
      </div>
    )
}