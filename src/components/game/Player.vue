<template>
  <div class="absolute" :style="position">
    <img :src="keeperImg" alt="">
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import keeperImg from '../../assets/keeper.png'

import { usePosition } from '../../composables/usePosition';
import { usePlayerStore } from '../../store/player'
useMove()
const { player } = usePlayerStore()
const { position } = usePosition(player)


function useMove() {
  const {
    movePlayerToLeft, movePlayerToRight,
    movePlayerToDown, movePlayerToUp
  } = usePlayerStore()

  onMounted(() => {
    window.addEventListener('keyup', handleKeyup)
  })

  onUnmounted(() => {
    window.removeEventListener("keyup", handleKeyup)
  })

  function handleKeyup(e: KeyboardEvent) {
    switch (e.code) {
      case 'ArrowLeft':
        movePlayerToLeft();
        break;
      case 'ArrowRight':
        movePlayerToRight();
        break;
      case 'ArrowDown':
        movePlayerToDown()
        break;
      case 'ArrowUp':
        movePlayerToUp()
        break;
    }

  }
}





</script>

<style scoped></style>