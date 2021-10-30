import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ResultComponent } from './result/result.component';
import { ParentComponent } from './parent/parent.component';
import { FormsModule } from '@angular/forms';
import { TimmerComponent } from './timmer/timmer.component';
import { HighlightPipe } from './highlight.pipe';


@NgModule({
  declarations: [
    AppComponent,
   
    ResultComponent,
    ParentComponent,
    TimmerComponent,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
