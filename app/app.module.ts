import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {SidebarComponent} from './sidebar.component';
import {PaneComponent} from './pane.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, SidebarComponent, PaneComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
