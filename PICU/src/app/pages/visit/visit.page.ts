import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.page.html',
  styleUrls: ['./visit.page.scss'],
})
export class VisitPage implements OnInit {

  isDisabled = false;

  MyAction() {
    console.log('back button pressed');
    this.isDisabled = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
