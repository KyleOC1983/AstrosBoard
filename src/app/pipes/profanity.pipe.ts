import { Pipe, PipeTransform } from '@angular/core';
import { banned } from './banned-words';
import * as Filter from "bad-words";

@Pipe({
  name: 'profanity'
})
export class ProfanityPipe implements PipeTransform {

  filter = new Filter(); 

//adds any words listed under banned-words.ts to existing banned-words library
  transform(text: string, censor: boolean): string {
    this.filter.addWords(...banned)
    if(!censor){
      return text;
    }
    
    return this.filter.clean(text);
  }

}
