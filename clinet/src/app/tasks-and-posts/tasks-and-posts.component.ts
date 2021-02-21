import { Component, Input, OnInit } from '@angular/core';
import { title } from 'process';
import { Subscription } from 'rxjs';
import { Post } from '../post';
import { Task } from '../task';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-tasks-and-posts',
  templateUrl: './tasks-and-posts.component.html',
  styleUrls: ['./tasks-and-posts.component.css']
})
export class TasksAndPostsComponent implements OnInit {

  newTask : Task = {title: '' , completed: false};
  newPost : Post = {title: '', body: ''};
  visibleNewTask : boolean = false;
  visibleNewPost : boolean = false;


  @Input()
  currentuser : User = new User();

  
  constructor(private utils : UserServiceService) { }

  ShowNewTask()
  {
    this.visibleNewTask = true;
  }

  ShowNewPost()
  {
    this.visibleNewPost = true;
  }

  addTask()
  {
    {
      this.currentuser.tasks.push(this.newTask);
     this.utils.updateUser(this.currentuser._id , this.currentuser).subscribe(status => alert(status));
     this.utils.getUser(this.currentuser._id).subscribe(data => this.currentuser = data )

    } 
  }

addPost()
{
  this.currentuser.posts.push(this.newPost);
  this.utils.updateUser(this.currentuser._id , this.currentuser).subscribe(status => alert(status));
  this.utils.getUser(this.currentuser._id).subscribe(data => this.currentuser = data )
}
  ngOnInit(): void {
  }


ngOnDestroy()
{

}
 
}
