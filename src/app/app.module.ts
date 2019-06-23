import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersCrudComponent } from './users/crud/crud.component';
import { UsersCrudService } from './users/crud/crud.service';
import { HttpClientModule } from '@angular/common/http';
import { IFrameComponent } from './users/i-frame/i-frame.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
    ,UsersComponent
    ,UsersCrudComponent
    ,IFrameComponent
  ],
  imports: [
    BrowserModule
    ,AppRoutingModule
    ,HttpClientModule
  ],
  providers: [
    UsersCrudService
    //,{provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
