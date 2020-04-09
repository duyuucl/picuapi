import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { HttpClient} from '@angular/common/http';

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
  id : any;
  public pages : any = [];
  public contents : any = [];

  constructor(private route: ActivatedRoute, private _router : Router, private http: HttpClient) {
   this.route.queryParams.subscribe(params => {
      if (this._router.getCurrentNavigation().extras.state) {
        this.id= this._router.getCurrentNavigation().extras.state.parent_id;
      }
    });
  }

  ionViewWillEnter() : void
   {
      this.load();
      this.load_menu();
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

   load_menu()
   {  
      let url = "https://picu.azurewebsites.net/api/menu/"+ this.id ;
      this.http.get(url).subscribe(data_menu => {
         if(data_menu)
         {
            this.pages = data_menu;
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
