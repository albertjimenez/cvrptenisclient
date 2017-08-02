import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {MdNavbarComponent} from './md-navbar/md-navbar.component';
import {MdButtonModule, MdIconModule, MdIconRegistry, MdToolbarModule} from '@angular/material';
import 'hammerjs';
import {MdFooterComponent} from './md-footer/md-footer.component';
import {FormVanComponent} from './form-van/form-van.component';
import {FormChildrenComponent} from './form-children/form-children.component';

// Const routes to form-children and form-van

const routes: Routes = [{
  path: 'van',
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
    BrowserModule, MdButtonModule, MdIconModule, MdToolbarModule, RouterModule.forRoot(routes)
  ],
  exports: [MdButtonModule, RouterModule],
  providers: [MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule {
}
