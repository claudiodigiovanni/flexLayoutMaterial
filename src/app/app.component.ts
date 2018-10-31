import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flexLayoutMaterial';


  mycomponent:FormControl = new FormControl('initttt');

  constructor(private fb: FormBuilder) { }

  getCurrentRate(val){
    console.log(val);
    
  }

  test(){
    this.mycomponent.setValue('ciaoooone')
  }

  
}
