import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from 'src/app/models/tasks.model';
import { TasksService } from 'src/app/services/tasks/tasks.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  tasks : Tasks;
  constructor(private route : ActivatedRoute, private router : Router, private taskService : TasksService) {
    
   }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.readById(id)
      .subscribe(task =>{
         this.tasks = task
     });


  }

  updateTask():void{
    console.log(this.tasks)
     this.taskService.update(this.tasks)
     .subscribe(resp =>{
       console.log(resp)
       this.router.navigate(['/tasks/'])
     })

  }

}
