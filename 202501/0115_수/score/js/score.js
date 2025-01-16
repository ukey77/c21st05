"use strict";
(() => {
    class DataMetricsTest {
        constructor(id) {
            this.id = id;
            this.data = [];
        }
        urlAddress(address) {
            return `http://localhost:8001/score${address}`;
        }
        getData() {
            const xhttp = new XMLHttpRequest();
            xhttp.open("GET", this.urlAddress("/"));
            xhttp.send();
            xhttp.onreadystatechange = () => {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    const data = JSON.parse(xhttp.responseText)["score"];
                    this.data = data.map((value) => { return Number(value); });
                    console.log(this.data);
                }
            };
        }
        run() {
            this.getData();
        }
    }
    const main = (() => {
        const dataMetrics = new DataMetricsTest("dataMetrics");
        dataMetrics.run();
    })();
})();
// export {}
