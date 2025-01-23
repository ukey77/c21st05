// == SingleLinkedList == 
class SingleLinkedList {
    constructor(id) {
        this.id = id;
        this._value = null;
        this._next = null;
    }
    set value(item) {
        this._value = item;
    }
    get value() {
        return this._value;
    }
    set next(nextItem) {
        this._next = nextItem;
    }
    get next() {
        return this._next;
    }
}

// == Buffer == 
class Buffer {
    constructor(id) {
        this.id = id;
        this.storage = [];
    }
    push(item) {
        this.storage.push(item);
    }
    shift() {
        return this.storage.shift();
    }
    setValue(selector, item) {
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].id === selector) {
                return this.storage[i].value = item;
                break;
            }
        }
    }
    getValue(selector) {
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].id === selector) {
                return this.storage[i].value;
                break;
            }
        }
    }
    setNext(startSelector, nextSelector) {
        nextLink
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].id === startSelector) {
                this.storage[i].next = this.searchNext(nextSelector); // 다음 link로 연결해야함.
                break;
            }
        }
    }
    searchNext(nextSelector) {
        const nextLink = this.storage.filter((item, i) => {
            return item.value === nextSelector;
        })[0];
        return nextLink;
    }

    test() {
        this.storage[i].next = this.storage.reduce((acc, node) => {
            return node.id === nextSelector ? node : acc;
        }, null);
    }

    clearBuffer() {
        this.storage = [];
    }
}

const myLinkedValue = ["ZARD", "CDR", "LOVE"];

const dataPacket = {
        nodes: [
            { id: 1, value: "Zard" },
            { id: 2, value: "CDR" },
            { id: 3, value: "LOVE" },
            { id: 4, value: "KYJ" }
        ]
};

const myBuffer = new Buffer("buffer");

myLinkedValue.forEach((value) => {
    const tempList = new SingleLinkedList(value);
    tempList.value = value;
    myBuffer.push(tempList);
});

myBuffer.setNext("ZARD", "CDR");
myBuffer.setNext("CDR", "LOVE");

console.log("myBuffer: ", myBuffer.storage);
