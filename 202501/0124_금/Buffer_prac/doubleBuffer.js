class Node{
    constructor(id){
        this.id=id;
        this._value = null;

        this._next = null;
        this._prev = null;
    }
    set value(data){this._value = data;}
    get id(){return this._id;}

    set next(nodeLink){this._next = nodeLink;}
    get next(){return this._next;}
    
    set prev(nodeLink){this._prev = nodeLink;}
    get prev(){return this._prev;}
}

class DoubleBuffer{
    constructor(id){
        this.id=id;
        this.storage = [];
    }
    inBuffer(item){
        this.storage.push(item);
    }
    outBuffer(){
        return this.storage.shift();
    }
    clearBuffer(){
        this.storage = [];
    }
    connectNode(leftId, rightId){
        this.searchItem(leftId).next = this.searchItem(rightId);
        this.searchItem(rightId).next = this.searchItem(leftId);
    }
    searchItem(id){
        return this.storage.reduce((origin,node)=>{
            return node.id === id? node: origin;
        }, null);
    }
}

const idList = ["A", "B", "C", "D"];

idList.forEach((id)=>{
    const node = new Node(id);
    node.value = id;
    
    buffer.inBuffer(node);
});

buffer.connectNode("A","D");