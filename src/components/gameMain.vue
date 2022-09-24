
<template>
  <canvas ref="board" id="snake-canvas" :width="gameScreen.width" :height="gameScreen.height"> </canvas>
  <button class="adana" @click="plus">{{ count }}</button>
</template>


<script langs="ts" src="./snakeGameTable.ts"></script>
