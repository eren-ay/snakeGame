import { SnakeCanvas } from "./interfaces";
import { snakeProp } from "./interfaces";
import constants from "./snakeConst";
import moveKeys from "./moveKeysConst";
import { defineComponent } from "vue";
import "./snakeGameTable.css";

const snakeBoard: SnakeCanvas = {
  width: 330,
  height: 500,
};
const snakes = new snakeProp();

export default defineComponent({
  name: "SnakeGame",
  props: {},
  $refs: {
    board: HTMLCanvasElement,
  },

  created() {
    //this.gameScreen.height=constants[0].snakeBoard.height;
    this.plus();
    //todo game table feature width height vb
  },

  mounted() {
    window.addEventListener('keydown', (e) => {
      if (!e.repeat) {
        console.log(`${e.key}`);
      } else {
        console.log(`Key "${e.key}" repeating [event: keydown]`);
      }
    });
    this.plus();
    const gameBoard: any | HTMLCanvasElement = this.$refs.board;
    snakes.boardContext = gameBoard.getContext("2d");
    this.drawWithInterval(snakes,false,1000);
  },
  data() {
    return {
      gameScreen: {
        width: 800,
        height: 800,
      },
      count: 200,
      snake: {
        cellRow: Number,
        cellColumn: Number,
      },
    };
  },
  methods: {
    snakeMove(snake: snakeProp, bait: boolean) {
      //  canvas clear
      if (bait==false) {
        this.clearRect(snake.boardContext,snake.snakeLocX(snake.snakeLocations.length-1),snake.snakeLocY(snake.snakeLocations.length-1),snake.snakeBoxSizeWidth,snake.snakeBoxSizeHeight);
      }      
      snake.snakeDraw(bait);
      snake.snakeLocations[0] = snake.snakeDirectionMove;
      //  canvas drawing
      this.drawRect(snake.boardContext,snake.snakeLocX(0),snake.snakeLocY(0),snake.snakeBoxSizeWidth,snake.snakeBoxSizeHeight);
      
    },

    
    drawWithInterval(snake:snakeProp ,bait:boolean,delayInMilliseconds: number) {
      setInterval(this.snakeMove, delayInMilliseconds,snake,bait);
    },

    drawRect(gameBoard: any | CanvasRenderingContext2D,x: number,y: number,boxWidth: number,boxHeight: number) {
      gameBoard.beginPath();
      gameBoard.lineWidth = 3;
      gameBoard.fillStyle = "red";
      gameBoard.strokeStyle = "purple";
      gameBoard.rect(x, y, boxWidth, boxHeight);
      gameBoard.fill();
      gameBoard.stroke();
      gameBoard.closePath();
    },

    

    clearRect(gameBoard: any | CanvasRenderingContext2D,x: number,y: number,boxWidth: number,boxHeight: number) {
      gameBoard.clearRect(x-3, y-3, boxWidth+6, boxHeight+6);
    },

    moveDirect(evt:KeyboardEvent){
      
      const randomDirectionIndex = Math.floor(Math.random() * 4);
      const moveKeysDirect = moveKeys[randomDirectionIndex];
      snakes.snakeDirectionMove=[moveKeysDirect.move.x,moveKeysDirect.move.y];
    },


    plus() {
      return this.count++;
    },
  },
});
