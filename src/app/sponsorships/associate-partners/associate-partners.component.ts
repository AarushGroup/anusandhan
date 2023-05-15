import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";

@Component({
  selector: 'app-associate-partners',
  templateUrl: './associate-partners.component.html',
  styleUrls: ['./associate-partners.component.css']
})
export class AssociatePartnersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
