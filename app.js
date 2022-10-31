console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


//sum of array using reduce method
let numArray = new Array(2,22,12,17,18,39,129);

function arraySumReduce (array){
return array.reduce((a, b) => a + b);
}


//sum of array using foreach method
let sum = 0;

function arraySum (array){
array.forEach((number) =>  {
    sum += number;
});
return sum;
}

//function calls

console.log(arraySumReduce(numArray));
console.log(arraySum(numArray));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

//create class and constructor to do the problem using a book class
class Book {
    constructor (title, author, numPages,bookIsRead){
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.bookIsRead = bookIsRead;
        this.info = () => {return `${this.title}, ${this.author}, ${this.numPages}, read ${this.readCount} times`};
    }
}

// create some book objects
let myBook = new Book ("Dune", "Frank Herbert", 412, 0);

let dotNotationBook = new Book ();

//showing dot notation assignment

dotNotationBook.title = "The Hobbit";
dotNotationBook.author = "J.R.R Tolkien";
dotNotationBook.numPages = 295;
dotNotationBook.bookIsRead = 1;
dotNotationBook.readCount = 2;


//calling console object log method to output objects and their methods
console.log(myBook);
console.log(dotNotationBook.info());

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

//I feel like there must be a better way to do this.... my solution required a regex, would be open to feedback on other ways to do this that are easier to read!

let sentence = "The quick brown fox jumps over the lazy dog";

function reverseStringWords (str) {
 let newarr = str.split(" ");
 let holder = [];
 for (i of newarr){
   holder.push(i.split('').reverse().join(''));
 };
return holder.join(',').replace(/,/g," ");
}

console.log(reverseStringWords(sentence));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

//Base variables
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
let dataPairs = csvData.split("\n");
let headers = dataPairs[0].split(",");
const output = [];



//Create an object and populate it with data points from the csv array, regardless of the number of variables stored in the array
function csvDataToObject (dataPairs) {
    //split our values into separate entities
    for (let i = 0; i < dataPairs.length; i++){
        if( i == 0){

        } else {
            let csvValues = dataPairs[i].split(",");
            const obj = {};
        
    
for (let i = 1; i < dataPairs.length; i++){
    
    for (let j = 0; j < csvValues.length; j++){
        if (headers[j]) {
            obj[headers[j]] = csvValues[j];
        } else {
            obj[`Unknown Header ${j+1}`] = csvValues[j];
        }
       
    }
     
}
output.push(obj);
}
}

}

csvDataToObject(dataPairs);
console.log(output);