import { Injectable } from '@angular/core';
import { Node } from './node';
@Injectable({
  providedIn: 'root'
})
export class AlgorithmsService {

  constructor() { }

  dijkstra(grid, startNode: Node, finishNode: Node) {
    let unvisitedNodes = this.getAllNodes(grid);
    startNode.distance = 0;
    let visitedNodes = [];
    while (unvisitedNodes.length) {
      this.sortNodesByDistance(unvisitedNodes);
      let closestNode: Node = unvisitedNodes.shift();
      if (closestNode.distance == Infinity) {
        return visitedNodes;
      }
      closestNode.isVisited = true;
      visitedNodes.push(closestNode);
      if (closestNode == finishNode) {
        return visitedNodes;
      }
      this.updateUnvisitedNeighbours(grid, closestNode);
    }
  }

  private updateUnvisitedNeighbours(grid, node: Node) {
    let unvisitedNeighbours: Node[] = this.getUnvisitedNodes(grid, node);
    for (let neighbor of unvisitedNeighbours) {
      neighbor.distance = node.distance + 1;
      neighbor.previousNode = node;
    }
  }

  private getUnvisitedNodes(grid, node: Node) {
    let neighbors = [];
    let { col, row } = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors.filter(neighbor => !neighbor.isVisited);
  }

  private sortNodesByDistance(nodes: Node[]) {
    return nodes.sort((nodeA, nodeB) => { return nodeA.distance - nodeB.distance });
  }

  private getAllNodes(grid) {
    let nodes = [];
    grid.forEach(row => {
      row.forEach(node => {
        nodes.push(node);
      });
    });
    return nodes;
  }

  getNodesInShortestPathOrder(finishNode) {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
  }
}
