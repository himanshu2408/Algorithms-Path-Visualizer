import { Component, OnInit } from '@angular/core';
import { Node } from '../node';
import { AlgorithmsService } from '../algorithms.service';
import { setTimeout } from 'timers';

const START_NODE_ROW = 15;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 20;
const FINISH_NODE_COL = 45;
const TOTAL_ROWS = 30;
const TOTAL_COLS = 60;

@Component({
  selector: 'app-path-visualizer',
  templateUrl: './path-visualizer.component.html',
  styleUrls: ['./path-visualizer.component.css']
})

export class PathVisualizerComponent implements OnInit {
  constructor(private algorithmsService: AlgorithmsService) { }

  gridProperties = [];
  ngOnInit() {
    this.generateGrid(TOTAL_ROWS, TOTAL_COLS);
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

  renderGrid() {
    document.getElementById('grid').innerHTML = `
      
      `;
  }

  clearGrid() {
    this.generateGrid(TOTAL_ROWS, TOTAL_COLS);
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

  runDijkstra() {
    let visitedNodesInOrder: Node[] = this.algorithmsService.dijkstra(this.gridProperties, this.gridProperties[START_NODE_ROW][START_NODE_COL], this.gridProperties[FINISH_NODE_ROW][FINISH_NODE_COL]);
    console.log(visitedNodesInOrder);
    this.visualizeDijkstra(visitedNodesInOrder);
  }

  visualizeDijkstra(visitedNodesInOrder: Node[]) {
    visitedNodesInOrder.forEach(node => {
      setTimeout(() => {
        document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-visited';
      }, 50);
    });
  }


}
