package com.journey.TODO_list_backend.service;


import com.journey.TODO_list_backend.model.Task;
import com.journey.TODO_list_backend.repository.TaskRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRespository taskRespository;


    public Task saveTask(Task task){
        return taskRespository.save(task);
    }

    public List<Task> getAllTasks(){
        return taskRespository.findAll();
    }

    public void deleteTask(Long id){
        taskRespository.deleteById(id);
    }
}
