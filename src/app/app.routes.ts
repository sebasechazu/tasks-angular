import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: 'tasks', loadChildren: () => import('./features/task/task.module').then(m => m.TaskModule) },

];
