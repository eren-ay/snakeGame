export class screen{
    
}

export class bait{
    baitLocations: number[][];
    baitBool: boolean;
    constructor(screenSizeX:number,screenSizeY:number){
        this.baitLocations=[[this.randomNumberMax(screenSizeX),this.randomNumberMax(screenSizeY)]];
        this.baitBool=false;
    }


    randomNumberMax(max:number){
        return Math.floor(Math.random() * max);
    }
}
