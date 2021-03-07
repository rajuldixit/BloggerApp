import { TagsViewComponent } from './tags-view/tags-view.component';
import { LeftNavbarComponent } from './left-navbar/left-navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BlogFeedsComponent } from './blog-feeds/blog-feeds.component';
@NgModule({
  declarations: [
    BlogFeedsComponent,
    HeaderComponent,
    LeftNavbarComponent,
    TagsViewComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class ComponentsModule { }
