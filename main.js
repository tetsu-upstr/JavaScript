// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

// ボールのコンストラクタ
function Ball(x, y, velX, velY, color, size) {
  // スタート位置
  this.x = x;
  this.y = y;
  // 速度
  this.velX = velX;
  this.velY = velY;
  // 色と半径サイズ
  this.color = color;
  this.size = size;
}

// ボールを動かすメソッド
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  // 2*PIで360度（1*PIだと180度になる）
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}