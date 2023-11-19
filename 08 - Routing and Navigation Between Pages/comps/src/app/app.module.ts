import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionsComponent } from './collections/collections.component';
import { ElementsComponent } from './elements/elements.component';
import { ModsComponent } from './mods/mods.component';
import { ViewsComponent } from './views/views.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionsComponent,
    ElementsComponent,
    ModsComponent,
    ViewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
