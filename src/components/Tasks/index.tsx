import { ITask } from "../../types"

import clipboard from '../../assets/Clipboard.png'

import styles from './styles.module.css'
import { Task } from "../Task"

interface TasksProps {
  tasks: ITask[]
  onTaskToggle: (taskId: number) => void;
  onTaskDelete: (taskId: number) => void;
}

export const Tasks: React.FC<TasksProps> = ({ tasks, onTaskDelete, onTaskToggle }) => {
  const tasksCompleted = tasks.filter(({ complete }) => complete)
  const isEmpty = tasks.length === 0

  return (
    <div className={styles.tasks}>
      <header>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.completedTasks}>
          <strong>Concluídas</strong>
          <span>{tasks.length ? `${tasksCompleted.length} de ${tasks.length}` : 0}</span>
        </div>
      </header>
      <div>
        {isEmpty ? (
          <div className={styles.empty}>
            <img src={clipboard} />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong> Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        ) : (
          <div className={styles.list}>
            {tasks.map((task) => (
              <Task 
                key={task.id} 
                task={task} 
                onDelete={onTaskDelete} 
                onToggle={onTaskToggle} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}