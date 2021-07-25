//calling a function
function print(){
    console.log('hello world')
}
print();

//return statement
function add(a,b){
    var sum = a + b;
    return sum;
}
var res = add(3,7);
console.log(res);


//function expression
var y=function(){
    console.log("y is called")
}
y();prints:y is called