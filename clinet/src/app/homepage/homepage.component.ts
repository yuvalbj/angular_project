import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  search : string;
  users : User[] = [];
  sub : Subscription;
  currentuser : User = new User();
  taskspost : boolean = false;
  newUsr : boolean = false;

  constructor(private utils: UserServiceService) { }

  visibleTasksPosts(user : User, show: boolean)
  { 
    this.taskspost = !this.taskspost;
    this.currentuser = user;
    this.newUsr = false;
  }


  addNewUSer()
  {
    this.taskspost = false;
    this.newUsr = !this.newUsr;

  }

   async searchfor()
  {
   this.users = await this.utils.searchUser(this.search);
  
  }

  ngOnInit(): void {
    this.sub = this.utils.getUsers().subscribe(data => this.users = data);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
