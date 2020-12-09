import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tasks } from 'src/app/models/tasks.model';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  arrJan : Tasks[] = [];
  arrFeb : Tasks[] = [];
  arrMar : Tasks[] = [];
  arrApr : Tasks[] = [];
  arrMay : Tasks[] = [];
  arrJun : Tasks[] = [];
  arrJul : Tasks[] = [];
  arrAug : Tasks[] = [];
  arrSep : Tasks[] = [];
  arrOct : Tasks[] = [];
  arrNov : Tasks[] = [];
  arrDec : Tasks[] = [];

  constructor(private cardService : CardService, private router : Router) { }

  ngOnInit(): void {

    setTimeout(()=>{
      this.getValuesAndSeparateByMonth();
    }, 1000 )
  }

  getValuesAndSeparateByMonth(){
    this.cardService.cardData.forEach(item =>{
      let data = new Date(item.data).getMonth() + 1;
      if(data == 1){
        this.arrJan.push(item)
      }

      if(data == 2){
        this.arrFeb.push(item)
      }

      if(data == 3){
        this.arrMar.push(item)
      }

      if(data == 4){
        this.arrApr.push(item)
      }

      if(data == 5){
        this.arrMay.push(item)
      }

      if(data == 6){
        this.arrJun.push(item)
      }

      if(data == 7){
        this.arrJul.push(item)
      }

      if(data == 8){
        this.arrAug.push(item)
      }

      if(data == 9){
        this.arrSep.push(item)
      }

      if(data == 10){
        this.arrOct.push(item)
      }

      if(data == 11){
        this.arrNov.push(item)
      }

      if(data == 12){
        this.arrDec.push(item)
      }
    })
  }

  sendData(tasks : Tasks[], month : number):void{
    this.router.navigate(['/users/tasks/month/1'])
  }
}
