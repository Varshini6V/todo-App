package com.journey.TODO_list_backend.repository;

import com.journey.TODO_list_backend.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRespository extends JpaRepository<Task,Long> {


}
