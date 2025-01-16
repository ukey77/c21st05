// interface 

class KarnaughMap{
    protected id: string
    constructor(id: string){
        this.id=id;
    }
    $domId(element: string): HTMLElement | null{
        return document.querySelector(element);
    }
    eventManage(): void{
        window.addEventListener("click",(e)=>{
            const idValue: string = e.target.id;
            if(/^a/.test(idValue)){
                console.log(idValue);

            }
        });
    }
    run(): void{
        this.eventManage();
    }
}

// 인터페이스로 변경 어떻게 하지 ...??
const main = ((): void => {
    const karnaugh: KarnaughMap = new KarnaughMap("karnaugh");
    karnaugh.run();
})();

