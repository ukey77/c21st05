class MemoryInfo {
    constructor(id) {
        this.id = id;
        this.canvas = null;
        this.pen = null;
        this.SCALE = 10;
        this.width = 0;
        this.height = 0;
        this.data = null; // 임시
    }

    settings() {
        this.canvas = this.$("#canvas");
        this.pen = this.canvas.getContext("2d");
        this.width = Number(getComputedStyle(this.canvas).width.split("px")[0]);
        this.height = Number(getComputedStyle(this.canvas).height.split("px")[0]);
    }

    $(elementName) {
        return document.querySelector(elementName);
    }

    modiDot(xV, yV) {
        if (this.pen) {
            this.pen.fillRect(
                (xV * this.SCALE) + (this.width / 2),
                (-yV * this.SCALE) + (this.height / 2),
                1,
                1
            );
        }
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
            const radian = this.convertRadian(i);
            this.modiDot(Math.cos(radian) * r, Math.sin(radian) * r);
        }
    }

    drawData() {
        const r = this.SCALE * 2;
        const tempData = { id: 'os_data', freemem: 2488119296, totalmem: 16880881664 };
        const { freemem, totalmem } = { ...tempData };
        const degree = (((360 / totalmem) - ((360 / totalmem) * freemem)) + 90) % 360;

        const radian = this.convertRadian(degree);
        for (let i = 0; i <= Math.cos(radian) * r; i += 0.01) {
            const m = Math.tan(radian);
            const f = m * i;
            this.modiDot(i, f);
        }
    }

    async getData() {
        try {
            const response = await fetch('http://localhost:3333/data/');
            const data = await response.json();
            console.log("data", data);
        } catch (error) {
            console.error('Error fetch:', error);
        }
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