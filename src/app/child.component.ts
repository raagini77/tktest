import{Component, Input,Output, EventEmitter} from '@angular/core';

@Component({
    selector:'child-app',
    template:`

<button (click)="increment()">increment</button>
<button (click)= "decrement()">decrement</button>
    `,
 

})
export class ChildComponent {

    count:number = 10;
    
@Output()
    change : EventEmitter<number> = new EventEmitter<number>();

    increment(){

        this.count++;

        this.change.emit(this.count);

    }

    decrement(){

        this.count--;

        this.change.emit(this.count);

}
}