import {Component, computed, inject, input} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {Task, TaskStatus, TaskStatusLabel} from '../../task.model';
import {TaskService} from "../../task.service";

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  task = input.required<Task>();
/*
  taskStatus = computed(() => {
    switch (this.task().status) {
      case 'OPEN':
        return 'Open';
      case 'IN_PROGRESS':
        return 'Working on it';
      case 'DONE':
        return 'Completed';
      default:
        return 'Open';
    }
  });
*/

  taskStatus = computed(() => TaskStatusLabel[this.task().status]);
  private taskService = inject(TaskService);
  onChangeTaskStatus(taskId: string, status: string) {
    let newStatus: TaskStatus = 'OPEN';
    switch (status) {
      case 'open':
        newStatus = 'OPEN';
        break;
      case 'in-progress':
        newStatus = 'IN_PROGRESS';
        break;
      case 'done':
        newStatus = 'DONE';
        break;
      default:
        break;
    }

    this.taskService.changeTaskStatus(taskId, newStatus);
  }
}
