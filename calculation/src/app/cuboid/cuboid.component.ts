import { Component } from "@angular/core";

@Component({
    selector:"Cuboid-Volume",
    templateUrl:"./cuboid.component.html"
})
export class CuboidComponent{
    length:number;
    breadth:number;
    height:number;
    volume: number;
    constructor(){
        this.length = 0
        this.breadth = 0
        this.height = 0
        this.volume = this.length * this.breadth * this.height
    }
    onCalculateVolume(){
        this.volume = this.length * this.breadth * this.height
    }
}