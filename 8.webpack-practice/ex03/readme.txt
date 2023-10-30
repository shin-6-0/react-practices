ex03: webpack 개발 서버

1. 설치 패키지 
$ npm i -D express webpack webpack-cli webpack-dev-server

2. 번들링 환경(webpack.config.js) 설정
  1) entry
  2) output
  3) devServer


3. 스크립팅
"scripts"{
  "start":"npx webpack serve --progress", 
  //읽어서 서버를 띄움. progress의 경우 메모리에 올리는경우와 가짓수 등을 보여줌
  "build":"npx webpack" //빌드(만들어냄)
}

4. 빌드
$ npm run build

5. 실행
$ npm start

