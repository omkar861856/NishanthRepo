function mouseUp(){
    console.log("Mouse up event detected");
    document.getElementById("myDiv").style.backgroundColor = "yellow";
}

function mouseDown(){
    console.log("Mouse down event detected");
    document.getElementById("myDiv").style.backgroundColor = "blue";
}

function doSomething(){
    let ok = "yes"
    console.log(prompt("Are you sure"))
    console.log("Hello, this is a custom function!");
}


const form = document.querySelector("form")


form.addEventListener("submit", (e)=>{

    e.preventDefault(); // prevent form from submitting normally
    const data = new FormData(form)
    console.log(data.get('theInput'));

    const li = document.createElement('li'); //
    li.textContent = data.get('theInput');
    const ul = document.querySelector('ul');
    ul.appendChild(li);
    form.reset(); // clear the form after submission


})