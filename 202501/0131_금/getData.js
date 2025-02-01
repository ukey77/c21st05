class RESTData {
    constructor(id) {
        this.id = id;
    }
    url(address = "") {
        return `http://localhost:5000${address}`;
    }
    getData() {
        fetch(this.url("/posts/1"))  
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log("==GET==");
                console.log(data);
            })
            .catch((error) => console.error(error));
    }

    postData() {
        fetch(this.url("/posts"), { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "id": 1,
                "name": "ZARD",
                "title": "Hello ZARD",
                "body": "CDR LOVE ZARD"
            }),
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log("==POST==");
            console.log(data);
        })
        .catch((error) => console.error(error));
    }

    putData() {
        fetch(this.url("/posts/3"), { 
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "id": 4,
                "name": "BJH",
                "title": "Hello BJH",
                "body": "Bye BJH"
            })
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log("==PUT==");
            console.log(data);
        })
        .catch((error) => console.error(error));
    }

    deleteData() {
        console.log("==DELETE==");
        fetch(this.url("/posts/1"), {  
            method: "DELETE",
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log("==DELETE==");
            console.log(data);
        })
        .catch((error) => console.error(error));
    }

    run() {
        this.getData();
        this.putData();
        this.postData();
        this.deleteData();
    }
}

const restData = new RESTData("restData");
restData.run();
