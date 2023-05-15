import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";

@Component({
  selector: 'app-principle-co-partners',
  templateUrl: './principle-co-partners.component.html',
  styleUrls: ['./principle-co-partners.component.css']
})
export class PrincipleCoPartnersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
