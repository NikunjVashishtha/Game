window.onload = function() {
  // variables (speed & time)
  var timenow = Date.now();
  let speed = 500;
  let dir = 0;

  // variables (dimensions)
  const absol_h = window.innerHeight;
  const absol_w = window.innerWidth;

  // canavas data
  var canvas = document.getElementById("game_canvas");
  var ctx = canvas.getContext("2d");
  ctx.canvas.width  = absol_w;
  ctx.canvas.height = absol_h;

  // image data
  var img = new Image();
  img.src = "https://lh3.googleusercontent.com/uzxizW1FlcmzJ6rVelEdZt87V2-8rAx-Y9Q3Xpqt3szpXzaO65MBPRUFDamK-ze4zHJeufFS9s1QDDw1fg200DwgedEpt8rG0nd4PJ7Jhd98xDT2LbdY8gX1y6Mxos_v2EB_97rwRw=s292-p-k";
  var coin_img = new Image();
  coin_img.src ="https://lh3.googleusercontent.com/8kXeWyezMkdREPn74LjzcVGJh25zbG7mm-OORrlUFLOYsFzR6zJLX8zqcCrAJeSszVnyNBqaWwo1UAdV_jgrrczbYqrTRaTLN65KGywqtBw_HMNpgh7cqjG8wU_MbORSI73TSrUahg=w2400";

  // keys' variables & data
  var x = 0;
  var y = (absol_h-120)/2;
  let up = document.getElementById("up");
  let down = document.getElementById("down");
  let left = document.getElementById("left");
  let right = document.getElementById("right");
  
  // mouse_click_event
  up.onmousedown = function() {dir = 4; setColor(dir);};
  down.onmousedown = function() {dir = 3; setColor(dir);};
  left.onmousedown = function() {dir = 2; setColor(dir);};
  right.onmousedown = function() {dir = 1; setColor(dir);};

  // touch_click_event
  up.ontouchstart = function() {dir = 4; setColor(dir);};
  down.ontouchstart = function() {dir = 3; setColor(dir);};
  left.ontouchstart = function() {dir = 2; setColor(dir);};
  right.ontouchstart = function() {dir = 1; setColor(dir);};

  // mouse_release_event
  up.onmouseup = function() {dir = 0; setColor(dir);};
  down.onmouseup = function() {dir = 0; setColor(dir);};
  left.onmouseup = function() {dir = 0; setColor(dir);};
  right.onmouseup = function() {dir = 0; setColor(dir);};

  //touch_release_event
  up.ontouchend = function() {dir = 0; setColor(dir);};
  down.ontouchend = function() {dir = 0; setColor(dir);};
  left.ontouchend = function() {dir = 0; setColor(dir);};
  right.ontouchend = function() {dir = 0; setColor(dir);};
  
  // keyboard_controls
  $(document).ready(()=>{
    // release_keys

    $(document).bind('keyup', function(e) {
      dir = 0;
      setColor(dir);
    });

    //press WASD keys
    $(document).bind('keypress', function(e) {
      if(e.keyCode==115){
        dir = 3;
        setColor(dir);
      }
      else if(e.keyCode==97){
        dir = 2;
        setColor(dir);
      }
      else if(e.keyCode==119){
        dir = 4;
        setColor(dir);
      }
      else if(e.keyCode==100 || e.keyCode==39){
        dir = 1;
        setColor(dir);
      }
    });

    // press arrow keys
    $(document).bind('keydown', function(e) {
      if(e.keyCode==40){
        dir = 3;
        setColor(dir);
      }
      else if(e.keyCode==97 || e.keyCode==37){
        dir = 2;
        setColor(dir);
      }
      else if(e.keyCode==119 || e.keyCode==38){
        dir = 4;
        setColor(dir);
      }
      else if(e.keyCode==100 || e.keyCode==39){
        dir = 1;
        setColor(dir);
      }
    });
  })

  // button color picker
  function setColor(dir)
  {
    if (dir == 0)
    {
      up.style.backgroundColor = "white";
      up.style.color = "black";
      down.style.backgroundColor = "white";
      down.style.color = "black";
      left.style.backgroundColor = "white";
      left.style.color = "black";
      right.style.backgroundColor = "white";
      right.style.color = "black";
    }
    else if (dir == 1)
    {
      right.style.backgroundColor = "rgb(245, 66, 96)";
      right.style.color = "white";
    }
    else if (dir == 2)
    {
      left.style.backgroundColor = "rgb(230, 55, 221)";
      left.style.color = "white";
    }
    else if (dir == 3)
    {
      down.style.backgroundColor = "rgb(66, 138, 245)";
      down.style.color = "white";
    }
    else if (dir == 4)
    {
      up.style.backgroundColor = "rgb(37, 217, 91)";
      up.style.color = "white";
    }
  }

  // variables (coin_coordinates)
  let coinx = Math.random() * (absol_w - 50);
  let coiny = Math.random() * (absol_h - 50);

  // variable (score_count)
  let score = 0;

  // motion_function
  function move()
  {
    // variables
    var ping = (Date.now()-timenow)/1000;
    timenow = Date.now();
    let fps = Math.round(1/ping);

    // clear_canvas
    ctx.clearRect(0,0,absol_w,absol_h);

    // render_fps
    ctx.beginPath();
    ctx.font = '25px Sans-serif';
    ctx.fillStyle = 'white';
    ctx.fillText("FPS: "+fps,20,30);

    // render_rocket
    ctx.beginPath();
    ctx.drawImage(img,x,y,120,120);

    // render_coin
    ctx.beginPath();
    ctx.drawImage(coin_img,coinx,coiny,50,50);

    // motion

    // right
    if (dir == 1)
    {
      if (x+120 < absol_w)
      {
        x += (speed * ping);
      }
    }

    // left
    else if (dir == 2)
    {
      if (x > 0)
      {
        x -= (speed * ping);
      }
    }

    // down
    else if (dir == 3)
    {
      if (y+120 < absol_h)
      {
        y += (speed * ping);
      }
    }
      
    // up
    else if (dir == 4)
    {
      if (y > 0)
      {
        y -= (speed * ping);
      }
    }

    // coin_generator
    if (coinx <= x+100 && x <= coinx+50 && coiny <= y+100 && y <= coiny+50)
    {
      coinx = Math.random() * (absol_w - 50);
      coiny = Math.random() * (absol_h - 50);
      score += 100;
      document.getElementById("score_count").innerText = "Score: "+score;
    }

    // animate
    window.requestAnimationFrame(move);
  }
  // calling function
  move();
  
}
let stats = true;
function controls_change_state()
{
  if (stats)
  {
    document.getElementById("controls_stats").innerText = "Controls: OFF";
    document.getElementById("all_controls").style.display = "none";
    stats = !stats;
  }
  else
  {
    document.getElementById("controls_stats").innerText = "Controls: ON";
    document.getElementById("all_controls").style.display = "block";
    stats = !stats;
  }
}
function disappear()
{
  document.getElementById("intro").style.display = "none";
}