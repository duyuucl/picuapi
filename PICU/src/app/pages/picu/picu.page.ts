import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient} from '@angular/common/http';

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

  public pages : any = [];

  constructor(private _router : Router, private http: HttpClient) {}

  ionViewWillEnter() : void
   {
      this.load();
   }

  load()
   {  
      let url = "http://localhost:2000/api/navs/picu" ;
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
    let navExtras : NavigationExtras = {
       state: {
          parent_id: param.id
       }
    }
    this._router.navigate(['/'+param.Nav_link], navExtras);
  }

  ngOnInit() {
  }

}
