import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clock-hand',
  templateUrl: './clock-hand.component.html',
  styleUrls: ['./clock-hand.component.css']
})
export class ClockHandComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() angle: number;

  constructor() { }

  ngOnInit() {

  }

  getAngleStyle(angle: number) {
    return { 'transform': 'rotateZ(' + angle + 'deg)' };
  }

}
