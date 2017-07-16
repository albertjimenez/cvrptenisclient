import {Component} from "@angular/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  // Here we put all the vars we want to make visible
  title = 'app';
  anotherTitle = 'sss';
  makeSomething() {
    this.anotherTitle = '2';

  }

  onTimerFinished(): void {
    alert('Timer finalizado');
  }
}
