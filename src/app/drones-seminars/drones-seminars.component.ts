import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-drones-seminars',
  templateUrl: './drones-seminars.component.html',
  styleUrls: ['./drones-seminars.component.css'],
})
export class DronesSeminarsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
