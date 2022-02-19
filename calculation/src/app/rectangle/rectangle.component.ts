import { Component } from "@angular/core";

@Component({
    selector:"Rectangle-Component",
    templateUrl:"./rectangle.component.html"
})
export class RectangleComponent{
    length: number;
    breadth: number;
    area: number;
    constructor(){
        this.length = 0
        this.breadth = 0
        this.area = this.length*this.breadth
    }
    onCalculateArea(){
        this.area = this.length*this.breadth
    }
}