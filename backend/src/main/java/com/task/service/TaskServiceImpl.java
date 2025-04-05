package com.task.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.task.document.Task;
import com.task.repository.TaskRepository;

@Service
public class TaskServiceImpl implements TaskService{
	
	@Autowired
	private TaskRepository taskRepository;

	@Override
	public List<Task> fetchAllTasks() {
		return taskRepository.findAll();
	}

	@Override
	public Task fetchById(String id) {
		return taskRepository.findById(id).get();
	}

	@Override
	public Task createTask(Task task) {
		return taskRepository.save(task);
	}

	@Override
	public Task updateTask(Task task) {
		return taskRepository.save(task);
	}

	@Override
	public String deleteTask(Task task) {
		taskRepository.delete(task);
		return "Task is Deleted Successfully for id :" + task.getId();
	}

}
