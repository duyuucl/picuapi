import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  public questions : Array<{question: string, reply: string}>;

  constructor(private _router : Router) { 
    this.questions =[
      { question : 'What is PICU?',
        reply : 'PICU is an abbreviation for Paedriatic Intensive Care Unit.'
      },
      { question : 'Question 2',
      reply : 'Reply to question 2'
      },
      { question : 'Question 3',
      reply : 'Reply to question 3'
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
