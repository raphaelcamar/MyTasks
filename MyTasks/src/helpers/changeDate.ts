export class changeDate{
    
    static CorrectingDate(date : Date):string{
        const dia  = date.getDate().toString().padStart(2, '0');
        const mes  = (date.getMonth()+1).toString().padStart(2, '0');
        const ano  = date.getFullYear();

        return `${dia}/${mes}/${ano}`;
    }

    static ReturningNameMonthByNumber(month : string):string{
      

        if(parseInt(month) == 1){
            return 'Janeiro'
          }
    
          if(parseInt(month) == 2){
            return 'Fevereiro'
          }
    
          if(parseInt(month) == 3){
            return 'Março'
          }
    
          if(parseInt(month) == 4){
            return 'Abril'
          }
    
          if(parseInt(month) == 5){
            return 'Maio'
          }
    
          if(parseInt(month) == 6){
            return 'Junho'
          }
    
          if(parseInt(month) == 7){
            return 'Julho'
          }
    
          if(parseInt(month) == 8){
            return 'Agosto'
          }
    
          if(parseInt(month) == 9){
            return 'Setembro'
          }
    
          if(parseInt(month) == 10){
            return 'Outubro'
          }
    
          if(parseInt(month) == 11){
            return 'Novembro'
          }
    
          if(parseInt(month) == 12){
            return 'Dezembro'
          }
    }
}