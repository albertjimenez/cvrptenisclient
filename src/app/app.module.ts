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
  MdDialogModule,
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
import {ImageSolutionComponent} from './image-solution/image-solution.component';
import {HttpModule} from '@angular/http';
import {AgmCoreModule} from '@agm/core';
import {DialogComponent} from "./dialog/dialog.component";
// Const routes to form-children and form-van
const routes: Routes = [
  {
  path: 'vans',
  component: FormVanComponent
  }, {
    path: 'solution',
    component: ImageSolutionComponent
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
    ImageSolutionComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule, MdButtonModule, MdIconModule, MdToolbarModule, RouterModule.forRoot(routes),
    ReactiveFormsModule, MdInputModule, BrowserAnimationsModule, MdCardModule, ToasterModule,
    MdListModule, MdChipsModule, MdRippleModule, HttpModule, MdDialogModule, MdListModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDfCdvJjWeFnxPCJWWHTpYYy7qw-Uu14-4'
    })
  ],
  exports: [MdButtonModule, RouterModule],
  providers: [MdIconRegistry],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule {
}
