class Buffer<T>{
    protected id: string;
    protected storage: any;
    constructor(id: string){
        this.id=id;
        this.storage = [];
    }
    push(item: T){
        this.storage.push(item);
    }
    shift(): T | null{
        return this.storage.shift();
    }
}

const myLinkedValue: string[] = ["ZARD", "CDR", "LOVE"];
