import { Trash } from "phosphor-react";
import { ITask } from "../../types"
import { Checkbox } from "../Checkbox"

import styles from './styles.module.css'
import { useLayoutTransition } from "../../hooks";
import { useEffect } from "react";

interface Task {
  task: ITask;
  onDelete: (taskId: number) => void;
  onToggle: (taskId: number) => void;
}

const duration = 200;
const easing = 'ease' 

export const Task: React.FC<Task> = ({ task, onToggle, onDelete }) => {
  const { ref } = useLayoutTransition<HTMLDivElement>({ duration, easing })

  useEffect(() => {
    if (!ref.current) return

    ref.current.animate(
      [{ transform: 'scale(0.95)', opacity: 0 }, { transform: '', opacity: 1 }],
      { id: "init", composite: 'accumulate', duration, easing }
    )
  }, [ref])

  return (
    <div className={styles.task} ref={ref}>
      <div>
        <Checkbox 
          checked={task.complete} 
          onChange={() => onToggle(task.id)} 
        />
        <span className={task.complete ? styles.titleWithLineThrough : ""}>{task.title}</span>
      </div>
      <button onClick={() => onDelete(task.id)}>
        <Trash size={16} />
      </button>
    </div>
  )
  
}