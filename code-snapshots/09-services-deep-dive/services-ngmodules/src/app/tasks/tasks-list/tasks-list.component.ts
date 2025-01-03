import {Component, computed, inject, signal} from '@angular/core';

import {TASK_STATUS_OPTIONS, taskStatusOptionsProvider} from '../task.model';
import {TasksServiceToken} from '../../app.module';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  providers: [taskStatusOptionsProvider]
})
export class TasksListComponent {
  private tasksService = inject(TasksServiceToken);
  private selectedFilter = signal<string>('all');
  taskStatusOptions = inject(TASK_STATUS_OPTIONS);
  tasks = computed(() => {
    const taskOptionIndex = this.taskStatusOptions
      .findIndex(statusOption => this.selectedFilter() === statusOption.value);

    if (taskOptionIndex >= 0) {
      const taskStatusOption = this.taskStatusOptions[taskOptionIndex];
      return this.tasksService
        .allTasks()
        .filter((task) => task.status === taskStatusOption.taskStatus);
    }

    return this.tasksService.allTasks();


    /*switch (this.selectedFilter()) {
      case 'open':
        return this.tasksService
          .allTasks()
          .filter((task) => task.status === 'OPEN');
      case 'in-progress':
        return this.tasksService
          .allTasks()
          .filter((task) => task.status === 'IN_PROGRESS');
      case 'done':
        return this.tasksService
          .allTasks()
          .filter((task) => task.status === 'DONE');
      default:
        return this.tasksService.allTasks();
    }*/
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
