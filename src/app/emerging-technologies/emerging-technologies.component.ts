import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-emerging-technologies',
  templateUrl: './emerging-technologies.component.html',
  styleUrls: ['./emerging-technologies.component.css'],
})
export class EmergingTechnologiesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
