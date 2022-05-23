/* Custom Array */
class MyArray{
  constructor(){
    this.array = {};
    this.length = 0;
  }
  push(item){
    this.array[this.length] = item;
    this.length++;
  }
  pop(item){
    const delItem = this.array[this.length-1];
    delete this.array[this.length-1];
    this.length--;
    return delItem;
  }
  delete(index){
    if(this.length==0){
      return false;
    }
    
    this.shiftItems(index);
    return true;
  }
  shiftItems(index){
    for(let i = index ; i<this.length -1; i++){
      this.array[i] = this.array[i+1];
    }
    delete this.array[this.length-1];
    this.length--;
  }
  
}
const arr = new MyArray();
arr.push('hello');
arr.push('kkk');
arr.push('mmm')
arr.push(12);
// console.log("before pop");
// console.log(arr);
// arr.pop();
// console.log("after pop");
arr.delete(1);
arr.delete(0);
arr.delete(3);
console.log(arr);