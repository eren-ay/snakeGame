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
      for (let i = 0; i < moveKeys.length; i++) {
        if (e.key==moveKeys[i].direction){
          snakes.snakeDirectionMove=moveKeys[i].move;
        }
      }
      
    });
    this.plus();
    const gameBoard: any | HTMLCanvasElement = this.$refs.board;
    snakes.boardContext = gameBoard.getContext("2d");
    setTimeout(() => {
      this.bait=true;
    }, 7330);
    setTimeout(() => {
      this.bait=true;
    }, 5220);
    setTimeout(() => {
      this.bait=true;
    }, 6110);
    
    setInterval(this.snakeMove, 1000,snakes);
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
      bait:false,
    };
  },
  methods: {
    snakeMove(snake: snakeProp) {
      //  canvas clear
      if (this.bait==false) {
        this.clearRect(snake.boardContext,snake.snakeLocX(snake.snakeLocations.length-1),snake.snakeLocY(snake.snakeLocations.length-1),snake.snakeBoxSizeWidth,snake.snakeBoxSizeHeight);
      }      
      snake.snakeDraw(this.bait);
      //  canvas drawing
      for (let i = 0; i < snake.snakeLocations.length; i++) {
        this.drawRect(snake.boardContext,snake.snakeLocX(i),snake.snakeLocY(i),snake.snakeBoxSizeWidth,snake.snakeBoxSizeHeight);   
        console.log(snake.snakeLocY(i));
        this.count+=1;    
      }
 
      this.bait=false;
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
/*
    moveDirect(evt:KeyboardEvent){
      
      const randomDirectionIndex = Math.floor(Math.random() * 4);
      const moveKeysDirect = moveKeys[randomDirectionIndex];
      snakes.snakeDirectionMove=[moveKeysDirect.move.x,moveKeysDirect.move.y];
    },
*/

    plus() {
      return this.count++;
    },
  },
});
