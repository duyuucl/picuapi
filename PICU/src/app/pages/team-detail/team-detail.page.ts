import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

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

  id : any;

  public contents : any = [];

  constructor(private route: ActivatedRoute, private _router: Router, private http: HttpClient) {
    this.route.queryParams.subscribe(params => {
      if (this._router.getCurrentNavigation().extras.state) {
        this.id= this._router.getCurrentNavigation().extras.state.parent_id;
      }
    });
  }

  ionViewWillEnter() : void
   {
      this.load();
   }

  load()
   {  
      let url = "https://picu.azurewebsites.net/api/content/"+ this.id ;
      this.http.get(url).subscribe(data => {
         if(data)
         {
            this.contents = data;
         } else {
            console.log('Error');
         }

      });
   }

/*
  public contents : Array<{image1: string, image2: string, image3: string, text: string, parent: number}>;

  constructor(private _router : Router) { 
    this.contents =[
      { image1 : '../assets/yourchild_photos/bedspace.png',
        image2 : '../assets/yourchild_photos/ventilator1.png',
        image3 : null,
        text : 'Text with relevant contents',
        parent : 1
      }
    ];
  }

  public setNavigationLink(page: any) : void
  {
    this._router.navigateByUrl('/'+page.link);
  }
*/
  ngOnInit() {
  }

}
