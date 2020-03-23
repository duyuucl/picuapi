import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

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
  
  public pages : any = [];

  constructor(private _router : Router, private http: HttpClient) {}

  ionViewWillEnter() : void
   {
      this.load();
   }

  load()
   {  
      let url = "http://localhost:2000/api/navs/team" ;
      this.http.get(url).subscribe(data => {
         if(data)
         {
            this.pages = data;
         } else {
            console.log('Error');
         }

      });
   }

  public setNavigationLink(param: any) : void
  {
    this._router.navigateByUrl('/'+param.Nav_link);
  }

  ngOnInit() {
  }

}
