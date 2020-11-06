import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  create(user: User):Observable<User>{
    return this.http.post<User>(`http://localhost:3001/users`, user)

  }

  read(id : number):Observable<User>{
    
    return this.http.get<User>(`http://localhost:3001/users/${id}`)
  }

  login(email : string, password : string):Observable<User>{
    return this.http.get<User>(`http://localhost:3001/users?email=${email}&password=${password}`)
  }

  update(user : User):Observable<User>{
    return this.http.put<User>(`http://localhost:3001/users/${user.id}`, user)
  }

  delete(id : number):Observable<User>{
    return this.http.delete<User>(`http://localhost:3001/users/${id}`)
  }
}