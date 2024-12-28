import { defineStore } from 'pinia';
import { type Position } from '../composables/usePosition';

export enum MapTile {
  FLOOR = 2,
  WALL = 1
}
type Map = MapTile[][]

export const useMapStore = defineStore("map", () => {
  let map = [
    [1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
  ]

  function setupMap(newMap: Map) {
    map.splice(0, map.length, ...newMap) // 把原来的map 删掉,再把新的解构过来
  }

  function isMall(position: Position) {
    return map[position.x][position.y] === MapTile.WALL
  }

  return {
    map,
    setupMap,
    isMall
  }
})