import { Routes } from '@angular/router';
import { HomeComponent } from './task/home/home.component';
import { TaskFormComponent } from './task-form/task-form.component';

export const routes: Routes = [
    { path: 'tasks', component: HomeComponent },
    { path: 'add-task', component: TaskFormComponent },
    { path: 'edit-task/:id', component: TaskFormComponent },
    { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];