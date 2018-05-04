var inq = require("inquirer");
var pmpt = inq.createPromptModule();

var qs = [
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your title?"
    },
    {
        type: "input",
        name: "age",
        message: "How old are you?"
    },
    {
        type: "input",
        name: "language",
        message: "What is your fav language?"
    }
];

function Programmer(name, title, age, language){
    this.name = name;
    this.title = title;
    this.age = age;
    this.language = language;
    this.print = function(){
        for(var key in this){
            if(typeof this[key] !== 'function'){
                console.log(key + " : " + this[key]);
            }
        }
    }
}

// Programmer.prototype.isFunny = false; // inherit ---> add isFunny to Programmer

// var carol = new Programmer("Carol", "HR", "50", "English");
// console.log(carol.isFunny);

// carol.print();
//var programers = [];

// the for loop below would not be workking as expected. The call back function will be called and the answer will be returned 5 times even though user only answer 1
// for(var i = 0; i < 5; i++){
    
//     pmpt(qs).then(function(r){
//         var object = new Programmer(r.name, r.title, r.age, r.language);
//         //console.log(object); --> this wiill also print out the function: print: [Function]
//         object.print();
//     });
// }

var programmers = [];
var count = 0;

function userCreator(){

    if(count < 2){

        pmpt(qs).then(function(r){
            var object = new Programmer(r.name, r.title, r.age, r.language);
            //console.log(object); --> this wiill also print out the function: print: [Function]
            //object.print();
            programmers.push(object);
            count++;
            userCreator();
        });
    }else{
        console.log(programmers);
    }
}

userCreator();