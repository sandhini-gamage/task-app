import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './home/home.component';
   

@NgModule({ 
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatButtonModule,
        MatSnackBarModule,
        HomeComponent
  ]
})
export class TaskModule { }
