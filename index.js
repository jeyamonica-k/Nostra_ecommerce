var leftarrow=document.querySelector(".hero_container_content_leftarrow")
var rightarrow=document.querySelector(".hero_container_content_rightarrow")
var slideimage=document.querySelector(".hero_container_img")

var offer_section=document.querySelector(".offer_section")
var offer_section_close=document.getElementById("offer_section_close")

var Navbar_container_sub3_menu=document.getElementById("Navbar_container_sub3_menu")
var Sidenavbar=document.querySelector(".Sidenavbar")
var sidenavbar_close=document.getElementById("sidenavbar_close")


var slidermargin=0

rightarrow.addEventListener("click",function(){
  slidermargin=slidermargin+100
  if(slidermargin>200){
    slidermargin=0
    slideimage.style.marginLeft=0

  }
  else{
    slideimage.style.marginLeft="-"+slidermargin+"vw"
  }



})

leftarrow.addEventListener("click",function(){

  if(slidermargin==0)
    {
       
        slidermargin=200
        slideimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    slideimage.style.marginLeft="-"+slidermargin+"vw";
    }



})


offer_section_close.addEventListener("click",function(){
  offer_section.style.display="none"
})


Navbar_container_sub3_menu.addEventListener("click",function(){
  Sidenavbar.style.left="0%"

})

sidenavbar_close.addEventListener("click",function(){
  Sidenavbar.style.left="-50%"
})