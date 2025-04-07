import { AfterViewInit, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MatButtonModule,
        MatTableModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule
    ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
    displayedColumns: string[] = ['title', 'description', 'status', 'edit', 'delete'];
    dataSource = new MatTableDataSource<Task>();
    filteredDataSource = new MatTableDataSource<Task>();
    statusFilter: string = '';

    constructor(
        private taskService: TaskService,
        private router: Router,
        private snackBar: MatSnackBar
    ) {}

    ngAfterViewInit(): void {
        this.taskService.fetchAllTasks().subscribe({
            next: (data) => {
                this.dataSource = new MatTableDataSource<Task>(data);
                this.filteredDataSource = new MatTableDataSource<Task>(data);
            },
            error: (error) => {
                console.error('Error fetching tasks:', error);
                this.snackBar.open('Error fetching tasks', 'Close', { duration: 3000 });
            }
        });
    }

    applyFilter(): void {
        if (this.statusFilter) {
            this.filteredDataSource.data = this.dataSource.data.filter(task => task.status === this.statusFilter);
        } else {
            this.filteredDataSource.data = this.dataSource.data;
        }
    }

    addTask(): void {
        console.log('Navigating to /add-task');
        this.router.navigate(['/add-task']);
    }

    deleteTask(id: string | undefined): void {
        if (id && confirm("Are you sure you want to delete this task?")) {
            this.taskService.deleteTask(id).subscribe({
                next: (response) => {
                    this.snackBar.open(response, 'Close', { duration: 3000 });
                    this.taskService.fetchAllTasks().subscribe((data) => {
                        this.dataSource = new MatTableDataSource<Task>(data);
                        this.applyFilter();
                    });
                },
                error: (error) => {
                    console.error('Error deleting task:', error);
                    this.snackBar.open('Error deleting task', 'Close', { duration: 3000 });
                }
            });
        }
    }

    getStatusClass(status: string): string {
        switch (status) {
            case 'TO_DO':
                return 'status-to-do';
            case 'IN_PROGRESS':
                return 'status-in-progress';
            case 'DONE':
                return 'status-done';
            default:
                return '';
        }
    }
}