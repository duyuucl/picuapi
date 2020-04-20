import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  nameValid(control: FormControl) : Promise<any> {
    return new Promise(resolve => {
        let pattern = /[0-9]/;
        if(pattern.test(control.value))
        {
          resolve({InvalidName : true});
        }
        resolve(null);
      });
  }

}
