package com.task.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.task.document.Task;
import com.task.service.TaskService;

@CrossOrigin(maxAge = 3360)
@RequestMapping("/api/v1/tasks")  
@RestController
public class TaskController {
    @Autowired
    private TaskService taskService;

    @GetMapping
    public ResponseEntity<List<Task>> fetchAllTasks() {
        List<Task> results = taskService.fetchAllTasks();
        return ResponseEntity.ok(results);
    }

    @PostMapping
    public ResponseEntity<Task> createTask(@RequestBody Task task) {
        Task result = taskService.createTask(task);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable("id") String id) {
        Task task = taskService.fetchById(id);
        return ResponseEntity.ok(task);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable("id") String id, @RequestBody Task task) {
        Task taskObject = taskService.updateTask(id, task);
        return ResponseEntity.ok(taskObject);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTask(@PathVariable("id") String id) {
        String deleteTaskMsgString = taskService.deleteTaskById(id);
        return ResponseEntity.ok(deleteTaskMsgString);
    }
}