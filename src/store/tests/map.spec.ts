import { it, expect, describe, beforeEach } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { useMapStore } from '../map';
beforeEach(() => {
  setActivePinia(createPinia())
})
describe('map', () => {
  it('should', () => {
    expect(true).toBe(true)
  })

  it('should setup map', () => {
    const { map, setupMap } = useMapStore();
    const newMap = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ]
    setupMap(newMap);
    expect(map).toEqual(newMap)
  })
})