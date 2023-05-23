import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-fintech',
  templateUrl: './fintech.component.html',
  styleUrls: ['./fintech.component.css'],
})
export class FintechComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
