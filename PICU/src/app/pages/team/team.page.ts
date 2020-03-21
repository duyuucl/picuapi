import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  
  public pages : Array<{title: string, link: string, icon: string}>;

  constructor(private _router : Router) { 
    this.pages =[
      { title : 'MEDICAL',
        link : 'tabs/team-detail',
        icon : ''
      },
      { title : 'NURSING',
        link : 'tabs/team-detail',
        icon : ''
      },
      { title : 'HEALTH CARE ASSISTANTS',
        link : 'tabs/team-detail',
        icon : ''
      },
      { title : 'PHYSIOTHERAPISTS',
        link : 'tabs/team-detail',
        icon : ''
      },
      { title : 'DIETICIANS',
        link : 'tabs/team-detail',
        icon : ''
      },
      { title : 'PHARMACISTS',
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
