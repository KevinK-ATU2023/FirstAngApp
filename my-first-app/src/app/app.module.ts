import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentaComponent } from './componenta/componenta.component';
import { ComponentbComponent } from './componentb/componentb.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentaComponent,
    ComponentbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
