//js
var screen = "";

function operatorFunx() {
  if (screen.indexOf("+") != -1) {
    var numbers = screen.split("+");
    var x = parseInt(numbers[0], 2);
    var y = parseInt(numbers[1], 2);
    var sum = x + y;
    var ans = sum.toString(2);
  } else if (screen.indexOf("-") != -1) {
    var numbers = screen.split("-");
    var x = parseInt(numbers[0], 2);
    var y = parseInt(numbers[1], 2);
    var sub = x - y;
    var ans = sub.toString(2);
  } else if (screen.indexOf("*") != -1) {
    var numbers = screen.split("*");
    var x = parseInt(numbers[0], 2);
    var y = parseInt(numbers[1], 2);
    var mul = x * y;
    var ans = mul.toString(2);
  } else if (screen.indexOf("/") != -1) {
    var numbers = screen.split("/");
    var x = parseInt(numbers[0], 2);
    var y = parseInt(numbers[1], 2);
    var div = x / y;
    var ans = div.toString(2);
  }
  screen = ans;
  document.getElementById("res").innerHTML = screen;
}

function key(c) {
  //console.log(screen);

  screen += c;
  document.getElementById("res").innerHTML = screen;
}

function cl() {
  screen = "";
  document.getElementById("res").innerHTML = screen;
};

//css
.jumbotron {
  font-family: 'Share Tech Mono';
}

#res {
  background: black;
  border: solid, black;
  height: '40px';
  font-size: '20px';
  color: limegreen;
  text-align: right;
}

.btn {
  font-family: 'Share Tech Mono';
}

#btns {
  width: 90%;
  text-align: center width: 22%;
  height: '36px';
  font-size: '18px';
}

.upper {
  display: inline;
  position: top;
}

.lgreen {
  background: lightgreen;
  color: brown;
  display: inline;
  width: 22%;
  height: '36px';
  font-size: '18px';
}

.dgreen {
  background: darkgreen;
  color: white;
  display: inline;
  width: 22%;
  height: '36px';
  font-size: '18px';
}

.lower {
  disply: inline;
  position: bottom;
}

.operator {
  background: black;
  color: red;
  height: '36px';
  width: 22%;
  font-size '18px';
}


//html
<head>
  <meta charset="utf-8">
  <title>Binary Calculator</title>
  <link href='https://fonts.googleapis.com/css?family=Share+Tech+Mono' rel='stylesheet' type='text/css'>
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <!-- jQuery library -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <!-- Latest compiled JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</head>

<body>
  <div class="container-fluid">

    <div class="jumbotron">
      <h1>Binary Input/Output Calculator</h2>
      <h3>Perform basic arithmetic with binary numbers</h3>
      <div id="res" maxlength="8"></div>

      <div id="btns" class="btn">
        <div class="upper">
          <button class="lgreen" id="btn0" onclick="key('0')">0</button>
          <button class="lgreen" id="btn1" onclick="key('1')">1</button>
          <button class="dgreen" id="btnClr" onclick="cl()">C</button>
          <button class="dgreen" id="btnEql" onclick="operatorFunx()">=</button>
        </div>
        <div class="lower">
          <button id="btnSum" class="operator" onclick="key('+')">
                  +</button>
          <button id="btnSub" class="operator" onclick="key('-')">
                  -</button>
          <button id="btnMul" class="operator" onclick="key('*')">
                  *</button>
          <button id="btnDiv" class="operator" onclick="key('/')">
                  /</button>
        </div>
      </div>
    </div>
  </div>

</body>

</html>
