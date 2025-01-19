
interface DataMetrics{
    average: number;
    maxScore: number;
    minScore: number;
    standardDeviation: number;
}

class Score{
    public id: string;
    public data: any;
    constructor(id: string){
        this.id = id;
        this.data = null;
    }
    url(address: string): string{
        return `http://localhost:3001${address}`;
    }
    $(element: string): HTMLElement |  null{
        return document.querySelector(element);
    }
    async getData(){
        const res = await fetch(this.url("/score"));
        const req = await res.json();
        this.data = req;
        
        const dataObject: DataMetrics = this.dataMetrics();
        this.displayDom({...dataObject});
    }
    displayDom(data: object): void{
        
        for(const key in data){
            // console.log(this.$(`#${key}`))
            const $input = this.$(`#${key}`) as HTMLInputElement | null;
            $input.value = data[key];
        }
    }
    dataMetrics(): DataMetrics{
        const dataLen: number = this.data.reduce((acc: number) => {return acc += 1;},0) 

        const getAverage = (): number => {
            const sum: number = this.data.reduce((acc: number,cur: any)=>{
                return acc += Number(cur["score"]);
            },0);
            return (sum / dataLen);
        }

        const scoreArray: number[] = this.data.map((value: any)=>{
            return Number(value["score"]);
        });

        const maxScore = (data: number[]): number => {
            return Math.max(...data);
        }

        const minScore = (data: number[]): number => {
            return Math.min(...data);
        }

        const getStandardDeviation: number = (scoreArray.reduce((acc: number,cur: number)=>{
            return acc += ((cur- getAverage()) ** 2);
        },0) / dataLen) ** (1/2);

        return {
            average: getAverage(),
            maxScore: maxScore(scoreArray),
            minScore: minScore(scoreArray),
            standardDeviation: Number(getStandardDeviation.toFixed(2))
        }
    }
    run(): void{
        this.getData();
    }
}

const score = new Score("score");
score.run(); 