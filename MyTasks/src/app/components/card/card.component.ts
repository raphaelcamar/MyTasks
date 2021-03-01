import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tasks } from 'src/app/models/tasks.model';
import { CardService } from './card.service';
// import {faRedo, faCheck, faTimes, faPause} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // faRedo = faRedo;
  // faCheck = faCheck;
  // faTimes = faTimes;
  // faPause = faPause;
  naoIniciado : number = 0;
  finalizado : number = 0;
  emProcesso : number = 0;
  cancelado: number = 0;

  constructor(private cardService : CardService, private router : Router) { }

  ngOnInit(): void {

    setTimeout(()=>{
      this.cardService.cardData.filter(item => item.isFinished == 'Não iniciado' ? this.naoIniciado +=1 : '')
      this.cardService.cardData.filter(item => item.isFinished == 'Finalizado' ? this.finalizado +=1 : '')
      this.cardService.cardData.filter(item => item.isFinished == 'Em processo' ? this.emProcesso +=1 : '')
      this.cardService.cardData.filter(item => item.isFinished == 'Cancelado' ? this.cancelado +=1 : '')

    }, 1000 )
  }



  // sendData(tasks : Tasks[], month : number):void{
  //   this.router.navigate(['/users/tasks/month/1'])
  // }
}
