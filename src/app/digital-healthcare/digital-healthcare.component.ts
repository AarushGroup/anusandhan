import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-digital-healthcare',
  templateUrl: './digital-healthcare.component.html',
  styleUrls: ['./digital-healthcare.component.css'],
})
export class DigitalHealthcareComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
