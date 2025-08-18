import { Injectable } from '@nestjs/common';
import { Body, Res } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class AppService {
  getHtmlContent(): string {
    return `<!DOCTYPE html>
<html lang="en">
<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1">
<head>
  <meta charset="UTF-8">
  <title>Panana</title>

</head>

<style>
/* Fonts */
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);
/* Variables */
/* Mixins */
body {
  height: 100vh;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  overflow: hidden;
}
body h1 {
  text-transform: uppercase;
  font-size: 30px;
  color: #576e81;
  margin: 30px 0px 0px 0px;
}
body h2 {
  font-weight: normal;
  font-size: 18px;
  color: #F98DB9;
  margin: 10px 0px 0px 0px;
}
body p {
  margin: 0 auto;
}
body .loader {
  height: 100%;
  position: relative;
  margin: auto;
  width: auto;
}
body .loader_overlay {
  width: 150px;
  height: 150px;
  background: transparent;
  box-shadow: 0px 0px 0px 1000px rgba(255, 255, 255, 0.67), 0px 0px 19px 0px rgba(0, 0, 0, 0.16) inset;
  border-radius: 100%;
  z-index: -1;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
body .loader_cogs {
  z-index: -2;
  width: 100px;
  height: 100px;
  top: -120px !important;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
body .loader_cogs__top {
  position: relative;
  width: 100px;
  height: 100px;
  transform-origin: 50px 50px;
  -webkit-animation: rotate 10s infinite linear;
          animation: rotate 10s infinite linear;
}
body .loader_cogs__top div:nth-of-type(1) {
  transform: rotate(30deg);
}
body .loader_cogs__top div:nth-of-type(2) {
  transform: rotate(60deg);
}
body .loader_cogs__top div:nth-of-type(3) {
  transform: rotate(90deg);
}
body .loader_cogs__top div.top_part {
  width: 100px;
  border-radius: 10px;
  position: absolute;
  height: 100px;
  background: #f98db9;
}
body .loader_cogs__top div.top_hole {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: white;
  position: absolute;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
body .loader_cogs__left {
  position: relative;
  width: 80px;
  transform: rotate(16deg);
  top: 28px;
  transform-origin: 40px 40px;
  animation: rotate_left 10s 0.1s infinite reverse linear;
  left: -24px;
  height: 80px;
}
body .loader_cogs__left div:nth-of-type(1) {
  transform: rotate(30deg);
}
body .loader_cogs__left div:nth-of-type(2) {
  transform: rotate(60deg);
}
body .loader_cogs__left div:nth-of-type(3) {
  transform: rotate(90deg);
}
body .loader_cogs__left div.left_part {
  width: 80px;
  border-radius: 6px;
  position: absolute;
  height: 80px;
  background: #97ddff;
}
body .loader_cogs__left div.left_hole {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: white;
  position: absolute;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
body .loader_cogs__bottom {
  position: relative;
  width: 60px;
  top: -65px;
  transform-origin: 30px 30px;
  -webkit-animation: rotate_left 10.2s 0.4s infinite linear;
          animation: rotate_left 10.2s 0.4s infinite linear;
  transform: rotate(4deg);
  left: 79px;
  height: 60px;
}
body .loader_cogs__bottom div:nth-of-type(1) {
  transform: rotate(30deg);
}
body .loader_cogs__bottom div:nth-of-type(2) {
  transform: rotate(60deg);
}
body .loader_cogs__bottom div:nth-of-type(3) {
  transform: rotate(90deg);
}
body .loader_cogs__bottom div.bottom_part {
  width: 60px;
  border-radius: 5px;
  position: absolute;
  height: 60px;
  background: #ffcd66;
}
body .loader_cogs__bottom div.bottom_hole {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: white;
  position: absolute;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

/* Animations */
@-webkit-keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes rotate_left {
  from {
    transform: rotate(16deg);
  }
  to {
    transform: rotate(376deg);
  }
}
@keyframes rotate_left {
  from {
    transform: rotate(16deg);
  }
  to {
    transform: rotate(376deg);
  }
}
@-webkit-keyframes rotate_right {
  from {
    transform: rotate(4deg);
  }
  to {
    transform: rotate(364deg);
  }
}
@keyframes rotate_right {
  from {
    transform: rotate(4deg);
  }
  to {
    transform: rotate(364deg);
  }
}
</style>

<body>
<!-- partial:index.partial.html -->
<div class='loader'>
  <div class='loader_overlay'></div>
  <div class='loader_cogs'>
    <div class='loader_cogs__top'>
      <div class='top_part'></div>
      <div class='top_part'></div>
      <div class='top_part'></div>
      <div class='top_hole'></div>
    </div>
    <div class='loader_cogs__left'>
      <div class='left_part'></div>
      <div class='left_part'></div>
      <div class='left_part'></div>
      <div class='left_hole'></div>
    </div>
    <div class='loader_cogs__bottom'>
      <div class='bottom_part'></div>
      <div class='bottom_part'></div>
      <div class='bottom_part'></div>
      <div class='bottom_hole'><!-- lol --></div>
    </div>
  </div>
  <h1>Panana</h1>
  <h2>Verifying...</h2>
</div>
</body>

<script>


var fragment = window.location.hash;

var fragmentWithoutHash = fragment.substring(1);

function handleRequestAndRedirect() {
  window.location.href = 'https://auth.panana.app/auth/verify?tgAuthResult=' + fragmentWithoutHash;
  }
// Call the function to handle the request and redirect
handleRequestAndRedirect();

</script>

</html>
`;
  };

  // async verify(@Body() body: { tgAuthResult: string }, @Res() res: Response) {


  //   console.log(body.tgAuthResult);

  //     res.cookie('auth_token', 'skyhi', {
  //     httpOnly: false,  // Secure from client-side access
  //     secure: false,    // Only sent over HTTPS
  //     sameSite: 'none', // Required for cross-site cookies
  //     maxAge: 36000000,  // 1 hour expiration
  //   });

  //   res.status(200).json({ message: 'Login successful' });
  // };

}
