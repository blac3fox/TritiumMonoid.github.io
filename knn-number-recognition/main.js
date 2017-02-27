HTMLElement.prototype.calculatePosition = element => x => y =>
    (element.parentNode) ? element.calculatePosition (element.parentNode)
    (x + element.offsetLeft) (y + element.offsetTop) : [x, y];

HTMLElement.prototype.getPosition = function() {
    return this.calculatePosition(this)(0)(0);
}

const canvas     = document.getElementById("canvas");
const context    = canvas.getContext("2d");
const prediction = document.getElementById("prediction");
const ranking    = document.getElementById("ranking");
let isDrawing = false;
let mouse = [[],[]];

function createImage(url) {
    const img = new Image();
    img.src = url;
    return img;
}

const images = [
    createImage("handwritten_0.png"),
    createImage("handwritten_1.png"),
    createImage("handwritten_2.png"),
    createImage("handwritten_3.png"),
    createImage("handwritten_4.png"),
    createImage("handwritten_5.png"),
    createImage("handwritten_6.png"),
    createImage("handwritten_7.png"),
    createImage("handwritten_8.png"),
    createImage("handwritten_9.png")
];
for (let i = 0; i < images.length; i++) {
    images[i].onload = function() {
        images[i] = getBinaryImageData(getImageData(images[i]));
    }.bind(i);
}
/*.map(getImageData)
.map(getBinaryImageData);*/

function clearCanvas(squareSize) {
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "black";
    context.strokeStyle = "gray";
    context.lineWidth = 1;
    for(let i = 0; i < canvas.width; i += squareSize) {
        context.beginPath();
        context.moveTo(i, 0);
        context.lineTo(i, canvas.height);
        context.stroke();
    }
    for(let i = 0; i < canvas.height; i += squareSize) {
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(canvas.width, i);
        context.stroke();
    }
    context.strokeStyle = "black";
    mouse = [[],[]];
    prediction.value = "Prediction";
    ranking.value = "Ranking";
}

clearCanvas(20);

canvas.onmousedown = e => {
    isDrawing = true;
}

canvas.onmouseup = e => {
    isDrawing = false;
    mouse[0] = [];
    predict();
}

canvas.onmousemove = e => {
    if (isDrawing) {
        position = canvas.getPosition();
        deltamouse = [e.clientX - position[0], e.clientY - position[1]];
        mouse[1] = mouse[0] || deltamouse;
        mouse[0] = deltamouse;
        updateCanvas();
    }
}

function updateCanvas() {
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(mouse[1][0], mouse[1][1]);
    context.lineTo(mouse[0][0], mouse[0][1]);
    context.stroke();
}

function getImageData(img) {
    let c = document.createElement("canvas");
    c.width = canvas.width;
    c.height = canvas.height;
    let ctx = c.getContext("2d");
    ctx.drawImage(img, 0, 0, c.width, c.height);
    return ctx.getImageData(0, 0, c.width, c.height);
}

function getBinaryImageData(imgData) {
    let data = [];
    for (let i = 0, j = 0; i < imgData.data.length; i += 4, j++) {
        if (imgData.data[i + 0] < 100 &&
            imgData.data[i + 1] < 100 &&
            imgData.data[i + 2] < 100) {
            data[j] = 1;
        }
        else {
            data[j] = 0;
        }
    }
    return data;
}

function putBinaryImageData(binaryImageData) {
    let imgData = context.getImageData(0, 0, canvas.width, canvas.height);
    for (let i = 0, j = 0; i < imgData.data.length; i += 4, j++) {
        if (binaryImageData[j] > 0) {
            imgData.data[i + 0] = 0;
            imgData.data[i + 1] = 0;
            imgData.data[i + 2] = 0;
        }
        else {
            imgData.data[i + 0] = 255;
            imgData.data[i + 1] = 255;
            imgData.data[i + 2] = 255;
        }
        imgData.data[i + 3] = 255;
    }
    context.putImageData(imgData, 0, 0);
}

function compareBinaryImageData(binaryImgData1, binaryImgData2) {
    let distance = 0;
    for (let i = 0; i < binaryImgData1.length; i++) {
        if (binaryImgData1[i] != binaryImgData2[i]) {
            distance += (binaryImgData1[i] == 1) ? 10 : 1;
        }
    }
    return distance;
}

function predict() {
    let binaryImageData = getBinaryImageData(context.getImageData(0, 0, canvas
        .width, canvas.height));
    let imagesDistance = [];
    for (let i = 0; i < images.length; i++) {
        imagesDistance[i] = [i, compareBinaryImageData(binaryImageData, images
            [i])];
    }
    let orderedDistances = imagesDistance.sort((a, b) => a[1] - b[1]);
    ranking.value = "";
    orderedDistances.forEach(i => ranking.value += i[0] + ": " + i[1] + "\n");
    prediction.value = orderedDistances[0][0];
}

//putBinaryImageData(images[3]);

//putBinaryImageData(images[5]);

/*function getBWImageData(imgData) {
    let data = [];
    let j = 0;
    for (let i = 0; i < imgData.data.length; i += 4, j++) {
        if (imgData.data[i + 0] < 100 &&
                imgData.data[i + 1] < 100 &&
                imgData.data[i + 2] < 100) {
                data.push([j % imgData.width, Math.floor(j / imgData.width)]);
        }
    }
    return data;
}

function putBWImageData(bwImageData) {
    let imgData = context.getImageData(0, 0, canvas.width, canvas.height);
    bwImageData.map(p => (p[0] * 4) + (p[1] * 4 * imgData.width))
    .forEach(i => {
        imgData.data[i + 0] = 0;
        imgData.data[i + 1] = 0;
        imgData.data[i + 2] = 0;
        imgData.data[i + 3] = 255;
    });
    context.putImageData(imgData, 0, 0);
}

function euclideanDistance(pointa, pointb) {
    return Math.sqrt(Math.pow(pointa[0] - pointb[0], 2) + Math.pow(pointa[1] -
        pointb[1], 2));
}

function minDistance(point, points, amount) {
    return points
    .map(p => euclideanDistance(point, p))
    .sort((a, b) => a - b)
    .slice(0, amount)
    .reduce((a, b) => a + b, 0) / amount;
}

function predict() {

}

function predict() {
    let bwImageData = getBWImageData(context.getImageData(0, 0, canvas.width, canvas.height));
    let zippedImgs = [];
    let result = undefined;
    for (let i = 0; i < images.length; i++) {
        zippedImgs[i] = [i, images[i]];
    }
    console.log(bwImageData.map(point => zippedImgs.map(img => [img[0], minDistance(point,
        img[1], 10)]).reduce((a, b) => (a && a > b) ? a : b, null))
    );
    result = bwImageData.map(point => labeledImages.map(img => [img[0],
        avgDistance(point, img[1])]).sort((a, b) => a[1] - b[1])[0])
    .sort((a, b) => a[1] - b[1])[0];
    prediction.value = result;
    putBWImageData(images[9]);
}*/
