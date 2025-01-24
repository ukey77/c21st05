class DoubleLinkedList{
    constructor(id){
        this.id=id;
        this._curent = null;
        this._prev = null;
        this._next = null;
    }
    set prev(link){this._prev = link;}
    get prev(){return this._prev};
    set curent(link){this._curent = link;}
    get curent(){return this._curent};
    set next(link){this._next = link;}
    get next(){return this._next};
}