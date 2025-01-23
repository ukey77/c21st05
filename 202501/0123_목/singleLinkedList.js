"use strict";
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
const myL1 = new SingleLinkedList("myL1");
const myL2 = new SingleLinkedList("myL2");
const myL3 = new SingleLinkedList("myL3");
