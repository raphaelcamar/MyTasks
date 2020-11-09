import { AbstractControl } from '@angular/forms';

export class validations {

    static cpf(control : AbstractControl){

        let valid : boolean

        let cpf = control.value
        var reg =  /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
        valid = reg.test(cpf)

        if(valid) return null
        return { invalidCPF : true }
    }

    static completeName(control : AbstractControl){

        let valid : boolean

        let completeName = control.value;
        completeName.split(' ').forEach((nome, index, arr) =>{
        var reg = /^[A-ZÀ-Úa-zà-ú]{1}[a-zà-ú]+$/;
        var result = reg.test(nome);
        valid = result
        })
        if(valid) return null
        return {invalidName: true}
    }
}