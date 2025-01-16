(() => {class DataMetricsTest{
    public id: string;
    private data: number[];
    constructor(id: string){
        this.id = id;
        this.data = [];
    }
    urlAddress(address: string) {
        return `http://localhost:8001/score${address}`;
    }
    getData(){
        const xhttp: object = new XMLHttpRequest();
        xhttp.open("GET",this.urlAddress("/"));
        xhttp.send();
        xhttp.onreadystatechange = () => {
            if(xhttp.readyState == 4 && xhttp.status == 200){
                const data = JSON.parse(xhttp.responseText)["score"];
                this.data = data.map((value: number)=>{return Number(value);});
                console.log(this.data);
            }
        }
    }
    run(){
        this.getData();
    }
}

const main: void = (() => {
    const dataMetrics = new DataMetricsTest("dataMetrics");
    dataMetrics.run();
})();})();

// export {}