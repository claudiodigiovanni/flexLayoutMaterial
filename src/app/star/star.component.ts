import { Component, OnInit, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit  {

  @Input()
  rate:number = 0;

  @Output()
  currentRate = new EventEmitter<string>();

  myform:FormGroup;

  constructor(private fb:FormBuilder){}
  
  ngOnInit() {
      this.myform = this.fb.group({
        stars: this.fb.array([])
      })
      for (let i = 0; i < this.rate; i++) {
        this.stars.push(this.fb.control(''));    
      }
  }

  get stars() {
    return this.myform.get('stars') as FormArray;
  }

  addStar(){
    //console.log('add star....');
    this.rate++;
    this.stars.push(this.fb.control(''))
    this.currentRate.emit("" + this.rate);
    
  }

  

}


@Component({
  selector: 'app-inner-star',
  template: `
    <mat-icon class="mystar">star</mat-icon>
  ` ,
  styleUrls: ['./star.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InnerComponent),
      multi: true
    }
  ]
})
export class InnerComponent implements ControlValueAccessor, OnInit  {

  onChange: any = () => { };
  onTouched: any = () => { };


  constructor(){}

  ngOnInit(){}

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) { 
    this.onTouched = fn;
  }

  writeValue(value) {
    
  }

}

