
<template>
  <canvas ref="board" id="snake-canvas" :width="gameScreen.width" :height="gameScreen.height"> </canvas>
  <button class="btnStart" @click="plus">{{ count }}</button>
</template>

<script langs="ts" src="./snakeGameTable.ts"></script>
