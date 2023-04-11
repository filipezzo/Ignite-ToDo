import styles from '../Header/header.module.css'
import Logo from '../../assets/Logo.svg'
import {AiOutlinePlusCircle} from "react-icons/ai"
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props{
  onAddTask: (taskTitle:string) => void;
}

export function Header({onAddTask}:Props){
  const [title, setTitle] = useState('');
  function handleSubmit(event:FormEvent){
    event.preventDefault();
    onAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event:ChangeEvent<HTMLInputElement>){
    setTitle(event.target.value);
  }
  return(
    <header className={styles.header}>
        <img src={Logo}/>
        <form 
         className={styles.newTaskForm}
         onSubmit={handleSubmit}
        >

          <input
            placeholder='add a new task'
            onChange={onChangeTitle}
            value={title}
          />

          <button>
            Create
            <AiOutlinePlusCircle
              size={16}
            />
            </button>

        </form>
    </header>
  )
}