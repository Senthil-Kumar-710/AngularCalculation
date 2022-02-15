import { Component } from "@angular/core";

@Component({
    selector:'VolumeCone-Area',
    templateUrl:'./volumecone.component.html'
})
export class VolumeConeComponent{
    radius:number;
    height:number;
    volume:number;
    constructor(){
        this.radius=0
        this.height=0
        this.volume=0.34*3.14*this.radius*this.radius*this.height

    }
    onCalc(){
        this.volume=0.34*3.14*this.radius*this.radius*this.height
    }
}