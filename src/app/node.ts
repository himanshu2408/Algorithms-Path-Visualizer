export interface Node {
  row: number,
  col: number,
  isStart: boolean,
  isFinish: boolean,
  distance: number,
  isVisited: boolean,
  isWall: boolean,
  previousNode: any,
}
