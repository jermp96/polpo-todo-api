import { Task } from 'src/to-dos/entities/task.entity';
import { ToDo } from 'src/to-dos/entities/to-do.entity';

export const TODOS: ToDo[] = [
  {
    id: 1,
    title: 'Universidad',
    keywords: ['estudios', 'importante', 'academia'],
    userId: 1,
  },
  {
    id: 2,
    title: 'Casa',
    keywords: ['oficio', 'necesario', 'orden'],
    userId: 1,
  },
];

export const TASKS: Task[] = [
  {
    id: 1,
    title: 'Terminar tesis de grado',
    completed: 0,
    todoId: 1,
    userId: 1,
  },
];
