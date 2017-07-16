import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {MdNavbarComponent} from "./md-navbar/md-navbar.component";
import {TimerComponent} from "./timer/timer.component";

@NgModule({
  declarations: [
    AppComponent,
    MdNavbarComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
