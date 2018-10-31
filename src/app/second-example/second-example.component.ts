import { Component, OnInit, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { getQueryValue } from '@angular/core/src/view/query';


@Component({
  selector: 'app-second-example',
  template: `
    <mat-icon >book</mat-icon>
  ` ,
  styleUrls: ['./second-example.component.css'],

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SecondExampleComponent),
      multi: true
    }
  ]
})
export class SecondExampleComponent implements ControlValueAccessor, OnInit  {

  onChange: any = () => { };
  onTouched: any = () => { };

  /* @Input()
  value:string = "init string"

  getValue(){
    return this.value;
  } 

   setValue(value){
    this.value = value;
  } */

  constructor(){}

  ngOnInit(){
    this.writeValue('init')
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) { 
    this.onTouched = fn;
  }

  writeValue(value) {
    console.log('writeValue:' + value);
    
    //this.value = value;
    
  }

}
