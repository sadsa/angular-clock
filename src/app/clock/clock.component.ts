import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ClockService } from './clock.service';
import { Hand } from '../models/hand.model';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

const INTERVAL_DELAY: number = 1000;

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
  providers: [ClockService]
})
export class ClockComponent implements OnInit {
  @Output() onTick = new EventEmitter<{message:string}>();
  hands: Array<Hand> = [
    { id: 0, name: 'hours', angle: 0 },
    { id: 1, name: 'minutes', angle: 0 },
    { id: 2, name: 'seconds', angle: 0 }
  ]

  constructor(private ClockService: ClockService) { }

  ngOnInit() {
    this.startClock();
  }

  startClock() {
    this.tick();
    setInterval(this.tick.bind(this), INTERVAL_DELAY);
  }

  tick() {
    const date = new Date();
    this.setHandPositions(date);
  }

  setHandPositions(date) {
    const angles = {
      seconds: ClockService.calcAngleForSeconds(date),
      minutes: ClockService.calcAngleForMinutes(date),
      hours: ClockService.calcAngleForHours(date)
    };

    this.updateHandAngles(angles);
  }

  updateHandAngles(angles): void {
    this.hands = this.hands.map(hand => {
      hand.angle = angles[hand.name];
      return hand;
    });
    this.onTick.emit({message: 'tick'})
  }

}
