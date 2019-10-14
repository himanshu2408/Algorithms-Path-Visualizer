import { Component, OnInit } from '@angular/core';
import { Node } from '../node';


const START_NODE_ROW = 5;
const START_NODE_COL = 8;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 50;

@Component({
  selector: 'app-path-visualizer',
  templateUrl: './path-visualizer.component.html',
  styleUrls: ['./path-visualizer.component.css']
})

export class PathVisualizerComponent implements OnInit {
  constructor() { }

  gridProperties = [];
  ngOnInit() {
    this.generateGrid(20, 60);
  }

  generateGrid(rows, cols) {
    
    for (let row = 0; row < rows; row++) {
      let currentRow = [];
      for (let col = 0; col < cols; col++) {
        currentRow.push(this.createNode(row, col));
      }
      this.gridProperties.push(currentRow);
    }
  }

  createNode(row, col) {
    let node: Node = {
      row,
      col,
      isStart: row === START_NODE_ROW && col === START_NODE_COL,
      isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null
    }
    return node;
  }

}
