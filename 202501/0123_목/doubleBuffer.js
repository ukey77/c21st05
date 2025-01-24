class Node {
    constructor(id) {
        this._id = id;
        this._value = null;

        this.next = null;
        this.prev = null;
    }

    get id() { return this._id; }
    set value(data) { this._value = data; }
    get value() { return this._value; }

    setNext(newNode) { this.next = newNode; }
    getNext() { return this.next; }
    setPrev(newNode) { this.prev = newNode; }
    getPrev() { return this.prev; }
}

class DoubleBuffer {
    constructor(id) {
        this.id = id;
        this.storage = [];
    }

    inBuffer(item) {
        this.storage.push(item);
    }
    outBuffer() {
        return this.storage.shift();
    }
    clearBuffer() {
        this.storage = [];
    }

    connectNode(leftId, rightId) {
        this.searchItem(leftId).setNext(this.searchItem(rightId));
        this.searchItem(rightId).setPrev(this.searchItem(leftId));
    }

    searchItem(id) {
        return this.storage.reduce((ori, node) => {
            return node.id === id ? node : ori;
        }, null);
    }
}

const buffer = new DoubleBuffer("main");

const idList = ["A", "B", "C", "D"];

idList.forEach((id) => {
    const node = new Node(id);
    node.value = id;

    buffer.inBuffer(node);
});

buffer.connectNode("A", "D");