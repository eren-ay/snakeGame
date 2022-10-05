
<template>
  <canvas ref="board" id="snake-canvas" :width="gameScreen.width" :height="gameScreen.height"> </canvas>
  <button class="btnStart" @click="snakeDrawRect">{{ count }}</button>
</template>

<script langs="ts" src="./snakeGameTable.ts"></script>
