const http = require("http");
const path = require("path");
const express = require("express");
const port = 9090;

const application = express().use(
  express.static(path.join(__dirname, "public"))
);
//실행되는 ex01이 있는 디렉토리 까지를 __dirname으로 불러옴! (완전편하다..👍)
/*
이 아래에 .use로 라우터 달고,, 기타 등등을 계속 추가!
*/
http
  .createServer(application)
  .on("listening", () => {
    console.log(`서버 시작!! ${port}`);
  })
  .listen(port);
//이렇게 하면 그냥 서버가 생겨버렸다 👏 on은 서버 시작시 이벤트 설정!!
