const message = document.getElementById("message");
const change = document.getElementById("change");
const changeb = document.getElementById("changeb");

change.addEventListener("click", function() {
    message.textContent = "Hello, Welcome to my webpage"
});

changeb.addEventListener("click", function(){
    document.body.style.backgroundColor = "LightPink"
});