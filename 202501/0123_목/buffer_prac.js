class DoubleLinkdedList {
    constructor(id) {
        this.id = id;
        this._value = null;
        this._next = null;
        this._prev = null;
    }
    set value(item){this._value = item;}
    get value(){return this._value;}

    set nextNode(link){this._next = link;}
    get nextNode(){return this._next;}
    
    set prevNode(link){this._prev = link;}
    get prevNode(){return this._prev;}
}

class Buffer{
    constructor(id){
        this.id = id;
        this.storage = [];
    }
}

const DataPacket = {
    
}