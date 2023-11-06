import fs from 'fs';

let state = {
  order: JSON.parse(fs.readFileSync('./json/data.json','utf-8'))
};

let Updateorder1 = state.order;
Updateorder1.receive = '강남구 서초구 ...';

console.log(state.order, Updateorder1, state.order===Updateorder1);
console.log("========================================");

state = {
  order: JSON.parse(fs.readFileSync('./json/data.json','utf-8'))
};

const updateOrder2 = Object.assign({},state.order,{receive:"변경!"});
console.log(updateOrder2, updateOrder2 === state.order);