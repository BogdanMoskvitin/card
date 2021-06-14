import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  month: string = "";
  year: string = "";
  months = ["01","02","03","04","05","06","07","08","09","10","11","12"];
  years = ["2021","2022","2023","2024","2025","2026","2027","2028","2029","2030","2031","2032"];

  visibility: boolean = false;

  toggle(){
    this.visibility = !this.visibility;
  }

  myForm: FormGroup;
  constructor(){
    this.myForm = new FormGroup({
      "userNumber": new FormControl("#### #### #### ####", [Validators.required, Validators.pattern("[0-9 A-Z]{16}")]),
      "userName": new FormControl("FULL NAME", [Validators.required, Validators.pattern("[A-Z]*")]),
      "userCvv": new FormControl("", [Validators.required, Validators.pattern("[0-9]{3}")])
    }) 
  }
}