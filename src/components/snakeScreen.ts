export class screen{
    snakeLocations: number[][]; 
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
}

export class bait{
    baitLocations: number[][];
    constructor(screenSizeX:number,screenSizeY:number){
        this.baitLocations=[[this.randomNumberMax(screenSizeX),this.randomNumberMax(screenSizeY)]]
    }

    randomNumberMax(max:number){
        return Math.floor(Math.random() * max);
    }
}
