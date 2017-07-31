import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MdNavbarComponent} from './md-navbar/md-navbar.component';
import {MdButtonModule, MdCardModule, MdIconModule, MdIconRegistry, MdToolbarModule} from '@angular/material';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    MdNavbarComponent,
  ],
  imports: [
    BrowserModule, MdCardModule, MdButtonModule, MdIconModule, MdToolbarModule
  ],
  providers: [MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule {
}
