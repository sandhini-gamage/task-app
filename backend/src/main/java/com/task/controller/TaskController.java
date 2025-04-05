package com.task.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.task.document.Task;
import com.task.service.TaskService;

@CrossOrigin(maxAge = 3360)
@RestController
public class TaskController {
	@Autowired
	private TaskService taskService;
	
	@GetMapping("/api/v1/tasks")
	public ResponseEntity<List<Task>> fetchAllTasks(){
		return ResponseEntity.ok(taskService.fetchAllTasks());
	}

	@PostMapping("/api/v1/tasks")
	public ResponseEntity<Task> createTask(@RequestBody Task task){
		return ResponseEntity.ok(taskService.createTask(task));
	}
	
	@PutMapping("/api/v1/tasks/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable("id") String id, @RequestBody Task task) { 
        Task taskObject = taskService.fetchById(id);
        if (taskObject != null) {
            taskObject.setTitle(task.getTitle());
            return ResponseEntity.ok(taskService.updateTask(taskObject));
        }
        return ResponseEntity.notFound().build();
    }

	@DeleteMapping("/api/v1/tasks/{id}")
	public ResponseEntity<String> deleteTask(@PathVariable("id") String id){
		Task taskObject = taskService.fetchById(id);
		String deleteTaskMsgString = null;
		if(taskObject != null) {
			deleteTaskMsgString = taskService.deleteTask(taskObject);
		}
		return ResponseEntity.ok(deleteTaskMsgString);
	}

}