import { Tasks } from './tasks.model';

export class User {
    id : number;
    name : string;
    cpf : string;
    email : string;
    password : string;
    isAdm : boolean = false;
}