import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-environment-seminars',
  templateUrl: './environment-seminars.component.html',
  styleUrls: ['./environment-seminars.component.css'],
})
export class EnvironmentSeminarsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
