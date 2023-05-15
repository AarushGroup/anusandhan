import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";

@Component({
  selector: 'app-corporate-partners',
  templateUrl: './corporate-partners.component.html',
  styleUrls: ['./corporate-partners.component.css']
})
export class CorporatePartnersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
