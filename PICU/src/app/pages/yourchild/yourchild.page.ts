import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  public pages : Array<{title: string, link: string, icon: string}>;

  constructor(private _router : Router) { 
    this.pages =[
      { title : 'COMMON CLINICAL CONDITIONS',
        link : 'tabs/team-detail',
        icon : ''
      },
      { title : 'PICU EQUIPMENT',
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
