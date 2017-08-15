import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ChildComponent} from './child.component';
import {LettersDirective} from './letters.directive';
import{ReversePipe} from './reversestring.pipe'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,ChildComponent,LettersDirective,ReversePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
