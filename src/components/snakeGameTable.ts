import { SnakeCanvas } from "./interfaces";
import { defineComponent } from 'vue';
import './snakeGameTable.css';

const snakeBoard: SnakeCanvas = {
    width:330,
    height:20,
  };

  export default defineComponent({
    name:"SnakeGame",
    props: {
      
    },
    $refs:{
      board:HTMLCanvasElement
    },
    
    mounted() {
        this.plus();
        const gameBoard:any|HTMLCanvasElement = this.$refs.board;
        snakeBoard.boardContext = gameBoard.getContext("2d");
        this.drawBox();
    },
    data() {
      return {
        gameScreen: {
          width:500,
          height:500
        },
        count: 200
      }
      },
      methods: {
        plus() {
          
          return this.count++
        },
        ciz(){
          snakeBoard.boardContext.moveTo(0, 0);
          snakeBoard.boardContext.lineTo(222, 100); 
          snakeBoard.boardContext.stroke();
        },
        drawBox() {
          snakeBoard.boardContext.beginPath();
          snakeBoard.boardContext.fillStyle = "red";
          snakeBoard.boardContext.lineWidth = 3;
          snakeBoard.boardContext.strokeStyle = 'black';
          const boxSize :number|any = 20;
          
          const boxes:number = Math.floor(500 / boxSize);
          for (let row = 0; row < boxes; row++) {
            for (let column = 0; column < boxes; column++) {
              const x = column * boxSize;
              const y = row * boxSize;
              snakeBoard.boardContext.rect(x, y, boxSize, boxSize);
              snakeBoard.boardContext.fill();
              snakeBoard.boardContext.stroke();
            }
          }
          snakeBoard.boardContext.closePath();
        },
        startCell(){
          return Math.round(this.gameScreen.width / 2);
        }
      },
      created() {
        this.plus()
        console.log(this.count);
        
      }

})