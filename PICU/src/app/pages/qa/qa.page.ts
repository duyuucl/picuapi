import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.page.html',
  styleUrls: ['./qa.page.scss'],
})
export class QAPage implements OnInit {

  isDisabled = false;
  MyAction() {
    console.log('back button pressed');
    this.isDisabled = true;
  }

  public questions : any = [];

  constructor(private http: HttpClient) {}

  ionViewWillEnter() : void
   {
      this.load();
   }

  load()
   {  
      let url = "https://picuapi.azurewebsites.net/api/navs/qa" ;
      this.http.get(url).subscribe(data => {
         if(data)
         {
            this.questions = data;
         } else {
            console.log('Error');
         }

      });
   }

  ngOnInit() {
  }

}
