var drop_down = document.getElementById("drop-down");
var cancel = document.getElementById("CM");
var hamburger_menu = document.querySelector("#hamburger-menu")
const nest_list = document.querySelectorAll("li")
const external_link = document.querySelectorAll(
    'a[href^="http"]:not([href*="' + window.location.hostname + '"])'
);


external_link.forEach(
    link => {
        link.addEventListener("click", function(event){
            event.preventDefault()
            if(confirm("This is a jamb replicated site, You are leaving our site. Do you want to continue?")){
                window.location.href = this.href
            };
        });
    }
);
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
        

            item.querySelector(".sublink").style.display = item.querySelector(".sublink").style.display === 
            "block" ? "none" : "block";
        }
    );
});
