import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'revpipe'})
export class ReversePipe implements PipeTransform {
    

  transform(value){
   var spliter = value.split("");
var rev = spliter.reverse();
var revArray = rev.join("");
return revArray;
  }

 
}