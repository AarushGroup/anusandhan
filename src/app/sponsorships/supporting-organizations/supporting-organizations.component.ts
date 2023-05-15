import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";
@Component({
  selector: 'app-supporting-organizations',
  templateUrl: './supporting-organizations.component.html',
  styleUrls: ['./supporting-organizations.component.css']
})
export class SupportingOrganizationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
