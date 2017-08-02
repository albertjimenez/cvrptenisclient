import {Component} from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/animate.css/animate.min.css'],

})
export class AppComponent {

  hideButton() {
    $('#button').hide();
  }
}
