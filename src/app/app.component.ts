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

  myform:FormGroup;
  
  ngOnInit() {
      this.myform = this.fb.group({
        stars: this.fb.array([])
      })
  }

  get stars() {
    return this.myform.get('stars') as FormArray;
  }

  addStar(){
    this.stars.push(this.fb.control(''))
    
  }

  
}
