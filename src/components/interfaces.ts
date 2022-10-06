export interface SnakeCanvas {
    width: number;
    height: number;
    boardContext?:any|CanvasRenderingContext2D;
    boxSizeWidth?:number;
    boxSizeHeight?:number;
    numberOfboxes?: number;
}
export class snakeProp{
    snakeLocations: number[][]; //first index = x, second index = y
    snakeLength: number;
    snakeDirection: string;
    snakeDirectionMove = [0,1];
    boardContext:any|CanvasRenderingContext2D;
    snakeBoxSizeWidth=5;
    snakeBoxSizeHeight=5;
    
    constructor() {
        this.snakeLocations=[[5,5]];
        this.snakeDirection="right";
        this.snakeLength=1;
    }


    snakeLocX(locX:number):number{
        return this.snakeBoxSizeWidth*this.snakeLocations[locX][0];
    }
    snakeLocY(locY:number):number{
        return (this.snakeBoxSizeWidth*this.snakeLocations[locY][1]);
    }

    snakeDraw(bait:boolean){
        if (bait==true) {
            const snakeBait=this.snakeLocations[this.snakeLength-1];
            this.snakeLength+=1;
            this.snakeLocations.push(snakeBait);
        }
        const tmpLength=this.snakeLocations.length-1;
        this.snakeMoveNext(tmpLength);
        
    }

    snakeMoveNext(tmpSnakeLength:number):number[]{
        
        const tmpLoc=this.snakeLocations[tmpSnakeLength];
        if (tmpSnakeLength>0) {
            this.snakeLocations[tmpSnakeLength] = this.snakeMoveNext(tmpSnakeLength-1);   
        }
        
        if (tmpSnakeLength==0){
            this.snakeHeadMoveDirection();
        }
        
        return  tmpLoc

    }

    snakeHeadMoveDirection(){
        this.snakeLocations[0][0]+=this.snakeDirectionMove[0];
        this.snakeLocations[0][1]+=this.snakeDirectionMove[1];
    }


    lengthDon():number{
        return this.snakeLength;
    }

    moveDirection(){
        if (this.snakeDirection=="right") {
            this.snakeDirectionMove[0]=1;
            this.snakeDirectionMove[1]=0;
        }else if (this.snakeDirection=="left") {
            this.snakeDirectionMove[0]=-1;
            this.snakeDirectionMove[1]=0;
        }else if(this.snakeDirection=="up"){
            this.snakeDirectionMove[0]=0;
            this.snakeDirectionMove[1]=1;
        }else if (this.snakeDirection=="down") {
            this.snakeDirectionMove[0]=0;
            this.snakeDirectionMove[1]=-1;
        }
    }
    
}