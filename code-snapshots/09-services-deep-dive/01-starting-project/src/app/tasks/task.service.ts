import {Injectable, signal} from "@angular/core";
import {Task, TaskStatus} from "./task.model";

//
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks = signal<Task[]>([]);
  allTasks = this.tasks.asReadonly();


  addTask(taskData: { title: string, description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN'
    }
    this.tasks.update(tasks => [...tasks, newTask]);
  }

  changeTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taskId ? {...task, status: newStatus} : task)
    );
  }

  removeTask(taskId: string) {
    let tasks = this.tasks().filter(task => task.id !== taskId);
    this.tasks.set(tasks);
  }


}
