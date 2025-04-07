
## Task App

A full-stack Task Management application built with Angular (frontend) and Spring Boot (backend). The app allows users to create, view, edit, and delete tasks, with a modern UI powered by Angular Material and a RESTful API backed by Spring Boot and MongoDB.


## Overview

The Task App is a simple yet powerful application for managing tasks. Users can:

View a list of tasks in a table with filtering by status.
Add new tasks via a form.
Edit existing tasks.
Delete tasks with confirmation.
See task statuses with color-coded badges (TO_DO, IN_PROGRESS, DONE).
The frontend is built with Angular and Angular Material for a responsive and modern UI, while the backend uses Spring Boot with MongoDB for data persistence.
## Features

- Task List: Display tasks in a table with columns for title, description, status, and actions (edit/delete).

- Add Task: Navigate to a form to create a new task.

- Edit Task: Update existing tasks via a form.

- Delete Task: Remove tasks with a confirmation prompt.

- Status Filter: Filter tasks by status (All, TO_DO, IN_PROGRESS, DONE).

- Color-Coded Status: Visual badges for task statuses (red for TO_DO, orange for IN_PROGRESS, green for DONE).

- Responsive UI: Built with Angular Material for a polished and responsive design.

- Error Handling: Displays success/error messages using MatSnackBar.


## Tech Stack

- Frontend:
    - Angular 17+
    - Angular Material (for UI components)
    - TypeScript
- Backend:
    - Spring Boot 3+
    - MongoDB (database)
    - Java
- Tools:
    - Node.js and npm (for Angular)
    - Maven (for Spring Boot)
    - MongoDB (local or cloud instance)
## Usage

- View Tasks:
    - The homepage (/tasks) displays a table of tasks with columns for Title, Description, Status, Edit, and Delete.
    - Use the "Filter by Status" dropdown to filter tasks by status (All, TO_DO, IN_PROGRESS, DONE).
- Add a Task:
    - Click the "Add Task" button in the toolbar.
    - You’ll be redirected to /add-task.
    - Fill in the form (Title is required) and  click    "Create Task".
- Edit a Task:
    - In the task list, click the "Edit" icon (pencil) on a task.
    - You’ll be redirected to /edit-task/:id.
    - Update the task details and click "Save Changes".
- Delete a Task:
    - In the task list, click the "Delete" icon (trash) on a task.
    - Confirm the deletion in the prompt.
    - The task will be removed, and the list will update.


## Screenshots

![App Screenshot](https://github.com/sandhini-gamage/task-app/blob/2e09bceed22a3cfde6d6c7fc4b7be42948ed845b/Screenshot%202025-04-07%20163258.png)

![App Screenshot](https://github.com/sandhini-gamage/task-app/blob/2e09bceed22a3cfde6d6c7fc4b7be42948ed845b/Screenshot%202025-04-07%20164111.png)
