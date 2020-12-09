import { Counter } from 'src/app/models/counter.model';
import { Months } from 'src/app/models/month.model';
import { Tasks } from 'src/app/models/tasks.model';

export class getMonths {

  
  static month(tasks : Tasks[]): Months{

    let months : Months = {
      January:    [], 
      February:   [], 
      March:      [], 
      April:      [], 
      May:        [],
      June:       [], 
      July:       [], 
      August:     [], 
      September:  [],
      October:    [],
      November:   [],
      December:   []
    };

    tasks.forEach(item =>{
        let data = new Date(item.data).getMonth() + 1;
        if(data == 1){
          months.January.push(item)
        }

        if(data == 2){
          months.February.push(item)
        }

        if(data == 3){
          months.March.push(item)
        }

        if(data == 4){
          months.April.push(item)
        }

        if(data == 5){
          months.May.push(item)
        }

        if(data == 6){
          months.June.push(item)
        }

        if(data == 7){
          months.July.push(item)
        }

        if(data == 8){
          months.August.push(item)
        }

        if(data == 9){
          months.September.push(item)
        }

        if(data == 10){
          months.October.push(item)
        }

        if(data == 11){
          months.November.push(item)
        }

        if(data == 12){
          months.December.push(item)
        }
    })
    return months
    }

  static getCountByMonth(months : Months): Counter{

    let counter : Counter = {
      Jan : {finished : 0, canceled : 0, process : 0, notStarted : 0},
      Feb : {finished : 0, canceled : 0, process : 0, notStarted : 0},
      Mar : {finished : 0, canceled : 0, process : 0, notStarted : 0},
      Apr : {finished : 0, canceled : 0, process : 0, notStarted : 0},
      May : {finished : 0, canceled : 0, process : 0, notStarted : 0},
      Jun : {finished : 0, canceled : 0, process : 0, notStarted : 0},
      Jul : {finished : 0, canceled : 0, process : 0, notStarted : 0},
      Aug : {finished : 0, canceled : 0, process : 0, notStarted : 0},
      Sep : {finished : 0, canceled : 0, process : 0, notStarted : 0},
      Oct : {finished : 0, canceled : 0, process : 0, notStarted : 0},
      Nov : {finished : 0, canceled : 0, process : 0, notStarted : 0},
      Dec : {finished : 0, canceled : 0, process : 0, notStarted : 0}
    }
    months.January.forEach(item =>{
      console.log(item.isFinished)
      if(item.isFinished == 'Finalizado'){
        counter.Jan.finished +=1
      }

      if(item.isFinished == 'Cancelado'){
        counter.Jan.canceled += 1
      }

      if(item.isFinished == 'Em processo'){
        counter.Jan.process += 1
      }

      if(item.isFinished == 'Não iniciado'){
        counter.Jan.notStarted += 1
      }
    })

    months.February.forEach(item =>{
      if(item.isFinished == 'Finalizado'){
        console.log(item)
        counter.Feb.finished +=1
      }

      if(item.isFinished == 'Cancelado'){
        counter.Feb.canceled += 1
      }

      if(item.isFinished == 'Em processo'){
        counter.Feb.process += 1
      }

      if(item.isFinished == 'Não iniciado'){
        counter.Feb.notStarted += 1
      }
    })

    months.March.forEach(item =>{
      if(item.isFinished == 'Finalizado'){
        counter.Mar.finished +=1
      }

      if(item.isFinished == 'Cancelado'){
        counter.Mar.canceled += 1
      }

      if(item.isFinished == 'Em processo'){
        counter.Mar.process += 1
      }

      if(item.isFinished == 'Não iniciado'){
        counter.Mar.notStarted += 1
      }
    })

    months.April.forEach(item =>{
      if(item.isFinished == 'Finalizado'){
        counter.Apr.finished +=1
      }

      if(item.isFinished == 'Cancelado'){
        counter.Apr.canceled += 1
      }

      if(item.isFinished == 'Em processo'){
        counter.Apr.process += 1
      }

      if(item.isFinished == 'Não iniciado'){
        counter.Apr.notStarted += 1
      }
    })

    months.May.forEach(item =>{
      if(item.isFinished == 'Finalizado'){
        counter.May.finished +=1
      }

      if(item.isFinished == 'Cancelado'){
        counter.May.canceled += 1
      }

      if(item.isFinished == 'Em processo'){
        counter.May.process += 1
      }

      if(item.isFinished == 'Não iniciado'){
        counter.May.notStarted += 1
      }
    })

    months.June.forEach(item =>{
      if(item.isFinished == 'Finalizado'){
        counter.Jun.finished +=1
      }

      if(item.isFinished == 'Cancelado'){
        counter.Jun.canceled += 1
      }

      if(item.isFinished == 'Em processo'){
        counter.Jun.process += 1
      }

      if(item.isFinished == 'Não iniciado'){
        counter.Jun.notStarted += 1
      }
    })

    months.July.forEach(item =>{
      if(item.isFinished == 'Finalizado'){
        counter.Jul.finished +=1
      }

      if(item.isFinished == 'Cancelado'){
        counter.Jul.canceled += 1
      }

      if(item.isFinished == 'Em processo'){
        counter.Jul.process += 1
      }

      if(item.isFinished == 'Não iniciado'){
        counter.Jul.notStarted += 1
      }
    })

    months.August.forEach(item =>{
      if(item.isFinished == 'Finalizado'){
        counter.Aug.finished +=1
      }

      if(item.isFinished == 'Cancelado'){
        counter.Aug.canceled += 1
      }

      if(item.isFinished == 'Em processo'){
        counter.Aug.process += 1
      }

      if(item.isFinished == 'Não iniciado'){
        counter.Aug.notStarted += 1
      }
    })

    months.September.forEach(item =>{
      if(item.isFinished == 'Finalizado'){
        counter.Sep.finished +=1
      }

      if(item.isFinished == 'Cancelado'){
        counter.Sep.canceled += 1
      }

      if(item.isFinished == 'Em processo'){
        counter.Sep.process += 1
      }

      if(item.isFinished == 'Não iniciado'){
        counter.Sep.notStarted += 1
      }
    })

    months.October.forEach(item =>{
      if(item.isFinished == 'Finalizado'){
        counter.Oct.finished +=1
      }

      if(item.isFinished == 'Cancelado'){
        counter.Oct.canceled += 1
      }

      if(item.isFinished == 'Em processo'){
        counter.Oct.process += 1
      }

      if(item.isFinished == 'Não iniciado'){
        counter.Oct.notStarted += 1
      }
    })

    months.November.forEach(item =>{
      if(item.isFinished == 'Finalizado'){
        counter.Nov.finished +=1
      }

      if(item.isFinished == 'Cancelado'){
        counter.Nov.canceled += 1
      }

      if(item.isFinished == 'Em processo'){
        counter.Nov.process += 1
      }

      if(item.isFinished == 'Não iniciado'){
        counter.Nov.notStarted += 1
      }
    })

    months.December.forEach(item =>{
      if(item.isFinished == 'Finalizado'){
        counter.Dec.finished +=1
      }

      if(item.isFinished == 'Cancelado'){
        counter.Dec.canceled += 1
      }

      if(item.isFinished == 'Em processo'){
        counter.Dec.process += 1
      }

      if(item.isFinished == 'Não iniciado'){
        counter.Dec.notStarted += 1
      }
    })

    return counter;
  }

  static getCount(arr : Tasks[]) : any{

    let arrCount = {
      finished : 0,
      canceled : 0,
      process : 0,
      notStarted : 0  
    }

    arr.forEach(item =>{
      if(item.isFinished == 'Finalizado'){
        arrCount.finished += 1
      }

      if(item.isFinished == 'Cancelado'){
        arrCount.canceled += 1
      }

      if(item.isFinished == 'Em processo'){
        arrCount.process += 1
      }

      if(item.isFinished == 'Não iniciado'){
        arrCount.notStarted += 1
      }
    })
    return arrCount
  }
}