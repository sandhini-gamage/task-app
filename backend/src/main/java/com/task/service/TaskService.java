package com.task.service;

import java.util.List;

import com.task.document.Task;

public interface TaskService {
	
	List<Task> fetchAllTasks();
	Task fetchById(String id); 
	Task createTask(Task task);
	Task updateTask(Task task);
	String deleteTask(Task task);
}
