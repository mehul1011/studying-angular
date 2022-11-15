import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  // selector: '[app-nav]' => Component selector as css attribute
  // selector: '.app-nav' => Component selector as css class
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
