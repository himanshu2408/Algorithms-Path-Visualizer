import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PathVisualizerComponent } from './path-visualizer/path-visualizer.component';
import { NodeComponent } from './node/node.component';

@NgModule({
  declarations: [
    AppComponent,
    PathVisualizerComponent,
    NodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
