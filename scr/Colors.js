class myColors{
    constructor(Red, Green, Blue){
        this.Red = Red;
        this.Green = Green;
        this.Blue = Blue;
    }

    toRGBString() {
        let clr = `rgb(${this.Red},${this.Green},${this.Blue})`;
        
        return clr;
    }

}

