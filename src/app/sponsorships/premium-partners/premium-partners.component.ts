import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";

@Component({
  selector: 'app-premium-partners',
  templateUrl: './premium-partners.component.html',
  styleUrls: ['./premium-partners.component.css']
})
export class PremiumPartnersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
