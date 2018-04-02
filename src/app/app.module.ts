import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MementosComponent } from './mementos/mementos.component';
import { VlogsComponent } from './vlogs/vlogs.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MementosComponent,
    VlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
