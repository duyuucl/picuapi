import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  
  public pages : Array<{title: string, link: string, icon: string}>;

  constructor(private _router : Router) { 
    this.pages =[
      { title : 'VISITING HOURS',
        link : 'tabs/team-detail',
        icon : ''
      },
      { title : 'LOCATION',
        link : 'tabs/team-detail',
        icon : ''
      },
      { title : 'SECURITY',
        link : 'tabs/team-detail',
        icon : ''
      },
      { title : 'PHONE POLICY',
        link : 'tabs/team-detail',
        icon : ''
      },
      { title : 'ACCOMMODATION',
        link : 'tabs/team-detail',
        icon : ''
      },
      { title : 'GENERAL HOSPITAL INFORMATION',
        link : 'tabs/team-detail',
        icon : ''
      },
      { title : 'HOSPITAL MAP',
        link : 'tabs/team-detail',
        icon : ''
      },
    ];
  }

  public setNavigationLink(page: any) : void
  {
    this._router.navigateByUrl('/'+page.link);
  }

  ngOnInit() {
  }

}
