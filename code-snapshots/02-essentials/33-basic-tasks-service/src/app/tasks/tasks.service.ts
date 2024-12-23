import { Injectable } from '@angular/core';
import {type NewTaskData, Task} from './task/task.model';
import {TASK_LIST_DATA} from "./task.data";


@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks:Task[] = TASK_LIST_DATA;

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
