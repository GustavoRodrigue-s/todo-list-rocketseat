import { ITask } from "../types"

export const reorganizeTasks = (tasks: ITask[]) => {
  return tasks.sort((a, b) => {
    if (a.complete) return 0
    if (b.complete) return -1
    return 1
  })
}