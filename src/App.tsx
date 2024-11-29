import { FormEvent, useCallback, useRef, useState } from "react"

import { Button, Header, Input, Tasks } from "./components"

import styles from './app.module.css'
import { PlusCircle } from "phosphor-react"
import { ITask } from "./types"
import { reorganizeTasks } from "./utils"

interface Form {
  title: HTMLInputElement
}

export const App: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([])
  const formRef = useRef<HTMLFormElement>(null)

  const handleTaskCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { title } = (e.target as unknown) as Form

    if (!title.value) {
      window.alert("Esse campo precisa estar preenchido!")
      return
    }

    const task: ITask = {
      id: Math.random() * 100,
      title: title.value,
      complete: false
    }

    setTasks(prevTasks => [task, ...prevTasks])

    formRef.current?.reset()
  }

  const handleTaskDelete = useCallback((taskId: number) => {
    setTasks(prevTasks => prevTasks.filter(({ id }) => id !== taskId))
  }, [])

  const handleTaskToggle = useCallback((taskId: number) => {
    setTasks(prevTasks => 
      reorganizeTasks(
        prevTasks.map(task => task.id === taskId ? { ...task, complete: !task.complete } : task)
      )
    )
  }, [])

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <header>
          <form ref={formRef} onSubmit={handleTaskCreate}>
            <Input placeholder="Adicione uma nova tarefa" name="title" />
            <Button type="submit">Criar <PlusCircle size={20} /></Button>
          </form>
        </header>
        <Tasks 
          tasks={tasks} 
          onTaskToggle={handleTaskToggle} 
          onTaskDelete={handleTaskDelete} 
        />
      </main>
    </div>
  )
}