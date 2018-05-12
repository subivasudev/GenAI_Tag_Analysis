import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DataserviceService } from './dataservice.service';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    UsercomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
