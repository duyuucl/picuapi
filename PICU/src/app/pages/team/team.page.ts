import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {
  isDisabled = false;
  MyAction() {
    console.log('back button pressed');
    this.isDisabled = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
