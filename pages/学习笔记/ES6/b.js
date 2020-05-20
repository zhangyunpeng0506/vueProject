// import {sum,sum2,User} from './a.js'
import add from './a.js'
import * as a from './a.js'

console.log('ES6模块化：'+a.sum(1,2,3));
console.log('ES6模块化：'+a.sum2(2,3,4));

let user=new a.User();
user.say();
console.log(add);
