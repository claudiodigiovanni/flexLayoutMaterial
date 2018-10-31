import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarComponent),
      multi: true
    }
  ]
})
export class StarComponent implements ControlValueAccessor, OnInit  {

  @Input()
  rate:number;
  

  onChange: any = () => { };
  onTouched: any = () => { };


  constructor(){}

  ngOnInit(){
    
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) { 
    this.onTouched = fn;
  }

  writeValue(value) {
    if (value) {
      this.rate = value;
    }
  }

}
