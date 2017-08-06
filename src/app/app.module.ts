import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {MdNavbarComponent} from './md-navbar/md-navbar.component';
import {ToasterModule} from 'angular2-toaster';

import {
  MdButtonModule,
  MdCardModule,
  MdChipsModule,
  MdIconModule,
  MdIconRegistry,
  MdInputModule,
  MdListModule,
  MdRippleModule,
  MdToolbarModule
} from '@angular/material';
import 'hammerjs';
import {ReactiveFormsModule} from '@angular/forms';
import {MdFooterComponent} from './md-footer/md-footer.component';
import {FormVanComponent} from './form-van/form-van.component';
import {FormChildrenComponent} from './form-children/form-children.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Const routes to form-children and form-van
const routes: Routes = [{
  path: 'vans',
  component: FormVanComponent
},
  {
    path: 'children',
    component: FormChildrenComponent
  }, {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MdNavbarComponent,
    MdFooterComponent,
    FormVanComponent,
    FormChildrenComponent,
  ],
  imports: [
    BrowserModule, MdButtonModule, MdIconModule, MdToolbarModule, RouterModule.forRoot(routes),
    ReactiveFormsModule, MdInputModule, BrowserAnimationsModule, MdCardModule, ToasterModule, MdListModule, MdChipsModule, MdRippleModule
  ],
  exports: [MdButtonModule, RouterModule],
  providers: [MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule {
}
