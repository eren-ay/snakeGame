import { SnakeCanvas } from "./interfaces";
import { snakeProp } from "./interfaces";
import  constants  from "./snakeConst";
import moveKeys from './moveKeysConst'
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
        this.drawWithInterval(2000);
        
        
    },
    data() {
      return {
        gameScreen: {
          width:800,
          height:800
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
        
        snakeMove(){
          for (let i = 0; i < snakes.snakeLocations.length; i++) {
            this.drawRect(snakes.boardContext,snakes.snakeLocX(i),snakes.snakeLocY(i),snakes.snakeBoxSizeWidth,snakes.snakeBoxSizeHeight);
          } 
        },

        clearRect(gameBoard:any|CanvasRenderingContext2D,x:number,y:number,boxWidth:number,boxHeight:number){
          gameBoard.clearRect(x,y,boxWidth,boxHeight);
        },
        
        snakeDrawRect(gameBoard:any|CanvasRenderingContext2D/*,snake:snakeProp*/){
         
          
          this.boardRemoveLastSnake();
          snakes.snakeDraw(false);
        },

        boardRemoveLastSnake(){
          this.plus();
          this.count=snakes.snakeLocations.length;
          
          this.clearRect(snakes.boardContext,snakes.snakeLocX(snakes.snakeLocations.length-1),snakes.snakeLocY(snakes.snakeLocations.length-1),snakes.snakeBoxSizeWidth,snakes.snakeBoxSizeHeight); 
        },


        

        
       

        drawWithInterval(delayInMilliseconds:number){

          setInterval(this.snakeDrawRect, delayInMilliseconds);
        },


        plus() {
          
          return this.count++
        },
        
        
      },
      

})