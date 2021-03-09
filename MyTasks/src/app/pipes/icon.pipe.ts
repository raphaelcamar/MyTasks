import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'icon'
})

export class IconPipe implements PipeTransform{
    transform(value : string){
        console.log(value)
        if(value == 'Finalizado') return 'check_circle_outline'
        if(value == 'Não iniciado') return 'pause_circle_outline'
        if(value == 'Cancelado') return 'highlight_off'
        if(value == 'Em processo') return 'autorenew'
    }
}