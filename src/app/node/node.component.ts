import { Component, OnInit, Input } from '@angular/core';
import { Node } from '../node';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  @Input('node') node: Node;
  extraClassName: string;
  constructor() {
 
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
