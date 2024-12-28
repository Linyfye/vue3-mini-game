<template>
  <div>
    <div class="flex" v-for="(row, i ) in map" :key="i">
      <div v-for="(col, j) in map[i]" :key="j">
        <template v-if="map[i][j] == MapTile.WALL">
          <img :src="wallImg" alt="">
        </template>
        <template v-else-if="map[i][j] == MapTile.FLOOR">
          <img :src="floorImg" alt="">
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import floorImg from '../../assets/floor.png';
import wallImg from '../../assets/wall.png';

import { useMapStore, MapTile } from '../../store/map';

const { map } = useMapStore()

</script>

<style scoped></style>