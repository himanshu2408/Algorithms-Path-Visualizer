import { Component, OnInit, Input } from '@angular/core';
import { Node } from '../node';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  @Input('node') node: Node;
  extraClassName: string;
  isSelectStart: boolean = false;
  isSelectFinish: boolean = false;
  constructor(private communicationService: CommunicationService) {
    this.communicationService.selectStartFired.subscribe(() => {
      this.onSelectStartFire();
    });

    this.communicationService.selectFinishFired.subscribe(() => {
      this.onSelectFinishFire();
    });
  }

  onSelectStartFire() {
    this.isSelectStart = true;
    this.isSelectFinish = false;
  }

  onSelectFinishFire() {
    this.isSelectFinish = true;
    this.isSelectStart = false;
  }

  nodeClicked(node: Node) {
    if (this.isSelectStart) {
      node.isStart = true;
      this.communicationService.startSelected(node);
    }
    else if (this.isSelectFinish) {
      node.isFinish = true;
      this.communicationService.finishSelected(node);
    }
    this.isSelectStart = false;
    this.isSelectFinish = false;
  }

  ngOnInit() {
    this.extraClassName = this.node.isFinish
      ? 'node-finish'
      : this.node.isStart
        ? 'node-start'
        : this.node.isWall
          ? 'node-wall'
          : '';
  }

}
