import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-industry-connect',
  templateUrl: './industry-connect.component.html',
  styleUrls: ['./industry-connect.component.css'],
})
export class IndustryConnectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
