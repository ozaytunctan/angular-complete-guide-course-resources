import {Routes} from '@angular/router';

import {TasksComponent, resolveUserTasks} from '../tasks/tasks.component';
import {NewTaskComponent, canLeaveEditPage} from '../tasks/new-task/new-task.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks', // <your-domain>/users/<uid>/tasks
    // component: TasksComponent,
    loadComponent: () => import('../tasks/tasks.component').then(m => m.TasksComponent),//lazy load
    runGuardsAndResolvers: 'always',
    resolve: {
      userTasks: resolveUserTasks,
    },
  },
  {
    path: 'tasks/new',
    // component: NewTaskComponent,
    loadComponent: () =>import('../tasks/new-task/new-task.component').then(m => m.NewTaskComponent),//lazy load
    canDeactivate: [canLeaveEditPage]
  },
];
