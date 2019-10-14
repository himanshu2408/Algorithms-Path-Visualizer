import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  
  private runDijkstraFired = new Subject<any>();
  dijkstraFired = this.runDijkstraFired.asObservable();

  private runRefreshGridFired = new Subject<any>();
  refreshGridFired = this.runRefreshGridFired.asObservable();

  private runSelectStartFired = new Subject<any>();
  selectStartFired = this.runSelectStartFired.asObservable();

  private runSelectFinishFired = new Subject<any>();
  selectFinishFired = this.runSelectFinishFired.asObservable();

  private runStartSelected = new Subject<any>();
  startSelectedFired = this.runStartSelected.asObservable();

  private runFinishSelected = new Subject<any>();
  finishSelectedFired = this.runFinishSelected.asObservable();

  fireDijkstra() {
    this.runDijkstraFired.next();
  }

  refreshGrid() {
    this.runRefreshGridFired.next();
  }

  selectStart() {
    this.runSelectStartFired.next();
  }

  selectFinish() {
    this.runSelectFinishFired.next();
  }

  startSelected(node) {
    this.runStartSelected.next(node);
  }

  finishSelected(node) {
    this.runFinishSelected.next(node);
  }
}
