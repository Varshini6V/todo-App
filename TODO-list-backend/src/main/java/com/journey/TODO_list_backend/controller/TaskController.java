package com.journey.TODO_list_backend.controller;


import com.journey.TODO_list_backend.model.Task;
import com.journey.TODO_list_backend.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//@CrossOrigin(origins = "http://localhost:5500") // or whatever your frontend port is

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;


    @PostMapping
    public Task addTask(@RequestBody Task task){
        return taskService.saveTask(task);
    }


    @GetMapping
    public List<Task> getTasks(){
        return taskService.getAllTasks();

    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id){
        taskService.deleteTask(id);
    }
}
