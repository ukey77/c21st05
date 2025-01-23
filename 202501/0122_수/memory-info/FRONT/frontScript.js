"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class MemoryInfo {
    constructor(id) {
        this.SCALE = 10;
        this.id = id;
        this.canvas = null;
        this.pen = null;
        this.width = 0;
        this.height = 0;
        this.data = null;
    }
    settings() {
        this.canvas = this.$("#canvas");
        this.pen = this.canvas.getContext("2d");
        this.width = Number(getComputedStyle(this.canvas).width.split("px")[0]);
        this.height = Number(getComputedStyle(this.canvas).height.split("px")[0]);
        // this.width = this.canvas.width;
        // this.height = this.canvas.height;
    }
    $(elementName) {
        return document.querySelector(elementName);
    }
    modiDot(xV, yV) {
        var _a;
        (_a = this.pen) === null || _a === void 0 ? void 0 : _a.fillRect(((xV * this.SCALE) + (this.width / 2)), ((-yV * this.SCALE) + (this.height / 2)), 1, 1);
    }
    renderAxisCrosshair(range) {
        for (let i = -range; i < range; i += (1 / this.SCALE)) {
            this.modiDot(i, 0);
            this.modiDot(0, i);
        }
    }
    convertRadian(degree) {
        return degree * Math.PI / 180;
    }
    drawCircle() {
        const r = this.SCALE * 2;
        for (let i = 0; i <= 360; i += 0.01) {
            // this.pen?.fillStyle = "red";
            const radian = this.convertRadian(i);
            this.modiDot(Math.cos(radian) * r, Math.sin(radian) * r);
        }
    }
    drawData() {
        const r = this.SCALE * 2;
        const tempData = { id: 'os_data', freemem: 2488119296, totalmem: 16880881664 };
        let { freemem, totalmem } = Object.assign({}, tempData);
        const degree = (((360 / totalmem) - ((360 / totalmem) * freemem)) + 90) % 360;
        const radian = this.convertRadian(degree);
        for (let i = 0; i <= Math.cos(radian) * r; i += 0.01) {
            const m = Math.tan(radian);
            const f = m * i;
            this.modiDot(i, f);
        }
        // const degree2 = ((360 - ((freemem / totalmem) * 360)) + 90) % 360;
        // const radian2: number = this.convertRadian(degree2);
        // for(let i=0; i<=Math.cos(radian2) * r; i+=0.01){
        //     const m = Math.tan(radian2);
        //     const f = m * (i);
        //     this.modiDot(i,f);
        // }
    }
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch('http://127.0.0.1:3333/data');
                const data = yield response.json();
                console.log("data", data);
            }
            catch (error) {
                console.error('Error fetch:', error);
            }
        });
    }
    run() {
        console.log(" === LOG ===");
        this.getData();
        this.settings();
        this.renderAxisCrosshair(this.height);
        this.drawCircle();
        this.drawData();
    }
}
const memoryInfo = new MemoryInfo("memoryInfo");
memoryInfo.run();
