import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { BloggerAppRoutingModule } from './blogger-app-routing.module';
import { BloggerAppComponent } from './blogger-app.component';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    BloggerAppComponent
  ],
  imports: [
    BrowserModule,
    BloggerAppRoutingModule,
    ComponentsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [BloggerAppComponent]
})
export class BloggerAppModule { }
