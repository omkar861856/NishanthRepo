let h2 = document.querySelector("h2");

h2.addEventListener("click", (event) => {
  console.log(event.target.innerText);
});

let countries = [];

let images = document.getElementsByClassName("images")[0];
console.log(images);

document.querySelector("input").addEventListener("input", (event) => {
  console.log(event.target.value);
});

// callbacks - async js

function Avg(a, b, sum) {
  return sum(a, b) / 2;
}

function sum(a, b) {
  return a + b;
}

console.log(Avg(1, 2, sum));

// Promises - async js - object template

const prototypePromise = {
  state: "pending",
  result: {},
};

const promise = new Promise((resolve, reject) => {
  // resolve with a logic

  setTimeout(() => {
    resolve("reject after 2 seconds"); // prototypePromise.state = "resolved"
  }, 2000);
});

promise.then((result) => {
  console.log(result);
});

console.log("line after promise");

const url = "https://6666e9e8a2f8516ff7a57eb4.mockapi.io/songs";
const fetchPromise = fetch(url);
fetchPromise
  .then((response) => {
    return response.json();
  })
  .then((people) => {
    console.log(people);
  })
  .catch((err) => console.log(err))
  .finally(() => {});

// async await - async js - modern syntax

async function fetchData(url, callback) {
  try {
    const result = await fetch(url);

    const json = await result.json();

    callback(json);
  } catch (error) {
    console.log(error);
  }
}

function renderData(data) {
  countries = data;
  console.log(countries);
  countries.map((data, index) => {
    let name = document.createElement("p");
    name.innerText = data.songName;
    images.appendChild(name);
  });
}



fetchData(url, renderData);

// HTTP - 4 imp methods - GET, PUT, POST , DELETE

async function updateData(data, id) {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(`${url}/${id}`, options);

  const json = await response.json();

  console.log(json);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
}

const data1 = {
  songName: "blank space",
  songArtist: "Taylor Swift",
  trackTime: 444,
};

const id1 = 1;

updateData(data1, id1);

async function deleteData(id) {
 
    try {
        const options = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(`${url}/${id}`, options);
    
        const json = await response.json();
    
        console.log(json);
    } catch (error) {

        console.log(error)
        
    }
  
}

// deleteData(3);

// CRUD - create read update and delete

function filterData(condition){
    const filtered = countries.filter((data)=>{data.songName === condition});
    renderData(filtered)
}

console.log(filterData("composite"))


// hoisting var let and const

console.log(c)

const  a = 1;

let b = 2;


let h;


var c = 3;

let d = b;

let e = {
    name: "John",
    age: 30
}

let f = e;

f.name = "Jane"

console.log(e)

console.log(null* undefined)

// range error, syntax error , reference error, type error








