var drop_down = document.getElementById("drop-down");
var cancel = document.getElementById("CM");
var hamburger_menu = document.querySelector("#hamburger-menu")
const nest_list = document.querySelectorAll("li")
//var sublink = document.querySelectorAll(".sublink")

hamburger_menu.addEventListener("click", function(){
    drop_down.style.display = "block";
    this.style.display = "none";
});

cancel.addEventListener("click", function(){
    drop_down.style.display = "none";
    hamburger_menu.style.display = "block";
})

nest_list.forEach(item => {
    item.querySelector('a').addEventListener(
        "click", function(event){
            event.preventDefault();

            item.querySelector(".sublink").style.display = item.querySelector(".sublink").style.display === 
            "block" ? "none" : "block";
        }
    );
});
