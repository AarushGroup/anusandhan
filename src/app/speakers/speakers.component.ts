import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css'],
})
export class SpeakersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
