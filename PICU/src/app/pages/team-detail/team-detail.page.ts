import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.page.html',
  styleUrls: ['./team-detail.page.scss'],
})
export class TeamDetailPage implements OnInit {

  isDisabled = false;
  MyAction() {
    console.log('back button pressed');
    this.isDisabled = true;
  }

  public contents : Array<{image: string, text: string, parent: number}>;

  // This bit should take the information from the DB query results that is relevant to a specific page (using page ID)

  constructor(private _router : Router) { 
    this.contents =[
      { image : '../assets/Team_Pic.jpg',
        text : 'Text with relevant contents',
        parent : 1
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
