import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url : string = "http://localhost:8000/api/users";

  constructor(private http : HttpClient ) { }

  getUsers()
  {
    return this.http.get<User[]>(this.url);
  }

  getUser(id: string)
  {
    return this.http.get<User>(this.url + "/" + id);
  }

  updateUser(id: string, user : User )
  {
    return this.http.put(this.url + "/" + id ,user)

  }

  deleteUser(id: string)
  {
    return this.http.delete(this.url + "/" + id )

  }

  addUser(usr : User)
  { 
    return this.http.post(this.url, usr)
  }

  async searchUser(str : string) 
  {
    let allUsers = await this.http.get<User[]>(this.url).toPromise();
    let result = [];

    allUsers.forEach(usr => 
      {
        if(usr.userName.includes(str) || usr.email.includes(str))
        {
          result.push(usr)
        }
      })
     return result;
    }
}
