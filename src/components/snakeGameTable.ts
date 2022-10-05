import { SnakeCanvas } from "./interfaces";
import { snakeProp } from "./interfaces";
import  constants  from "./snakeConst";
import { defineComponent } from 'vue';
import './snakeGameTable.css';

const snakeBoard: SnakeCanvas = {
    width:330,
    height:500,
  };
  const snakes= new snakeProp;

  export default defineComponent({
    name:"SnakeGame",
    props: {
      
    },
    $refs:{
      board:HTMLCanvasElement
    },
    
    created() {
      //this.gameScreen.height=constants[0].snakeBoard.height;
      this.plus();
      //todo game table feature width height vb
    },

    mounted() {
        this.plus();
        const gameBoard:any|HTMLCanvasElement = this.$refs.board;
        snakes.boardContext = gameBoard.getContext("2d");
        this.snakeDrawRect(snakes.boardContext);
    },
    data() {
      return {
        gameScreen: {
          width:600,
          height:600
        },
        count: 200,
        snake:{
          cellRow:Number,
          cellColumn:Number,
        }
        
      }
      },
      methods: {
        drawRect(gameBoard:any|CanvasRenderingContext2D,x:number,y:number,boxWidth:number,boxHeight:number){
          gameBoard.beginPath();
          gameBoard.lineWidth=3;
          gameBoard.fillStyle = "red";
          gameBoard.strokeStyle='purple';
          gameBoard.rect(x,y,boxWidth,boxHeight);
          gameBoard.fill();
          gameBoard.stroke();
          gameBoard.closePath();
        },
        

        clearRect(gameBoard:any|CanvasRenderingContext2D,x:number,y:number,boxWidth:number,boxHeight:number){
          gameBoard.clearRect(x,y,boxWidth,boxHeight);
        },
        

        boardDrawSnake(){
          this.plus();
          if (this.count==208) {
            this.count=snakes.snakeLocations.length;
            this.clearRect(snakes.boardContext,snakes.snakeLocX(snakes.snakeLocations.length-3),snakes.snakeLocY(snakes.snakeLocations.length-3),snakes.snakeBoxSizeWidth,snakes.snakeBoxSizeHeight);
          }
           snakes.snakeDraw(true);
           
        },


        snakeDrawRect(gameBoard:any|CanvasRenderingContext2D/*,snake:snakeProp*/){
         
            
          for (let i = 0; i < snakes.snakeLocations.length; i++) {
            this.drawRect(snakes.boardContext,snakes.snakeLocX(i),snakes.snakeLocY(i),snakes.snakeBoxSizeWidth,snakes.snakeBoxSizeHeight);
          } this.boardDrawSnake();
        },

        

        plus() {
          
          return this.count++
        },
        
        
        /*
        ciz(){
          snakeBoard.boardContext.moveTo(0, 0);
          snakeBoard.boardContext.lineTo(100, 100); 
          snakeBoard.boardContext.stroke();
        },
        drawBox() {
          snakeBoard.boardContext.beginPath();
          snakeBoard.boardContext.fillStyle = "red";
          snakeBoard.boardContext.lineWidth = 3;
          snakeBoard.boardContext.strokeStyle = 'black';
          const boxSize :number|any = 60;
          
          const boxes:number = Math.floor(600 / boxSize);
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
        
        snakeDrawCell(){
          return null
        }*/
      },
      

})