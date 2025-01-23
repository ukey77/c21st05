class SingleLinkedList<T>{
    protected id: string;
    protected _value: T | null;
    protected _next: T | null;
    constructor(id: string){
        this.id=id;
        this._value = null;
        this._next = null;
    }
    set value(item: T){
        this._value = item;
    }
    get value(): T | null{
        return this._value;
    }
    set next(nextItem: T){
        this._next = nextItem;
    }
    get next(): T | null{
        return this._next;
    }
}

const myL1: SingleLinkedList<string> = new SingleLinkedList<string>("myL1");
const myL2: SingleLinkedList<string> = new SingleLinkedList<string>("myL2");
const myL3: SingleLinkedList<string> = new SingleLinkedList<string>("myL3");