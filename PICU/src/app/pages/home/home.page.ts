import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage {

  public pages : Array<{title: string, link: string, icon: string}>;

  constructor(private _router : Router) { 
    this.pages =[
      { title : 'PICU',
        link : 'tabs/picu',
        icon : '../assets/PICU_Icon.svg'
      },
      { title : 'YOUR CHILD',
        link : 'tabs/yourchild',
        icon : '../assets/Your_Child_Icon.svg'
      },
      { title : 'TEAM',
        link : 'tabs/team',
        icon : '../assets/Team_Icon.svg'
      },
      { title : 'VISIT',
        link : 'tabs/visit',
        icon : '../assets/Visit_Icon.svg'
      },
      { title : 'SUPPORT US',
        link : '',
        icon : ''
      },
      { title : 'FAQ & FEEDBACK',
        link : 'tabs/qa',
        icon : ''
      },
    ];
  }

  public setNavigationLink(page: any) : void
  {
    this._router.navigateByUrl('/'+page.link);
  }

}