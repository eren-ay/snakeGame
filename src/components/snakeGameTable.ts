import { bait } from "./snakeScreen";
import { snakeProp } from "./snake";
import moveKeys from "./moveKeysConst";
import { defineComponent } from "vue";
import "./snakeGameTable.css";

const snakes = new snakeProp();

export default defineComponent({
  name: "SnakeGame",
  props: {},
  $refs: {
    board: HTMLCanvasElement,
  },

  created() {
    //this.gameScreen.height=constants[0].snakeBoard.height;
    this.plus(5);
    //todo game table feature width height vb
  },

  mounted() {
    window.addEventListener('keydown', (e) => {
      for (let i = 0; i < moveKeys.length; i++) {
        if (e.key==moveKeys[i].direction){
          
          if (((snakes.snakeDirectionMove[0]*-1)==moveKeys[i].move[0])&&((snakes.snakeDirectionMove[1]*-1)==moveKeys[i].move[1])) {
            // eslint-disable-next-line
          }else{
            snakes.snakeDirectionMove=moveKeys[i].move;
          }

        }
      }

      
    });
    this.plus(5);
    const gameBoard: any | HTMLCanvasElement = this.$refs.board;
    snakes.boardContext = gameBoard.getContext("2d");
    setTimeout(() => {
      this.bait=true;
    }, 9330);
    setTimeout(() => {
      this.bait=true;
    }, 5220);
    setInterval(this.snakeMove, 1000,snakes);
  },
  data() {
    return {
      gameScreen: {
        width: 800,
        height: 800,
      },
      count: 200,
      bait:false,
      key:38, 
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
      this.drawRect(snake.boardContext,snake.snakeLocX(0),snake.snakeLocY(0),snake.snakeBoxSizeWidth,snake.snakeBoxSizeHeight);   
      this.bait=false;
    },

    drawRect(gameBoard: any | CanvasRenderingContext2D,x: number,y: number,boxWidth: number,boxHeight: number) {
      gameBoard.beginPath();
      gameBoard.fillStyle = "red";
      gameBoard.strokeStyle = "purple";
      gameBoard.rect(x, y, boxWidth, boxHeight);
      gameBoard.fill();
      gameBoard.closePath();
    },

    

    clearRect(gameBoard: any | CanvasRenderingContext2D,x: number,y: number,boxWidth: number,boxHeight: number) {
      gameBoard.clearRect(x, y, boxWidth, boxHeight);
    },


    plus(sayi:number) {
      this.count= this.count+sayi;
    },
  },
});
