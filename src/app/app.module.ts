import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { ClockHandComponent } from './clock/clock-hand/clock-hand.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    ClockHandComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
