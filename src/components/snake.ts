
export class snakeProp{
    snakeLocations: number[][]; 
    snakeDirectionMove = [0,1];
    boardContext:any|CanvasRenderingContext2D;
    snakeBoxSizeWidth=5;
    snakeBoxSizeHeight=5;
    
    constructor() {
        this.snakeLocations=[[5,7],[5,6]];
    }


    snakeLocX(locX:number):number{
        return this.snakeBoxSizeWidth*this.snakeLocations[locX][0];
    }
    snakeLocY(locY:number):number{
        return (this.snakeBoxSizeWidth*this.snakeLocations[locY][1]);
    }

    snakeDraw(bait:boolean){
        let snakeBait=[0,1];
        snakeBait=[0,2];
        snakeBait[0]= this.snakeLocations[this.snakeLocations.length-1][0];
        snakeBait[1]= this.snakeLocations[this.snakeLocations.length-1][1];
        
        this.snakeMoveNext(this.snakeLocations.length-1);
        if (bait==true) {
            this.snakeLocations.push(snakeBait);
        }
    }

    snakeMoveNext(tmpSnakeLength:number):any{
        /* eslint-disable*/
        let tmpLoc:number[];
        tmpLoc=[0,1];
        tmpLoc[0]=this.snakeLocations[tmpSnakeLength][0];
        tmpLoc[1]=this.snakeLocations[tmpSnakeLength][1];
        if (tmpSnakeLength>0) {
            this.snakeLocations[tmpSnakeLength] = this.snakeMoveNext(tmpSnakeLength-1);
            return tmpLoc;   
        }
        if (tmpSnakeLength==0){
            this.snakeHeadMoveDirection();
            return this.snakeLocations[0];
        }
        return  tmpLoc
    }

    snakeHeadMoveDirection(){
        this.snakeLocations[0][0]+=this.snakeDirectionMove[0];
        this.snakeLocations[0][1]+=this.snakeDirectionMove[1];
    }
    
    
}