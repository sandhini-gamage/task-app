import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './task/home/home.component';

export const routes: Routes = [
    {path: "tasks/home", component:HomeComponent},
    {path: "tasks", redirectTo: "tasks/home", pathMatch: "full"},
    {path: "", redirectTo: "tasks/home", pathMatch: "full"},
];
