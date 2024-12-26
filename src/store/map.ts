import { defineStore } from 'pinia';

export const useMapStore = defineStore("map", () => {
  console.log("这里是一个回调")
  const map = [2, 3, 4];
  return {
    map
  }
})