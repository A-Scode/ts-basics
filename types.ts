var arr:number[]= [2,2,23,34,3,43,23,34  , NaN , Infinity];

console.table(arr)


// type to declare new restriction to variable
type style = 'some' |'name' | 'you' |23 |'😂' ;

var somename:style = 'name';
let happy:style  = '😂';
const you:string = 'some'

// you = 23 // throws error on assigning different type of value

// simple types 

var bool : boolean = true;
var num : number = 23;
var str : string = 'hello';

// special types


// any : type allows all types to be used
const ignore : any = '😒';
console.log(ignore);

// unknown : type similar to any but safer than that 
var uk : unknown;
uk = "some string 😩";

// can be used after casting
console.log(uk  as string );

// type : never used rarely when no value is to be assigned to var name

var No : never  ;
// No = "some name"; // will throw error 
console.log(No);


// Array

// array with types

var arr1 : number[]  = [ 1,34,34,55,323,23,34,342,3435]; // accepts only numbers
var arr2   = ["hello" , "awesome⭐"]; // automatically infered to stirng[]

arr1.push(2);
console.log(arr2.pop());

// readonly array

const arr3 : readonly number[] = [3,23,3,3,423,34,2,3,43,45,34,23,3]
console.log("arr3 readonly array: ");
console.table(arr3);

// Tuples are typed arrays with predefined types and length

var arr4 : [number , boolean , string ];
arr4 = [2 , false  , '😭'];

console.table(arr4);

// readonly Tuple
const arr5 : readonly [number , null , undefined]=[ 23 , null , undefined];
console.table(arr5);


// object types

var car :{
    brand : string , 
    models : string[],
    isSeddan : boolean,
    rank : number,
    [key : string] : any  //this allows to add unknown properties to object
} = {
    brand : "MS" , 
    models : ["LXI" , "VXI"  , "ZXI"],
    isSeddan : false , 
    rank : 22,
    name : "swift desire"

};  // here also inference can be used if do give types object


car.name = 344; // will not throw error because any type
// car.isSeddan = 5 ; // will throw error because of boolean type





// type casting
console.log(  you as   undefined)





// converts this to javascirpt 
async function sayHello(){
    return "Hii";
}
