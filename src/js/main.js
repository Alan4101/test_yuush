let tabs          = document.querySelector('.tabs');
let listItem      = document.querySelectorAll('.list-item');
let navSlider     =  document.querySelector('.nav-slider ul');
let sliderItemNav = document.querySelectorAll('.item-nav');
let sliderItem    = document.querySelectorAll('.owl-item-block');
let count         = document.querySelector('.black-side-f');
let sliderArrow   = document.querySelector('.owl-nav-dots');
let carousel      = document.querySelector('.owl-carousel');

document.querySelector('.black-side-s').innerHTML = sliderItem.length.toString();
/*ADD DATA ATTRIBUTE*/
sliderItem.forEach( (item, i) =>{
    "use strict";
    item.setAttribute('data-number', i);
});

sliderItemNav.forEach((item, i)=>{
    "use strict";
   item.setAttribute('data-number-nav', i);
});
/*SELECT ACTIVE TABS*/
tabs.addEventListener('click', function(e){
    let t = e.target ? e.target : e.srcElement;

    listItem.forEach( el => {
        if(el.firstChild.classList.contains('active-title')){
            el.firstChild.classList.remove('active-title');
            t.classList.add('active-title');
        }else {
            t.classList.add('active-title');

        }
    })
});
/*SLIDE ARROW PREV, NEXT*/
sliderArrow.addEventListener('click', ()=>{
    "use strict";
    let owl = document.querySelectorAll('.owl-item');
    owl.forEach(el =>{

        if(el.classList.contains('active')){
            let num = el.firstChild.getAttribute('data-number');

            sliderItemNav.forEach( item => {
                num != item.getAttribute('data-number-nav') ?
                    item.children[0].firstChild.classList.remove('active-slide') :
                        item.children[0].firstChild.classList.add('active-slide'),
                        count.innerHTML = (parseInt(num)+1).toString();
            })
        }
    })

    // console.log(count);
});
/* LITTLE NAV IMG*/
navSlider.addEventListener('click', (e)=>{
    "use strict";
    let t = e.target ? e.target : e.srcElement;

    sliderItemNav.forEach( (item )=>{
        if(item.children[0].firstChild.classList.contains('active-slide')){
            item.children[0].firstChild.classList.remove('active-slide');
            t.classList.add('active-slide');
            let k = t.parentElement.parentElement.getAttribute('data-number-nav');
            count.innerHTML = (parseInt(k)+1).toString();
        }else {
            t.classList.add('active-slide');
        }
    })

});
/*EVENT TOUCH*/
let event = null;

function startTouch(ev){
    "use strict";
    event = ev;
}

function endTouch(ev){
    "use strict";
    event = null;
}

function touchSlider(ev) {
    "use strict";
    if(event){
        let delta = ev.touches[0].pageX - event.touches[0].pageX;
        // console.log('delta= '+ delta);
        if(delta > 0){
            console.log('r')
        }else if(delta < 0){
            console.log('l');
        }
    }

}

carousel.addEventListener('touchstart', startTouch, false);

carousel.addEventListener('touchmove', touchSlider, false);

carousel.addEventListener('touchmove', endTouch, false);




