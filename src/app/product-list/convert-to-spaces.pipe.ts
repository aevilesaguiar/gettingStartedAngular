import { Pipe, PipeTransform } from "@angular/core";

@Pipe({

  //esse é o nome que usaremos quando fizermos referencia ao pipe no HTML
  name: 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform{

  transform(value:string, character: string):string{

    //substituir o caracter especificado pelo o espaço
  return  value.replace(character, ' ');


  }
}
