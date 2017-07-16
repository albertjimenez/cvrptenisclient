import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  minutes: number;
  stopped = false;
  @Input() seconds: number;
  @Output() eventCompleted = new EventEmitter();

  constructor() {
    this.minutes = 0;
    // this.seconds = 0;
    setInterval(() => this.countdown(), 1000);
  }

  countdown(): void {
    if (--this.seconds < 0) {
      this.seconds = 59;
      if (--this.minutes < 0) {
        this.stopped = true;
      }
    }
    if (this.stopped) {
      this.minutes = 0;
      this.seconds = 0;
      this.eventCompleted.emit(null);
      console.log('Evento disparado');
    }
  }

  ngOnInit() {
    console.log('Timer instantiated');
  }

}
