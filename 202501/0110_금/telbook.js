
class TelBook {
    constructor(id) {
        this.id = id;
        this.data = null;
        this.nextId = 0;
    }
    urlAddress(address = "") {
        return `http://kkms4001.iptime.org:21051/telbook${address}`;
    }
    $(element) {
        return document.querySelector(element);
    }
    outputDisplay() {
        this.$("#wrapper").innerHTML = "";
        const createInput = (className, value, isReadOnly, id = null) => {
            const inputElement = document.createElement("input");
            inputElement.setAttribute("class", `${className}`);
            inputElement.setAttribute("value", `${value}`);
            (isReadOnly) && (inputElement.setAttribute("readOnly", true));
            (id !== null) && (inputElement.setAttribute("id", `${id}`))
            return inputElement;
        }

        const createBtn = (className, id, value) => {
            const btnElement = document.createElement("button");
            btnElement.setAttribute("id", `${id}`);
            btnElement.setAttribute("class", `${className}`);
            btnElement.innerText = `${value}`;
            return btnElement;
        }

        let [nextId, nexIndex] = [0, 0];
        this.data.forEach((item, i) => {
            const { id, name, tel, addr } = item;
            [nextId, nexIndex] = [Number(id) + 1, nexIndex + 1]
            const idValue = (id < 10) ? "0" + String(id) : String(id);
            const divElement = document.createElement("div");
            const indexElement = createInput("item", (i + 1), true);
            const nameElement = createInput("item", name, true, `name${idValue}`);
            const telElement = createInput("item", tel, true, `tel${idValue}`);
            const addrElement = createInput("item", addr, true, `addr${idValue}`);
            const deleteBtn = createBtn("btn", `deleteBtn${idValue}`, "삭제");
            const updateBtn = createBtn("btn", `updateBtn${idValue}`, "수정");
            const putBtn = createBtn("btn", `putBtn${idValue}`, "저장");
            divElement.setAttribute("class", "tel-item");
            divElement.append(indexElement, nameElement, telElement, addrElement, deleteBtn, updateBtn, putBtn);
            this.$("#wrapper").append(divElement);
        });
        this.nextId = nextId;
        const [id, name, tel, addr, putBtn] = [
            createInput("item", (nexIndex + 1), true, "idValue"),
            createInput("item", "", false, "nameValue"),
            createInput("item", "", false, "telValue"),
            createInput("item", "", false, "addrValue"),
            createBtn("btn", "saveBtn", "저장")
        ]
        this.$("#wrapper").append(id, name, tel, addr, putBtn);
    }
    eventListener() {
        window.addEventListener("click", (e) => {
            const [sliceId, id] = [
                (e.target.id).slice(0, (e.target.id).length - 2),
                (e.target.id).slice((e.target.id).length - 2)
            ];
            console.log(e.target.id);
            switch (sliceId) {
                case "deleteBtn":
                    this.deleteData(Number(id));
                    break;
                case "updateBtn":
                    this.$(`#name${id}`).readOnly = false;
                    this.$(`#tel${id}`).readOnly = false;
                    this.$(`#addr${id}`).readOnly = false;

                    this.$(`#${e.target.id}`).style.display = "none";
                    this.$(`#putBtn${id}`).style.display = "block";
                    break;
                case "putBtn":
                    this.$(`#name${id}`).readOnly = true;
                    this.$(`#tel${id}`).readOnly = true;
                    this.$(`#addr${id}`).readOnly = true;

                    this.$(`#${e.target.id}`).style.display = "none";
                    this.$(`#updateBtn${id}`).style.display = "block";

                    const putDataObj = {
                        id: Number(id),
                        name: this.$(`#name${id}`).value,
                        tel: this.$(`#tel${id}`).value,
                        addr: this.$(`#addr${id}`).value,
                    }
                    this.putData(putDataObj);

                    break;
            }
            // 추가 BTN
            if (e.target.id === "saveBtn") {
                const postDataObj = {
                    id: Number(this.nextId),
                    name: this.$(`#nameValue`).value,
                    tel: this.$(`#telValue`).value,
                    addr: this.$(`#addrValue`).value,
                }
                this.postData(postDataObj);
            }
        });
    }
    postData(data){
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST",this.urlAddress());
        xhttp.send(JSON.stringify({...data}));

        xhttp.onreadystatechange = () => {
            if(xhttp.readyState == 4 && xhttp.status==201){
                console.log("POST: ",xhttp.responseText);
                this.getData();
            }else{
                console.log("POST ERROR");
            }
        }
    }
    putData(data) {
        const { id } = data;
        console.log("putDataID", id);
        console.log("putData",data);

        const xhttp = new XMLHttpRequest();
        xhttp.open("PUT", this.urlAddress(`/${id}`));
        xhttp.send(JSON.stringify({ ...data }));

        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                console.log("PUT: ", xhttp.responseText);
                this.getData();
            } else {
                console.log("PUT ERROR");
            }
        }
    }
    deleteData(id) {
        fetch(this.urlAddress(`/${id}`), { method: "DELETE" })
            .then((res) => res.json())
            .then((data) => this.getData())
            .catch((err) => console.log("DELETE ERROR"))
    }
    getData() {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", this.urlAddress());
        xhttp.send();

        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                const data = JSON.parse(xhttp.responseText);
                this.data = data;
                this.outputDisplay();
                console.log(data);

            } else {
                console.log("GET ERROR");
            }
        }

    }
    run() {
        this.getData();
        this.eventListener();
    }
}

window.onload = () => {
    const main = (() => {
        const telBook = new TelBook("telBook");
        telBook.run();
    })();
}