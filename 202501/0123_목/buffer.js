"use strict";
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
}
const myLinkedValue = ["ZARD", "CDR", "LOVE"];
