"use strict";var tabs=document.querySelector(".tabs"),listItem=document.querySelectorAll(".list-item"),navSlider=document.querySelector(".nav-slider ul"),sliderItemNav=document.querySelectorAll(".item-nav"),sliderItem=document.querySelectorAll(".owl-item-block"),count=document.querySelector(".black-side-f"),sliderArrow=document.querySelector(".owl-nav-dots"),carousel=document.querySelector(".owl-carousel");document.querySelector(".black-side-s").innerHTML=sliderItem.length.toString(),sliderItem.forEach(function(e,t){e.setAttribute("data-number",t)}),sliderItemNav.forEach(function(e,t){e.setAttribute("data-number-nav",t)}),tabs.addEventListener("click",function(e){var t=e.target?e.target:e.srcElement;listItem.forEach(function(e){e.firstChild.classList.contains("active-title")&&e.firstChild.classList.remove("active-title"),t.classList.add("active-title")})}),sliderArrow.addEventListener("click",function(){document.querySelectorAll(".owl-item").forEach(function(e){if(e.classList.contains("active")){var t=e.firstChild.getAttribute("data-number");sliderItemNav.forEach(function(e){t!=e.getAttribute("data-number-nav")?e.children[0].firstChild.classList.remove("active-slide"):e.children[0].firstChild.classList.add("active-slide"),count.innerHTML=(parseInt(t)+1).toString()})}})}),navSlider.addEventListener("click",function(e){var i=e.target?e.target:e.srcElement;sliderItemNav.forEach(function(e){if(e.children[0].firstChild.classList.contains("active-slide")){e.children[0].firstChild.classList.remove("active-slide"),i.classList.add("active-slide");var t=i.parentElement.parentElement.getAttribute("data-number-nav");count.innerHTML=(parseInt(t)+1).toString()}else i.classList.add("active-slide")})});var event=null;function startTouch(e){event=e}function endTouch(e){event=null}function touchSlider(e){if(event){var t=e.touches[0].pageX-event.touches[0].pageX;0<t?console.log("r"):t<0&&console.log("l")}}carousel.addEventListener("touchstart",startTouch,!1),carousel.addEventListener("touchmove",touchSlider,!1),carousel.addEventListener("touchmove",endTouch,!1);