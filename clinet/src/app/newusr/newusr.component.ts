import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-newusr',
  templateUrl: './newusr.component.html',
  styleUrls: ['./newusr.component.css']
})
export class NewusrComponent implements OnInit {

  newUser : User = new User();
  sub: Subscription;
  cancelnewuser : boolean = false;
  constructor(private utils: UserServiceService) { }

  @Output()
  notify : EventEmitter<boolean> = new EventEmitter<boolean>();

  cancel()
  {
    this.notify.emit(this.cancelnewuser);
  }

  addNewUser()
  {
    this.sub = this.utils.addUser(this.newUser)
    .subscribe(status => 
      {
        alert(status);
        location.reload();
      })
  }
  ngOnInit(): void {
  }

}
