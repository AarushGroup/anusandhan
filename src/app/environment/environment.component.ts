import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css'],
})
export class EnvironmentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
