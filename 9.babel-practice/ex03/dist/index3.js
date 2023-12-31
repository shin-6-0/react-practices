// 블록 스코프 (ES6)
var users = [{
  no: 1,
  name: '마이콜',
  email: 'michol@gmail.com'
}, {
  no: 2,
  name: '둘리',
  email: 'dooly@gmail.com'
}];

//객체분해(ES6)
function print(_ref) {
  var {
    no,
    name,
    email
  } = _ref;
  // 템플릿 문자열(ES6)
  console.log(`${no}:${name}:${email}`);
}

//for ~ of(ES6)
for (var _i = 0, _users = users; _i < _users.length; _i++) {
  var user = _users[_i];
  print(user);
}
