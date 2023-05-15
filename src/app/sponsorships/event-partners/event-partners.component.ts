import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";

@Component({
  selector: 'app-event-partners',
  templateUrl: './event-partners.component.html',
  styleUrls: ['./event-partners.component.css']
})
export class EventPartnersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
