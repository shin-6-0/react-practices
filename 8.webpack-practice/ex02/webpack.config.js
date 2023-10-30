const path= require('path');


module.exports={
  mode:"development",
  entry: path.resolve('src/index.js'),
  output: {
    path: path.resolve('public'),// 실제 개발 내용이라면  ../backend/src/main/resources/ .. 와 같은 루트일것!
    filename: 'assets/js/bundle.js'
  }
}