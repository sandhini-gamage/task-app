package com.task.service;

import java.time.LocalDateTime;  // Import for LocalDateTime
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.task.document.Task;
import com.task.repository.TaskRepository;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public List<Task> fetchAllTasks() {
        List<Task> tasks = taskRepository.findAll();
        return tasks;
    }

    @Override
    public Task fetchById(String id) {
        Optional<Task> optionalTask = taskRepository.findById(id);
        if (!optionalTask.isPresent()) {
            throw new RuntimeException("Task not found with ID: " + id);  // Improved exception
        }
        return optionalTask.get();
    }

	@Override
	public Task createTask(Task task) {
		Task createdTask = Task.builder()
			.title(task.getTitle())
			.description(task.getDescription())
			.status(task.getStatus())
			.createdAt(LocalDateTime.now())  // Always set, regardless of input
			.build();
		System.out.println("Created task: " + createdTask);  // Full object debug
		try {
			Task savedTask = taskRepository.save(createdTask);
			System.out.println("Saved task: " + savedTask);  // Confirm after save
			return savedTask;
		} catch (Exception e) {
			System.err.println("Error creating task: " + e.getMessage());
			throw e;
		}
	}

    @Override
    public Task updateTask(String id, Task task) {
        System.out.println("Updating task ID: " + id);
        Task taskToUpdate = fetchById(id);  // Fetch existing task
        // Update fields if present in request, leave createdAt unchanged
        if (task.getTitle() != null) {
            taskToUpdate.setTitle(task.getTitle());
        }
        if (task.getDescription() != null) {
            taskToUpdate.setDescription(task.getDescription());
        }
        if (task.getStatus() != null) {
            taskToUpdate.setStatus(task.getStatus());
        }
        try {
            return taskRepository.save(taskToUpdate);
        } catch (Exception e) {
            System.err.println("Error updating task: " + e.getMessage());
            throw e;
        }
    }

    @Override
    public String deleteTaskById(String id) {
        Task taskToDelete = fetchById(id);
        taskRepository.delete(taskToDelete);
        return "Task is Deleted Successfully for id: " + id;
    }
}