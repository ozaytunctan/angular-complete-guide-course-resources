export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export enum TaskStatusLabel {
  OPEN = 'Open',
  IN_PROGRESS = 'Working on it',
  DONE = 'Completed',
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
