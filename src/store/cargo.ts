import { defineStore } from 'pinia';

interface Cargo {
  x: number;
  y: number;
}

export const useCargoStore = defineStore("cargo", () => {
  const cargos: Cargo[] = [
    {
      x: 2,
      y: 1,
    }, {
      x: 2,
      y: 2
    }
  ]
  return {
    cargos
  }
})