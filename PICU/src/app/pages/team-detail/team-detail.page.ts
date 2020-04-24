import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(private route: ActivatedRoute, private _router: Router, private http: HttpClient, private domSanitizer: DomSanitizer) {
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
      let url = "https://picuapi.azurewebsites.net/api/content/"+ this.id ;
      this.http.get(url).subscribe(data => {
         if(data)
         {
            this.contents = data;
         } else {
            console.log('Error');
         }

      });
   }

  ngOnInit() {
    this.contents.Text = this.getInnerHTMLValue();
  }

  getInnerHTMLValue() {
    return this.domSanitizer.bypassSecurityTrustHtml(this.contents.Text);
  }

}
