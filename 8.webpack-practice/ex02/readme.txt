ex02: 번들링 환경(webpack.config.js) 설정

1. 설치 패키지 
$ npm i -D express webpack webpack-cli

2. 번들링 환경(webpack.config.js) 설정
  1) entry
  2) output


3. 스크립팅
"scripts"{
  "start":"node dev-server",
  "build":"npx webpack ./src/index.js -o ./public"
}

4. 빌드
$ npm run build

5. 실행
$ npm start

// npx webpack --version 으로 웹팩 버전 확인
// npx webpack ./src/index.js
//npx webpack ./src/index.js -o ./public
