import { AfterViewInit, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatTableModule
    , CommonModule, FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  displayedColumns: string[] = ['title', 'description', 'status', 'edit', 'delete'];
  dataSource = new MatTableDataSource<Task>();

  constructor(private taskService : TaskService) {}

  tasks:Task[] = [];
  task: Task = {
    id: 0,
    title: '', 
    description: '', 
    status: '',
  }

  ngAfterViewInit() : void {
   this.taskService.fetchAllTasks().subscribe((data) => {
      this.tasks = data;
      this.dataSource = new MatTableDataSource<Task>(data);
    })
  }

  addOrEditTask(tsk: Task) {
    if (tsk.id!==0) {
      this.taskService.updateTask(tsk).subscribe({
        next: (data) => {
          console.log('Task updated successfully:', data);
          window.location.reload();
        },
        error: (error) => {
          console.error('Error updating task:', error);
        }
      })
    } else {
      this.taskService.createTask(tsk).subscribe({
        next: (data) => {
          console.log('Task created successfully:', data);
          window.location.reload();
        },
        error: (error) => {
          console.error('Error creating task:', error);
        }
      })
    }
  }

  setTask(task:Task){
    this.task.title = task.title;
    this.task.description = task.description;
    this.task.status = task.status;
    this.task.id = task.id;
  }

  deleteTask(id: Number) {
    const isConfirmed = confirm("Are you sure you want to delete this task?");
    if (isConfirmed) {
      this.taskService.deleteTask(id).subscribe((data) => {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      })
      window.location.reload();
    }
  }
}
