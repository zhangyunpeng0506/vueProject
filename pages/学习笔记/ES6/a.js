function sum(...arr) {
  return arr.reduce((prev,current)=>prev+current);
}

//导出方式一：
export {
  sum
}

//导出方式二：
export function sum2(...arr) {
  return arr.reduce((prev,current)=>prev+current);
}

export class User{
  constructor(){}
  say(){
    console.log('hello');
  }
}

//export default
const address='深圳'

//同一个js里只能导出一个default（导入时可自定义名字）
export default address

//统一导出