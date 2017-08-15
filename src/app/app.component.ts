import { Component } from '@angular/core';

@Component({
  
selector: 'app-root',
  
template: `<p>{{mycount}}</p>
<p>{{title|revpipe}}</p>
<input type="text" letters="words">
<child-app (change)="changeCount($event)"  ></child-app>`,
  
})

export class ParentComponent
 {
  
mycount=10;
  
changeCount(change){
  
  this.mycount=change;

   }

  
 
}
  
export class AppComponent {
  title = 'app works!';
}
