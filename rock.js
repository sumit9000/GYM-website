// console.log("hello world")

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html/css');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>GYM</title>
  
  </head>
  <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/syle.css">
  <style>
      /* css reset */
      body {
          font-family: 'Baloo Bhaina 2', cursive;
          color: chocolate;
          margin: 0px;
          padding: 0px;
          background-image: url("web 1/bg.jpg");
          /* position: relative; */
      width: 100%;
      height: 100%;
  
      }
  
  
      .left {
          display: inline-block;
  
          left: 131px;
          top: 55px;
  
          position: absolute;
  
  
          /* border: 2px solid green; */
      }
  
      .left img {
          width: 160px;
          filter: invert(100%);
  
      }
  
      .left div {
          text-align: center;
  
      }
  
      .mid {
          display: inline block;
          width: 36%;
          margin: 30px auto;
          /* border: 2px solid red; */
      }
  
      .right {
          position: absolute;
          right: 43px;
          top: 33px;
          display: inline-block;
          /* border: 2px solid blueviolet; */
      }
  
      .navbar {
          display: inline-block;
          font-size: 20PX;
      }
  
      .navbar li {
          display: inline-block;
          font-size: 20px;
      }
  
      .navbar li a {
          color: chocolate;
          text-decoration: none;
  
          padding: 34px, 23px;
      }
  
      .navbar li a:hover,
      .navbar li a:active {
          text-decoration: underline;
          color: rgb(170, 33, 15);
      }
  
      .btn {
          font-family: 'Baloo Bhaina 2', cursive;
          background-color: blanchedalmond;
          color: chartreuse;
          padding: -1px 75px;
          border: slateblue;
          border-radius: 27px;
          font-size: 31px;
          cursor: pointer;
      }
  
      .btn:hover {
          background-color: teal;
      }
  
      .container {
          text-align: center;
          border: 2px solid black;
          margin: 106px 80px;
          padding: 69px;
          width: 55%;
          border-radius: 55px;
      }
  
      .form-group input {
          font-family: 'Baloo Bhaina 2', cursive;
          text-align: center;
          display: block;
          width: 33%;
          padding: 21px 120px;
          border-radius: 22px;
          margin: 11px auto;
          font-size: 18px;
          border: 4px solid black;
      }
  
      .container h1 {
          text-align: center;
          
      }
  </style>
  
  <body>
      <img src="bg.jpg">
  
      <header class="header">
          <!-- left box for logo -->
          <div class="left">
              <img src="web 1/fit.png" alt="fitness">
              <div> FITNESS TALK</div>
  
          </div>
          <!-- mid box for nav bar -->
          <div class="mid">
              <ul class="navbar">
                  <li><a href="#" class="active"> home </a></li>&nbsp;&nbsp;&nbsp;
                  <li><a href="#" class="active">about us</a></li>&nbsp;&nbsp;&nbsp;
                  <li><a href="#" class="active">fitness calculator</a></li>&nbsp;&nbsp;&nbsp;
                  <li><a href="#" class="active">contact us</a></li>&nbsp;&nbsp;&nbsp;
              </ul>
          </div>
          <!-- right box for buttons -->
          <div class="right">
              <button class="btn">call us now</button>
              <button class="btn">email us</button>
          </div>
      </header>
      <div class="container">
          <h1>JOIN THE BEST GYM OF JAMSHEDPUR</h1>
          <form action="noaction .php">
              <div class="form-group">
                  <input type="text" name="" placeholder="enter your name">
              </div>
              <div class="form-group">
                  <input type="text" name="" placeholder="enter your age">
              </div>
              <div class="form-group">
                  <input type="text" name="" placeholder="enter your gender">
              </div>
              <div class="form-group">
                  <input type="text" name="" placeholder="enter your locality">
              </div>
              <div class="form-group">
                  <input type="text" name="" placeholder="enter your phone.no">
              </div>
          </form>
          <button class="btn">submit</button>
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});