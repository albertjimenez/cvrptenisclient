import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  minutes: number;
  seconds: number;

  constructor() {
    this.minutes = 25;
    this.seconds = 0;
    setInterval(() => this.countdown(), 1000);
  }

  countdown(): void {
    let stopped = false;
    if (--this.seconds < 0) {
      this.seconds = 59;
      if (--this.minutes < 0) {
        stopped = true;
      }
    }
    if (stopped) {
      this.minutes = 0;
      this.seconds = 0;
    }
  }

  ngOnInit() {
    console.log('Timer instantiated');
  }

}
