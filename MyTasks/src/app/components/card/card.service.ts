import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tasks } from 'src/app/models/tasks.model';
import { Months } from '../../models/month.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private _cardData = new BehaviorSubject<Tasks[]>([])

  constructor() { }

  get cardData(): Tasks[]{
    return this._cardData.value;
  }

  set cardData(cardData : Tasks[]){
    this._cardData.next(cardData);
  }
}
