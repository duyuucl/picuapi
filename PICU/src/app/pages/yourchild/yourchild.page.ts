import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yourchild',
  templateUrl: './yourchild.page.html',
  styleUrls: ['./yourchild.page.scss'],
})
export class YourchildPage implements OnInit {

  isDisabled = false;

  MyAction() {
    console.log('back button pressed');
    this.isDisabled = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
