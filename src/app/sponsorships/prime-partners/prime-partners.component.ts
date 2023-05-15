import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";

@Component({
  selector: 'app-prime-partners',
  templateUrl: './prime-partners.component.html',
  styleUrls: ['./prime-partners.component.css']
})
export class PrimePartnersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
