import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})
export class NavigationPage implements OnInit {

  isDisabled = false;
  MyAction() {
    console.log('back button pressed');
    this.isDisabled = true;
  }
  
  // I think here there should be two queries - if there is anything for the page in the content table, that will
  // be displayed first and then we display the menu from the navigation table

  public contents : Array<{image: string, text: string, parent: number}>;
  public pages : Array<{title: string, link: string, icon: string}>;

  constructor(private _router : Router) { 
    this.contents =[
      { image : '../assets/Team_Pic.jpg',
        text : 'Text with relevant contents',
        parent : 1
      }
    ];

    this.pages =[
      { title : 'TOPIC 1',
        link : 'tabs/team-detail',
        icon : ''
      },
      { title : 'TOPIC 2',
        link : 'tabs/team-detail',
        icon : ''
      },
      { title : 'TOPIC 3',
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
