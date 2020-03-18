import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { Iphone11proComponent } from './components/iphone11pro/iphone11pro.component';
import { MacbookAirComponent } from './components/macbook-air/macbook-air.component';
import { IpadProComponent } from './components/ipad-pro/ipad-pro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Iphone11proComponent,
    MacbookAirComponent,
    IpadProComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
