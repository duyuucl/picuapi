import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  
  public pages : Array<{title: string, link: string, icon: string}>;

  constructor(private _router : Router) { 
    this.pages =[
      { title : 'CONSENT STATEMENT',
        link : 'tabs/team-detail',
        icon : ''
      },
      { title : 'DAILY ROUTINE',
        link : 'tabs/team-detail',
        icon : ''
      },
      { title : 'WARD PHILOSOPHY',
        link : 'tabs/team-detail',
        icon : ''
      }
    ];
  }

  public setNavigationLink(page: any) : void
  {
    this._router.navigateByUrl('/'+page.link);
  }

  ngOnInit() {
  }

}
