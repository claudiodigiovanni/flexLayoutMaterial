import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flexLayoutMaterial';

  constructor(private fb: FormBuilder) { }

  getCurrentRate(val){
    console.log(val);
    
  }

  
}
