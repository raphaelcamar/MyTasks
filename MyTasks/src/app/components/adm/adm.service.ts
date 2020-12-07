import { Injectable } from '@angular/core';
import { TasksService } from 'src/app/services/tasks/tasks.service';

@Injectable({
  providedIn: 'root'
})

//Será responsável por chamar o serviço, separar os dados em determinadas funções, para facilitar a visualização no data
export class AdmService {

  constructor(private taskService : TasksService) { }
  
}
