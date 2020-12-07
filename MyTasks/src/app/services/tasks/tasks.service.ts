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
    return this.http.post<Tasks>(`https://backend-mytasks.herokuapp.com/tasks`, tasks);
  }

  read( id : number ):Observable<Tasks[]>{
    return this.http.get<Tasks[]>(`https://backend-mytasks.herokuapp.com/tasks?idUser=${id}`);
  }

  readById(id : number):Observable<Tasks>{
    return this.http.get<Tasks>(`https://backend-mytasks.herokuapp.com/tasks/${id}`);
  }

  update(tasks : Tasks):Observable<Tasks>{
    const id =  tasks.id;
    return this.http.put<Tasks>(`https://backend-mytasks.herokuapp.com/tasks/${id}`, tasks);
  }

  delete(id : number):Observable<Tasks>{
    return this.http.delete<Tasks>(`https://backend-mytasks.herokuapp.com/tasks/${id}`);
  }

  getTasksByMonth(id: number, month : string): Observable<Tasks[]>{
    return this.http.get<Tasks[]>(`https://backend-mytasks.herokuapp.com/tasks?data_like=^[0-9]{4}\-${month}\-[0-9]{2}&idUser=${id}`);
  }
}