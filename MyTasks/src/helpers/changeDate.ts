export class changeDate{
    
    static CorrectingDate(date : Date):string{
        const dia  = date.getDate().toString().padStart(2, '0');
        const mes  = (date.getMonth()+1).toString().padStart(2, '0');
        const ano  = date.getFullYear();

        return `${dia}/${mes}/${ano}`;
    }

    static ReturningNameMonthByNumber(month : number):string{
        if(month == 1){
            return 'Janeiro'
          }
    
          if(month == 2){
            return 'Fevereiro'
          }
    
          if(month == 3){
            return 'Março'
          }
    
          if(month == 4){
            return 'Abril'
          }
    
          if(month == 5){
            return 'Maio'
          }
    
          if(month == 6){
            return 'Junho'
          }
    
          if(month == 7){
            return 'Julho'
          }
    
          if(month == 8){
            return 'Agosto'
          }
    
          if(month == 9){
            return 'Setembro'
          }
    
          if(month == 10){
            return 'Outubro'
          }
    
          if(month == 11){
            return 'Novembro'
          }
    
          if(month == 12){
            return 'Dezembro'
          }
    }
}