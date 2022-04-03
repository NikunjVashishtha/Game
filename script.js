window.onload = function() {
    var timenow = Date.now();
    let speed = 600;
    let dir = 0;

    const absol_h = window.innerHeight;
    const absol_w = window.innerWidth;

    var canvas = document.getElementById("game_canvas");
    var ctx = canvas.getContext("2d");

    ctx.canvas.width  = absol_w;
    ctx.canvas.height = absol_h;

    var img = new Image();
    img.src = "rocket.png";

    var x = 0;
    var y = (absol_h-120)/2;
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let left = document.getElementById("left");
    let right = document.getElementById("right");

    up.onmousedown = function() {dir = 4};
    down.onmousedown = function() {dir = 3};
    left.onmousedown = function() {dir = 2};
    right.onmousedown = function() {dir = 1};

    up.ontouchstart = function() {dir = 4};
    down.ontouchstart = function() {dir = 3};
    left.ontouchstart = function() {dir = 2};
    right.ontouchstart = function() {dir = 1};

    up.onmouseup = function() {dir = 0};
    down.onmouseup = function() {dir = 0};
    left.onmouseup = function() {dir = 0};
    right.onmouseup = function() {dir = 0};

    up.ontouchend = function() {dir = 0};
    down.ontouchend = function() {dir = 0};
    left.ontouchend = function() {dir = 0};
    right.ontouchend = function() {dir = 0};

    function move()
    {
      var ping = (Date.now()-timenow)/1000;
      timenow = Date.now();
      var fps = Math.round(1/ping);
      ctx.clearRect(0,0,absol_w,absol_h);
      ctx.beginPath();
      ctx.font = '25px Sans-serif';
      ctx.fillStyle = 'white';
      ctx.fillText("FPS: "+fps,20,30);
      ctx.beginPath();
      ctx.drawImage(img,x,y,120,120);
      if (dir == 1)
      {
        if (x+120 < absol_w)
        {
          x += (speed * ping);
        }
      }
      else if (dir == 2)
      {
        if (x > 0)
        {
          x -= (speed * ping);
        }
      }
      else if (dir == 3)
      {
        if (y+120 < absol_h)
        {
          y += (speed * ping);
        }
      }
      else if (dir == 4)
      {
        if (y > 0)
        {
          y -= (speed * ping);
        }
      }
      window.requestAnimationFrame(move);
    }
    move();
}