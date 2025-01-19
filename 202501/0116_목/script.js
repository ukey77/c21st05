"use strict";
// interface 
class KarnaughMap {
    constructor(id) {
        this.id = id;
    }
    $domId(element) {
        return document.querySelector(element);
    }
    eventManage() {
        window.addEventListener("click", (e) => {
            // const idValue: string = e.target.id;
            // if(/^a/.test(idValue)){
            //     console.log(idValue);
            // }
        });
    }
    run() {
        this.eventManage();
    }
}
// 인터페이스로 변경 어떻게 하지 ...??
const main = (() => {
    const karnaugh = new KarnaughMap("karnaugh");
    karnaugh.run();
})();
