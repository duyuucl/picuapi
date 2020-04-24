import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/services/validators.service';
import { DomSanitizer } from '@angular/platform-browser';

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

  submitted = false;

  public questions : any = [];
  public form : FormGroup;

  constructor(private http: HttpClient, public formBuilder: FormBuilder, private _valid: ValidatorsService, private domSanitizer: DomSanitizer) {
     
      this.form = formBuilder.group({
         'name': ['', Validators.required, _valid.nameValid],
         'feedback' : ['', Validators.required]
      });

  }

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

   saveDetails(value : any) : void
   {
      let url = "https://picuapi.azurewebsites.net/api/navs/qa" ;
      this.http.post(url, {name: value.name, feedback: value.feedback}).subscribe(data =>{
         console.log(data);
      this.submitted = true;
   });
   }

   ngOnInit() {
   }

   getInnerHTMLValue() {
      return this.domSanitizer.bypassSecurityTrustHtml(this.questions.Q_answer);
   }

}
