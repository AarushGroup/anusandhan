import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.css'],
})
export class ExhibitionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
