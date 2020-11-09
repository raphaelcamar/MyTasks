import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tasks } from '../../models/tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient, private snackBar : MatSnackBar ) { }

  message(msg : string):void{
    this.snackBar.open(msg, 'Fechar', {
      duration : 3000,
      horizontalPosition : 'right',
      verticalPosition : 'top'
    })
  }

  create(tasks : Tasks): Observable<Tasks>{
    return this.http.post<Tasks>(`http://localhost:3001/tasks`, tasks)
  }

  read( id : number ):Observable<Tasks[]>{
    return this.http.get<Tasks[]>(`http://localhost:3001/tasks?idUser=${id}`);
  }

  readById(id : number):Observable<Tasks>{
    return this.http.get<Tasks>(`http://localhost:3001/tasks/${id}`)
  }

  update(tasks : Tasks):Observable<Tasks>{
    const id =  tasks.id;
    return this.http.put<Tasks>(`http://localhost:3001/tasks/${id}`, tasks);
  }

  delete(id : number):Observable<Tasks>{
    return this.http.delete<Tasks>(`http://localhost:3001/tasks/${id}`)
  }
}
