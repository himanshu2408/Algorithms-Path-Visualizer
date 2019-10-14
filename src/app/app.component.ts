import { Component } from '@angular/core';
import { CommunicationService } from './communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private communicationService: CommunicationService) {  }

  runDijkstra() {
    this.communicationService.fireDijkstra();
  }

  refreshGrid() {
    this.communicationService.refreshGrid();
  }

  selectStart() {
    this.communicationService.selectStart();
  }

  selectFinish() {
    this.communicationService.selectFinish();
  }
}
