import { Component, Input, OnInit } from '@angular/core';
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
  sub1 : Subscription;
  sub2 : Subscription;
  sub3 : Subscription;
  sub4 : Subscription;

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
    this.sub1 = this.utils.updateUser(this.currentuser._id , this.currentuser).subscribe(status => alert(status));
    this.sub2=  this.utils.getUser(this.currentuser._id).subscribe(data => this.currentuser = data )

    } 
  }

addPost()
{
  this.currentuser.posts.push(this.newPost);
 this.sub3 =  this.utils.updateUser(this.currentuser._id , this.currentuser).subscribe(status => alert(status));
  this.sub4= this.utils.getUser(this.currentuser._id).subscribe(data => this.currentuser = data )
}
  ngOnInit(): void {
  }


  ngOnDestroy()
  {
    if(this.sub1 != null)
    {
      this.sub1.unsubscribe();
    }

    if(this.sub2 != null)
    {
      this.sub2.unsubscribe();
    }

    if(this.sub3 != null)
    {
      this.sub3.unsubscribe();
    }

    if(this.sub4 != null)
    {
      this.sub4.unsubscribe();
    }
  }
 
}
