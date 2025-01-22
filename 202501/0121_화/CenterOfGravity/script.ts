class CenterOfGravity{
    protected id: string;
    protected canvas: HTMLCanvasElement | null;
    protected pen: any;
    protected width: number;
    protected height: number;
    protected readonly scaleFactor: number = 20;
    constructor(id: string){
        this.id=id;
        this.canvas = null;
        this.pen = null;
        this.width = 0;
        this.height = 0;
    }
    $(element: string): HTMLElement | null{
        return document.getElementById(element);
    }
    settings(): void{
        this.canvas = <HTMLCanvasElement>this.$("canvas");
        this.pen = this.canvas?.getContext("2d");
        this.width = Number(getComputedStyle(this.canvas).width.split("px")[0]);
        this.height = Number(getComputedStyle(this.canvas).height.split("px")[0]);
    }
    modiDot(x: number, y: number){
            this.pen?.fillRect((x*this.scaleFactor)+ (this.width / 2) , -(y*this.scaleFactor) + (this.height / 2) ,1,1);
    }
    convertRadian(degree: number): number{
        return (Math.PI * degree) / 180;
    }
    eventManager(){
        window.addEventListener("click",(event)=>{
            const target = <HTMLElement>event.target;
            const targetId = target.id;
            switch(targetId){
                case "drawBtn":
                    type DomValues = {
                        base: number;
                        hypotenuse: number;
                        height: number;
                    }
                    const domValues: DomValues = {
                        base: Number((<HTMLInputElement>this.$("base"))?.value) || 0,
                        hypotenuse: Number((<HTMLInputElement>this.$("hypotenuse"))?.value) || 0,
                        height: Number((<HTMLInputElement>this.$("height"))?.value) || 0
                    };
                    console.log(domValues);
                    /* 
                        밑변(0,0)(base,0)
                        높이(base,0)(base,height)
                        빗변(0,0)(base,height)

                        A(0,0)
                        B(base,height)
                        C(base,0)
                    */
                    this.drawLine([0,0,domValues["base"],0]);
                    this.drawLine([domValues["base"],0,domValues["base"],domValues["height"]]);
                    this.drawLine([0,0,domValues["base"],domValues["height"]]);

                    this.modiDot((domValues["base"]*2)/3, domValues["height"]/3);
                    this.drawCircle();
                break;
            }
        });
    }
    drawCircle(){
        const r = 3;
        for(let i=0; i<=360; i+=1){
            const radian: number = this.convertRadian(i);

            this.modiDot(Math.cos(radian) * r + 0, Math.sin(radian) * r + 0);
            this.modiDot(Math.cos(radian) * r + 5, Math.sin(radian) * r + 0);
        }

    }
    drawLine(arrData: number[]){
        let [x1,y1,x2,y2]: number[] = [...arrData];
        (x1>x2) && ([x1,y1,x2,y2] = [x2,y2,x1,y1]);

        if(x1===x2){
            (y1 > y2) && ([x1,y1,x2,y2] = [x2,y2,x1,y1]);
            for(let i=y1; i<=y2; i+=0.01){
                this.pen.fillStyle = "green";
                this.modiDot(x1,i);
            }
        }else if(y1 === y2){
            for(let i=x1; i<=x2; i+=0.01){
                this.pen.fillStyle = "red";
                this.modiDot(i,y1);
            }
        }else{
            const m: number = (y1-y2) / (x1-x2);
            for(let i=x1; i<=x2; i+=0.01){
                this.pen.fillStyle = "orange";
                const f:number = m * (i-x1) + y1;
                this.modiDot(i,f);
            }
        }
    }
    renderAxiosCrossHair(): void{
        for(let i=0; i<this.width; i+=1){
            this.pen.fillRect(i,this.height/2,1,1);
        }
        const [width, height, size] = [
            Math.floor(this.width / 2),
            Math.floor(this.height / 2),
            Number(4)
        ];
        const crossHair = (range: number, isX: boolean) => {
            for (let i = -range; i <= range; i++) {
                isX && (this.modiDot(i / this.scaleFactor, 0));
                isX || (this.modiDot(0, i / this.scaleFactor));
                for (let j = -size; j < size; j++) {
                    isX && (this.modiDot(i, j / this.scaleFactor));
                    isX || (this.modiDot(j / this.scaleFactor, i));
                }
            }
        }
        crossHair(width, true);
        crossHair(height, false);
    }
    run(){
        this.settings();
        this.renderAxiosCrossHair();
        this.eventManager();
    }
}

window.onload = () => {
    const gravity: CenterOfGravity = new CenterOfGravity("gravity");
    gravity.run();
}