import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from 'src/app/models/tasks.model';
import { TasksService } from 'src/app/services/tasks/tasks.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  tasks : Tasks;

  constructor(private route : ActivatedRoute, private router : Router, private taskService : TasksService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.readById(id)
    .subscribe(resp =>{
      this.tasks = resp
    })
  }

  delete():void{
    this.taskService.delete(this.tasks.id)
      .subscribe(resp =>{
        this.router.navigate(['/'])
    })
  }
}
