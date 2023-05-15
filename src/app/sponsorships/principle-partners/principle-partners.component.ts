import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";

@Component({
  selector: 'app-principle-partners',
  templateUrl: './principle-partners.component.html',
  styleUrls: ['./principle-partners.component.css']
})
export class PrinciplePartnersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
