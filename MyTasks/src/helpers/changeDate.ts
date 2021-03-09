export class changeDate{
    
    static CorrectingDate(date : Date):string{
        const dia  = date.getDate().toString().padStart(2, '0');
        const mes  = (date.getMonth()+1).toString().padStart(2, '0');
        const ano  = date.getFullYear();

        return `${dia}/${mes}/${ano}`;
    }

    static getDate(){
        const date = new Date();
        const dia = date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate();
        const mes = date.getMonth() + 1 < 10 ? '0'+ (date.getMonth() + 1).toString() : date.getMonth() + 1;
        const ano = date.getFullYear();
        return `${ano}-${mes}-${dia}`;
    }

}