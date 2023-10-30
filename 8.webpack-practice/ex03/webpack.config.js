const path= require('path');


module.exports={
  mode:"development",
  entry: path.resolve('src/index.js'),
  output: {
    path: path.resolve('public'),// 실제 개발 내용이라면  ../backend/src/main/resources/ .. 와 같은 루트일것!
    filename: 'assets/js/bundle.js'
  },
  devServer: {
    host:'0.0.0.0',
    port: 9090,
    liveReload: true,
    compress:true,
    hot:false, // 핫스왑. 라이브 리로드는 전체 다 올리는 것이고, 핫스왑은 변화된 내용만 반영
  }
}
