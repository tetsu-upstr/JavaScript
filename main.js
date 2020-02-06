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

// ボールを動かす（座標を更新する）メソッド
Ball.prototype.update = function() {

  // キャンバスの端に達したかどうか
  // x座標がキャンバスの幅より大きいかチェック
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  // x座標が 0 より小さいかチェック
  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  // y座標がキャンバスの高さより大きいかチェック
  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  // y座標が 0 より小さいかチェック
  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  // 半径sizeを加えることでボールがめり込まず跳ね返る

  this.x += this.velX;
  this.y += this.velY;
}

// ボールを保存する場所（配列）を宣言
var balls = [];

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  while (balls.length < 25) {
    var size = random(10, 20);
    var ball = new Ball(
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
      size
    );
    balls.push(ball);
  }

  for (var i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
  }

  requestAnimationFrame(loop);
}

loop();