// interface 
var KarnaughMap = /** @class */ (function () {
    function KarnaughMap(id) {
        this.id = id;
    }
    KarnaughMap.prototype.$domId = function (element) {
        return document.querySelector(element);
    };
    KarnaughMap.prototype.eventManage = function () {
        window.addEventListener("click", function (e) {
            var idValue = e.target.id;
            if (/^a/.test(idValue)) {
                console.log(idValue);
            }
        });
    };
    KarnaughMap.prototype.run = function () {
        this.eventManage();
    };
    return KarnaughMap;
}());
// 인터페이스로 변경 어떻게 하지 ...??
var main = (function () {
    var karnaugh = new KarnaughMap("karnaugh");
    karnaugh.run();
})();
