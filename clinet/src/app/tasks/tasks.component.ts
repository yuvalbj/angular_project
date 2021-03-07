import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from '../task';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private utils: UserServiceService) { }
  sub : Subscription;


  @Input()
  currentuser : User;

  @Input()
  tasksForUser: Task = new Task();
  
  markComplete()
  {
    this.tasksForUser.completed = true;
    this.utils.updateUser(this.currentuser._id , this.currentuser).subscribe();


  }

  ngOnInit(): void {
  }

  ngOnDestroy()
  {
    if(this.sub != null)
    {
      this.sub.unsubscribe();
    }
  }
}
