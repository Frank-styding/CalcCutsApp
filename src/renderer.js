let canvas = document.createElement("canvas");
document.body.appendChild(canvas);
let ctx = canvas.getContext("2d");
function setSize(width, height) {
  canvas.width = width;
  canvas.height = height;
}
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function background(color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}
function drawPoint(x, y, color, radius) {
  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}
function drawPath(
  points,
  color,
  lineWidth,
  showPoints = false,
  radius = 1,
  pointColor = undefined,
) {
  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  let start = true;
  for (let point of points) {
    if (start) {
      ctx.moveTo(point[0], point[1]);
      start = false;
    } else {
      ctx.lineTo(point[0], point[1]);
    }
  }
  ctx.closePath();
  ctx.stroke();
  if (showPoints) {
    for (let point of points) {
      drawPoint(
        point[0],
        point[1],
        pointColor !== null && pointColor !== void 0 ? pointColor : color,
        radius,
      );
    }
  }
  ctx.restore();
}
function applyTransform(callback, x, y, xScale = 1, yScale = 1, angle = 0) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  ctx.save();
  ctx.transform(1, 0, 0, 1, x, y);
  ctx.transform(cos, -sin, sin, cos, 0, 0);
  ctx.transform(xScale, 0, 0, yScale, 0, 0);
  callback();
  ctx.restore();
}
function drawStrokeRect(width, height, x, y, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.strokeRect(x, y, width, height);
  ctx.restore();
}

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
function rectPath(width, height) {
  return [
    [0, 0],
    [width, 0],
    [width, height],
    [0, height],
  ];
}

const socket = new WebSocket("ws://127.0.0.1:8003");

socket.addEventListener("open", function (event) {
  //socket.send("Connection Established");
});

socket.addEventListener("message", function (event) {
  console.log(JSON.parse(event.data));
});

const contactServer = () => {
  socket.send(
    `200-200
30-30
50-50
70-30
`,
  );
};

document.getElementById("btn").onclick = () => {
  contactServer();
};