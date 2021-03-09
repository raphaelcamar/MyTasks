import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient, private snackBar : MatSnackBar) { }

  message(msg : string):void{
    this.snackBar.open(msg, 'Fechar', {
      duration : 3000,
      horizontalPosition : 'right',
      verticalPosition : 'top'
    })
  }

  create(user: User):Observable<User>{
    return this.http.post<User>(`https://backend-mytasks.herokuapp.com/users`, user)
  }

  read(id : number):Observable<User>{
    return this.http.get<User>(`https://backend-mytasks.herokuapp.com/users/${id}`)
  }

  login(email : string, password : string):Observable<User>{
    return this.http.get<User>(`https://backend-mytasks.herokuapp.com/users?email=${email}&password=${password}`)
  }

  update(user : User):Observable<User>{
    return this.http.put<User>(`https://backend-mytasks.herokuapp.com/users/${user.id}`, user)
  }

  delete(id : number):Observable<User>{
    return this.http.delete<User>(`https://backend-mytasks.herokuapp.com/users/${id}`)
  }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`https://backend-mytasks.herokuapp.com/users`)
  }
}
