import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TaskService } from '../task/task.service';
import { Task } from '../task/task';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-task-form',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatSnackBarModule,
        RouterModule
    ],
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
    taskForm: FormGroup;
    taskId: string | null;
    isEditMode: boolean = false;

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private taskService: TaskService,
        private router: Router,
        private snackBar: MatSnackBar
    ) {
        this.taskForm = this.fb.group({
            id: [''],
            title: ['', [Validators.required, Validators.maxLength(100)]],
            description: ['', Validators.maxLength(500)],
            status: ['TO_DO'],
            createdAt: [{ value: '', disabled: true }]
        });
        this.taskId = this.route.snapshot.paramMap.get('id');
        this.isEditMode = !!this.taskId;
    }

    ngOnInit(): void {
        console.log('TaskFormComponent initialized. Edit mode:', this.isEditMode, 'Task ID:', this.taskId);
        if (this.isEditMode && this.taskId) {
            this.taskService.getTaskById(this.taskId).subscribe({
                next: (task) => this.taskForm.patchValue(task),
                error: (err: any) => this.showError(err.message)
            });
        } else {
            this.taskForm.reset({ status: 'TO_DO' });
        }
    }

    onSubmit(): void {
        if (this.taskForm.valid) {
            const task: Task = this.taskForm.getRawValue();
            delete task.createdAt;

            const action = this.isEditMode && this.taskId
                ? this.taskService.updateTask(task)
                : this.taskService.createTask(task);

            action.subscribe({
                next: () => {
                    this.snackBar.open(this.isEditMode ? 'Task updated' : 'Task created', 'Close', { duration: 3000 });
                    this.router.navigate(['/tasks']);
                },
                error: (err) => this.showError(err.message)
            });
        }
    }

    cancel(): void {
        this.router.navigate(['/tasks']);
    }

    private showError(message: string): void {
        this.snackBar.open(message, 'Close', { duration: 3000, panelClass: ['error-snackbar'] });
    }
}