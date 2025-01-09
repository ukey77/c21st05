class TelWeb {
    constructor(id) {
        this.id = id;

        this.data = null;
    }

    initDisplay() {
        const html = `
            <h1 class="title">전화번호부</h1>
            <div id="telArea" class="telArea">
                
            </div>
            <div id="inputArea">
                <p class="line">
                    <input id="addName" placeholder="이름" class="cell">
                    <input id="addTel" placeholder="전화번호" class="cell">
                    <input id="addAddr" placeholder="주소" class="cell">
                    <button id="addBtn">추가</button>
                </p>
            </div>
        `;

        const css = `
            <style>
                * {margin: 0; padding: 0; box-sizing: border-box; color: #505050;}
                body, html {
                    width: 100%; height: 100%;
                    background-color: #EEEEEE;
                }
                .main {
                    width: 700px;
                    text-align: center;

                    background-color: white;
                    border-radius: 20px;
                    box-shadow: 4px 4px 10px gray;

                    padding: 20px;
                    margin: 50px auto;
                }
                .title {
                    padding-bottom: 5px;
                    border-bottom: 2px dashed #505050;
                }
                .tag {
                    border: none;
                    outline: none;
                    background-color: transparent;
                    color: #101010;
                    text-align: center;
                }
                .line {
                    width: 80%;
                    margin: 5px auto;
                    text-align: left;
                    height: 22px;
                }
                .cell {
                    margin: 2px;
                    width: 110px;
                    height: 100%;
                    line-height: 22px;

                    padding-left: 5px;
                }
            </style>    
        `;

        document.getElementById("main").innerHTML = (css + html);
    }

    async telData() {
        const res = await fetch("http://kkms4001.iptime.org:21110/telbook");
        const telBook = await res.json();

        document.getElementById("telArea").innerHTML = `
            <p class="line">
                <input value="번호" class="tag cell" disabled>
                <input value="이름" class="tag cell" disabled>
                <input value="전화번호" class="tag cell" disabled>
                <input value="주소" class="tag cell" disabled>
            </p>
        `;
        this.data = telBook;
        this.showTelInfo(this.data);
    }

    showTelInfo(telBook) {
        telBook.forEach((info, index) => {
            const { id, name, tel, addr } = info;
            const line = document.createElement("p")
            line.className = "line";

            const lineNumberElement = this.makeCellElement(index + 1, "line", index + 1);
            const nameElement = this.makeCellElement(name, "name", id);
            const telElement = this.makeCellElement(tel, "tel", id);
            const addrElement = this.makeCellElement(addr, "addr", id);
            const updateBtn = this.makeButtonElement("수정", "updateBtn", id);
            const deleteBtn = this.makeButtonElement("삭제", "deleteBtn", id);

            line.append(lineNumberElement, nameElement, telElement, addrElement, updateBtn, deleteBtn);
            document.getElementById("telArea").appendChild(line);
        });
    }

    makeCellElement(value, tag, id) {
        const cell = document.createElement("input");
        cell.value = `${value}`;
        cell.id = `${tag}_${id}`;
        cell.className = "cell";
        cell.readOnly = true;

        return cell;
    }

    makeButtonElement(text, tag, id) {
        const button = document.createElement("button");
        button.innerText = text;
        button.id = `${tag}_${id}`;

        return button;
    }

    async addTelInfo(uploadData = {}) {
        const res = await fetch("http://kkms4001.iptime.org:21110/telbook", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(uploadData)
        });

        this.telData();
    }

    async updateTelInfo(id, updateData) {
        const res = await fetch(`http://kkms4001.iptime.org:21110/telbook/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(updateData)
        });
        this.telData();
    }

    async deleteTelInfo(id) {
        const res = await fetch(`http://kkms4001.iptime.org:21110/telbook/${id}`, { method: "DELETE" });
        this.telData();
    }

    eventManager() {
        let isOnUpdate = false;
        addEventListener("click", (e) => {
            if (e.target.id === "addBtn") {
                console.log("추가")
                const id = this.data.length + 1;
                const addName = document.getElementById("addName").value;
                const addTel = document.getElementById("addTel").value;
                const addAddr = document.getElementById("addAddr").value;

                this.addTelInfo({ id: id, name: addName, tel: addTel, addr: addAddr });
            }
            if (/^deleteBtn_\d$/.test(e.target.id)) {
                const [, id] = e.target.id.split("_");
                this.deleteTelInfo(id);
            }
            if (/^updateBtn_\d$/.test(e.target.id)) {
                const [, id] = e.target.id.split("_");
                const nameEle = document.getElementById(`name_${id}`);
                const telEle = document.getElementById(`tel_${id}`);
                const addrEle = document.getElementById(`addr_${id}`);
                console.log(isOnUpdate);
                if (!isOnUpdate) { // 수정 중이면~
                    [nameEle.readOnly,telEle.readOnly,addrEle.readOnly] = [isOnUpdate, isOnUpdate, isOnUpdate];

                    e.target.innerText = "완료";
                    isOnUpdate = true;
                } else {
                    [nameEle.readOnly,telEle.readOnly,addrEle.readOnly] = [isOnUpdate, isOnUpdate, isOnUpdate];
                    const updateName = nameEle.value;
                    const updateTel = telEle.value;
                    const updateAddr = addrEle.value;

                    this.updateTelInfo(id, {name: updateName, tel: updateTel, addr: updateAddr });
                    isOnUpdate = false;
                }
            }
        });
    }

    run() {
        this.initDisplay();
        this.telData();
        this.eventManager();
    }
}

const telWeb = new TelWeb("main");
telWeb.run();