import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PathVisualizerComponent } from './path-visualizer/path-visualizer.component';
import { NodeComponent } from './node/node.component';
import { AlgorithmsService } from './algorithms.service';

@NgModule({
  declarations: [
    AppComponent,
    PathVisualizerComponent,
    NodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AlgorithmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
