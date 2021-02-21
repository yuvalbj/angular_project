import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  userid : string;

  @Output()
  notify : EventEmitter<boolean> = new EventEmitter<boolean>();


  sub: Subscription;
  sub2: Subscription;
  user : User = new User();
  otherData : boolean;
  backGroungColorforUser : boolean = false;
  allTaskCompleted : boolean;
  visibleTaskpost : boolean = false;

  constructor(private utils : UserServiceService) { }
  VisibleTaskpost()
  {
    this.backGroungColorforUser = !this.backGroungColorforUser;
    this.visibleTaskpost = !this.visibleTaskpost;
    this.notify.emit(this.visibleTaskpost)
  }

  BackGroundcolor()
  {
    this.backGroungColorforUser = !this.backGroungColorforUser
  }

  updateUser()
  {
    this.utils.updateUser(this.userid , this.user).subscribe(status => alert(status));
  }


  deleteUser()
  {
    this.utils.deleteUser(this.userid).subscribe(x => alert(x));
    location.reload();

  }
  ngOnInit(): void {
      this.sub = this.utils.getUser(this.userid).subscribe(data => {
      this.user = data;
      let tasks = this.user.tasks;
      let arr = tasks.map(x => x.completed)
      this.allTaskCompleted = arr.every(function(com){
        return com == true;
        }); 
       
    });
    

  }


  ngOnDestroy(){
  this.sub.unsubscribe();

 }

}
