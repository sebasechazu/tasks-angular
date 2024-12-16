import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-tasks-list',
  imports: [],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(){
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }
}
