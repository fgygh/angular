import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AmplifyAngularModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
  providers: [
    AmplifyService,
  ]
})
export class AppModule { }
