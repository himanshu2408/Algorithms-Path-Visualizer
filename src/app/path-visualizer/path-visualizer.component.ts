import { Component, OnInit } from '@angular/core';
import { Node } from '../node';
import { AlgorithmsService } from '../algorithms.service';
import { CommunicationService } from '../communication.service';

const TOTAL_ROWS = 25;
const TOTAL_COLS = 50;

@Component({
  selector: 'app-path-visualizer',
  templateUrl: './path-visualizer.component.html',
  styleUrls: ['./path-visualizer.component.css']
})

export class PathVisualizerComponent implements OnInit {
  startNodeRow = 15;
  startNodeCol = 15;
  finishNodeRow = 20;
  finishNodeCol = 45;
  gridProperties = [];

  constructor(private algorithmsService: AlgorithmsService, private communicationService: CommunicationService) {
    this.communicationService.dijkstraFired.subscribe(() => {
      this.runDijkstra();
    });

    this.communicationService.refreshGridFired.subscribe(() => {
      this.refreshGrid();
    });

    this.communicationService.startSelectedFired.subscribe((node) => {
      this.startSelected(node);
    });

    this.communicationService.finishSelectedFired.subscribe((node) => {
      this.finishSelected(node);
    });

  }

  ngOnInit() {
    this.generateGrid(TOTAL_ROWS, TOTAL_COLS);
  }

  startSelected(node) {
    document.getElementById(`node-${this.startNodeRow}-${this.startNodeCol}`).className = 'node';
    this.startNodeRow = node.row;
    this.startNodeCol = node.col;
    document.getElementById(`node-${this.startNodeRow}-${this.startNodeCol}`).className = 'node node-start';
  }

  finishSelected(node) {
    document.getElementById(`node-${this.finishNodeRow}-${this.finishNodeCol}`).className = 'node';
    this.finishNodeRow = node.row;
    this.finishNodeCol = node.col;
    document.getElementById(`node-${this.finishNodeRow}-${this.finishNodeCol}`).className = 'node node-finish';
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
 
  refreshGrid() {
    window.location.reload();
  }

  createNode(row, col) {
    let node: Node = {
      row,
      col,
      isStart: row === this.startNodeRow && col === this.startNodeCol,
      isFinish: row === this.finishNodeRow && col === this.finishNodeCol,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null
    }
    return node;
  }

  runDijkstra() {
    let visitedNodesInOrder: Node[] = this.algorithmsService.dijkstra(this.gridProperties, this.gridProperties[this.startNodeRow][this.startNodeCol], this.gridProperties[this.finishNodeRow][this.finishNodeCol]);
    console.log(visitedNodesInOrder);
    let nodesInShortestPathOrder = this.algorithmsService.getNodesInShortestPathOrder(this.gridProperties[this.finishNodeRow][this.finishNodeCol]);
    this.visualizeDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  visualizeDijkstra(visitedNodesInOrder: Node[], nodesInShortestPathOrder: Node[]) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.visualizeShortestPath(nodesInShortestPathOrder);
        }, 5 * i);
        return;
      }

      setTimeout(() => {
        document.getElementById(`node-${visitedNodesInOrder[i].row}-${visitedNodesInOrder[i].col}`).className += ' node-visited';
      }, 5 * i);
    };
  }

  visualizeShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className +=
          ' node-shortest-path';
      }, 30 * i);
    }
  }
}
