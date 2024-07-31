const a = document.querySelectorAll(".myclass");

a.forEach((ele) => {
  ele.addEventListener("click", () => {
    ele.style.backgroundColor = "red";
  });
});

const b = document.querySelector("#myinput");

b.addEventListener("change", () => {
  b.style.backgroundColor = "green";
});

const c = document.querySelector("#myselect");

c.addEventListener("keydown", () => {
  c.style.backgroundColor = "yellow";
});

const d = document.querySelector("#heading2");

d.addEventListener("mouseover", () => {
  d.style.fontSize = "40px";
});

d.addEventListener("mouseout", () => {
  d.style.fontSize = "10px";
});

const e = document.querySelector("#myform");

e.addEventListener("submit", async (event) => {

  event.preventDefault();

  const formData = new FormData(e);

  // Access individual values
  console.log(formData.get("username"));
  console.log(formData.get("email"));
  console.log(formData.get("password"));

  try {
    const url = "https://6666e9e8a2f8516ff7a57eb4.mockapi.io/users";

    const data = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    console.log(data.status);

    alert("Form submission success");
  } catch (error) {
    console.error("Error:", error);
    return error;
  }

  // Clear form fields
  e.reset();

});


window.addEventListener("load", ()=>{

    console.log("window loaded successfully");
})


b.addEventListener('focus', ()=>{
    console.log("Input field focused");
})

window.addEventListener('resize',()=>{
    console.log("Window resized")
})





