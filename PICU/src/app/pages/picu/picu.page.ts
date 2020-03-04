import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picu',
  templateUrl: './picu.page.html',
  styleUrls: ['./picu.page.scss'],
})
export class PicuPage implements OnInit {
  isDisabled = false;
  MyAction() {
    console.log('back button pressed');
    this.isDisabled = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
