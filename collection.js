var offer_section = document.querySelector(".offer_section");
var offer_section_close = document.getElementById("offer_section_close");

var Navbar_container_sub3_menu = document.getElementById(
  "Navbar_container_sub3_menu"
);
var Sidenavbar = document.querySelector(".Sidenavbar");
var sidenavbar_close = document.getElementById("sidenavbar_close");

offer_section_close.addEventListener("click", function () {
  offer_section.style.display = "none";
});

Navbar_container_sub3_menu.addEventListener("click", function () {
  Sidenavbar.style.left = "0%";
});

sidenavbar_close.addEventListener("click", function () {
  Sidenavbar.style.left = "-50%";
});

var div = document.querySelectorAll(".Selectcart_collection_coursecard");
var input = document.getElementsByName("input");
var collection = document.querySelector(".Selectcart_collection");
var temp = [];

for (var count = 0; count < input.length; count++) {
  input[count].addEventListener("click", function (event) {
    var check = 0;
    if (event.target.checked) {
      check++;
      temp.push(event.target.value);
      console.log(temp);
      update();
    } 
    else {
      if (temp.length == 0) {
        for(i=0;i<div.length;i++){
          div[i].style.display="block"
        }
      } else {
        temp=temp.filter(item => item !== event.target.value)
        console.log(temp)
        if (temp.length == 0) {
          for(i=0;i<div.length;i++){
            div[i].style.display="block"
          }
        } else{
          update();
        }
      }
    }
  });
}

function update() {
  for (var inc = 0; inc < div.length; inc++) {
    var container = div[inc].getAttribute("data-catagories").split(" ");
    var validate = 0;
    for (var i = 0; i < temp.length; i++) {
      var temparry = temp[i].toLowerCase();
      for (var j = 0; j < container.length; j++) {
        var containerarry = container[j].toLowerCase();
        if (temparry == containerarry) {
          validate++;
        }
      }
      if (validate == 0) {
        div[inc].style.display = "none";
      } else {
        div[inc].style.display = "block";
        validate = 0;
      }
      
    }
  }
}
