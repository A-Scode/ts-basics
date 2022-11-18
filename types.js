var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var arr = [2, 2, 23, 34, 3, 43, 23, 34, NaN, Infinity];
console.table(arr);
var somename = 'name';
var happy = '😂';
var you = 'some';
// you = 23 // throws error on assigning different type of value
// simple types 
var bool = true;
var num = 23;
var str = 'hello';
// special types
// any : type allows all types to be used
var ignore = '😒';
console.log(ignore);
// unknown : type similar to any but safer than that 
var uk;
uk = "some string 😩";
// can be used after casting
console.log(uk);
// type : never used rarely when no value is to be assigned to var name
var No;
// No = "some name"; // will throw error 
console.log(No);
// Array
// array with types
var arr1 = [1, 34, 34, 55, 323, 23, 34, 342, 3435]; // accepts only numbers
var arr2 = ["hello", "awesome⭐"]; // automatically infered to stirng[]
arr1.push(2);
console.log(arr2.pop());
// readonly array
var arr3 = [3, 23, 3, 3, 423, 34, 2, 3, 43, 45, 34, 23, 3];
console.log("arr3 readonly array: ");
console.table(arr3);
// Tuples are typed arrays with predefined types and length
var arr4;
arr4 = [2, false, '😭'];
console.table(arr4);
// type casting
console.log(you);
// converts this to javascirpt 
function sayHello() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, "Hii"];
        });
    });
}
