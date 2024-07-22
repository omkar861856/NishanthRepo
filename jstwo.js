const book1 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publicationYear: 1960,
    rating: 4,
}

const book2 = {

    title: "1984",
    author: "George Orwell",
    genre: "Dystopian Fiction",
    publicationYear: 1949,
    rating: 5,
}

const book3 = {

    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    publicationYear: 1925,
    rating: 3,
}


const book4 = {

    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    publicationYear: 1951,
    rating: 5,
}

const books = [book1, book2, book3, book4];


const filteredBoooks = 
books.filter(book => book.rating >= 4)

console.log(filteredBoooks);

const sumArr = [1,2,3,4,5,6,7,8,9,10]

function SumBasic(array){

    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}
//memorise function

console.log(SumBasic(sumArr))
function Sum(array){
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(Sum(sumArr))