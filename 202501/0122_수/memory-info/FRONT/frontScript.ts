class MemoryInfo{
    protected id: string;
    protected canvas: HTMLCanvasElement | null;
    protected pen: CanvasRenderingContext2D | null;
    protected readonly SCALE: number = 10;
    protected width: number;
    protected height: number;
    private data: any; // 임시
    constructor(id: string){
        this.id=id;
        this.canvas = null;
        this.pen = null;
        this.width = 0;
        this.height = 0;
        this.data = null;
    }
    settings(): void{
        this.canvas = this.$("#canvas") as HTMLCanvasElement;
        this.pen = this.canvas.getContext("2d");
        this.width = Number(getComputedStyle(this.canvas).width.split("px")[0]);
        this.height = Number(getComputedStyle(this.canvas).height.split("px")[0]);
        // this.width = this.canvas.width;
        // this.height = this.canvas.height;
    }
    $(elementName: string): HTMLElement | null{
        return <HTMLElement>document.querySelector(elementName);
    }
    modiDot(xV: number, yV: number){
        this.pen?.fillRect(((xV * this.SCALE) + (this.width / 2)), ((-yV * this.SCALE) + (this.height / 2)), 1, 1);
    }
    renderAxisCrosshair(range: number): void{
        for(let i=-range;i<range; i+=(1/this.SCALE)){
            this.modiDot(i, 0);
            this.modiDot(0, i);
        }
    }
    convertRadian(degree: number): number{
        return degree * Math.PI / 180;
    }
    drawCircle(){
        const r: number = this.SCALE * 2;
        for(let i=0;i<=360; i+=0.01){
            // this.pen?.fillStyle = "red";
            const radian = this.convertRadian(i);
            this.modiDot(Math.cos(radian) * r, Math.sin(radian) * r);
        }
    }
    drawData(){
        const r: number = this.SCALE * 2;
        const tempData: any = { id: 'os_data', freemem: 2488119296, totalmem: 16880881664 }
        let {freemem, totalmem} = {...tempData};
        const degree = (((360 / totalmem)  - ((360 / totalmem) * freemem)) + 90)%360;

        const radian: number = this.convertRadian(degree);
        for(let i=0; i<=Math.cos(radian) * r; i+=0.01){
            const m = Math.tan(radian);
            const f = m * i;
            this.modiDot(i,f);
        }


        // const degree2 = ((360 - ((freemem / totalmem) * 360)) + 90) % 360;
        // const radian2: number = this.convertRadian(degree2);
        // for(let i=0; i<=Math.cos(radian2) * r; i+=0.01){
        //     const m = Math.tan(radian2);
        //     const f = m * (i);
        //     this.modiDot(i,f);
        // }
    }
    async getData() {
        try {
            const response = await fetch('http://127.0.0.1:3333/data');
            const data = await response.json();
            console.log("data", data);
        } catch (error) {
            console.error('Error fetch:', error);
        }
    }
    
    run(): void{
        console.log(" === LOG ===")
        this.getData();


        this.settings();
        this.renderAxisCrosshair(this.height);
        this.drawCircle();
        this.drawData();
    }
}

        const memoryInfo: MemoryInfo = new MemoryInfo("memoryInfo");
        memoryInfo.run()

