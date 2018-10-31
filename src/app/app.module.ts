import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule } from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule} from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarComponent,InnerComponent } from './star/star.component';
import { SecondExampleComponent } from './second-example/second-example.component';

@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    InnerComponent,
    SecondExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
