console.log('line 1')
//large computation
console.log('line 2')
// callbacks

setTimeout(() => {
    console.log('line 6')
}, 2000)

window.alert("line 3")

// promises

let age = 10

const promise = new Promise((resolve, reject)=>{

    if(age<18){
        reject('You are not old enough for license')
    }

    resolve("You can drive now")


})

console.log(promise.then((response)=>console.log(response)))


setInterval(()=>{

    console.log("line 7")

},2000)

console.log('line 4')

//callbacks

function Demo(fn){

    console.log('before callback')

    setTimeout(fn, 2000)


}

function callback(){
    console.log('callback executed')
}

Demo(callback)



window.alert("line 5")

