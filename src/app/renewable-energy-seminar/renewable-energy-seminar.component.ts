import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-renewable-energy-seminar',
  templateUrl: './renewable-energy-seminar.component.html',
  styleUrls: ['./renewable-energy-seminar.component.css'],
})
export class RenewableEnergySeminarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
