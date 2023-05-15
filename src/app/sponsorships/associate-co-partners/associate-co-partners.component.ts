import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";

@Component({
  selector: 'app-associate-co-partners',
  templateUrl: './associate-co-partners.component.html',
  styleUrls: ['./associate-co-partners.component.css']
})
export class AssociateCoPartnersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
