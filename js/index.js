// showmanu
const nabtoggle = document.querySelector('.nav-toggle'),
    navMenu = document.querySelector('.nav-menu'),
    navClose = document.querySelector('.nav-close'),
    navLink = document.querySelectorAll('.nav-link')


if(nabtoggle){
    nabtoggle.addEventListener('click', ()=>{
        navMenu.classList.add('showNave')
    
    })
}


if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('showNave')
    })
}

navLink.forEach((e)=>{
    e.addEventListener('click',()=>{
        navMenu.classList.remove('showNave')
        
    })
})





// percentage --------------------------------innerWidth

// var percentageDiv = document.querySelectorAll('.skills-percentage')

// var percentageNumber = document.querySelectorAll('.skills-number')

// var changP = (o)=>{
    
    //     for(i=0;i<percentageDiv.length;i++){
        //         percentageDiv[i].style.width = o;
        //     }
        // }
        
        // percentageNumber.forEach(k=>{
            //    var ii =  k.innerHTML
            //    return changP(ii)
            // })
            
            

            
            // skill----------------------
            const skilContect =document.querySelectorAll('.skills-content'),
            skillsHeader = document.querySelectorAll('.skills-header')
            
            function toggleskills(){
                let itemclass = this.parentNode.className
              
                for(i=0;i<skilContect.length;i++){
                    skilContect[i].className = 'skills-content skill-close'
                }
                if( itemclass === 'skills-content skill-close'){
                    this.parentNode.className = 'skills-content skill-oepn'
                }
                
            }
            
            skillsHeader.forEach(e=>{
                e.addEventListener("click",toggleskills)
            })
            
            
            
            // qualification----------------------------------
            
            const tabs = document.querySelectorAll('[data-target]'),
            tabContacts = document.querySelectorAll('[data-contect]')
            
            
            tabs.forEach(tab=>{
                tab.addEventListener('click',()=>{
                    const target = document.querySelector(tab.dataset.target)
                   
                    
                    tabContacts.forEach(tabContent=>{
                        tabContent.classList.remove('qualification-active')
        })
        
        target.classList.add('qualification-active')
        
        tabs.forEach(tab=>{
            tab.classList.remove('qualification-active')
        })
        tab.classList.add('qualification-active')
    })
})



// services==========

const modalView = document.querySelectorAll('.services-modal'),
modalBtns = document.querySelectorAll('.services-button'),
modalCloses = document.querySelectorAll('.services-modal-close')

let modal = function(modalClick){
    modalView[modalClick].classList.add('active-modal')

}

modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click',()=>{
        modal(i)
       
    })
})


modalCloses.forEach((modalcolse)=>{
    modalcolse.addEventListener("click", ()=>{
        modalView.forEach((modalVie)=>{
            modalVie.classList.remove('active-modal')
        })
    })
})


// swiper animation for porfolio{}

// var swiper = new Swiper('.portfolio-container', {
    //     loop : true,
    //     cssMode: true,
    //     spaceBetn:48,
    //     grbCurson:true,
    // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        //     pagination: {
            //       el: '.swiper-pagination'
            //     },
            //     mousewheel: true,
            //     keyboard: true,
            //   });
            let swiperProject = new Swiper('.portfolio-container', {
                loop : true,
                grbCurson:true,
                spaceBetn:48,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets : true
                },
});











let swiperTestimonial = new Swiper('.testimonial-container', {
    loop : true,
    grbCurson:true,
    spaceBetn:48,
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets : true
    },
    breackpoints:{
        700:{
            sliderPerView:2,
        }
    }
});


var datee = new Date();
var monthe = datee.getMonth()
var todayBar = datee.getDay()
var todayDate = datee.getDate()
var mothName = ['january','february','march','april','may','jun','july','agust','septepbar','nobembar','decembar'];
var today = ['sunday','monday','tuesday','thursday','weadnessday','friday','saterday']

var y = datee.getFullYear();

document.querySelector('.date').innerHTML = `${y} ` + `${todayDate } ` + mothName[monthe] + ` ${today[todayBar]} ` 


window.addEventListener('scroll', removeNave);
 removeNave();

function removeNave(){
        navMenu.classList.remove('showNave');
    };





// activeNave--------------------

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(currenct =>{
        var sectionHeight = currenct.offsetHeight
        var sectionTop = currenct.offsetTop -50;
        var sectionId = currenct.getAttribute('id')
        var ii =  document.querySelector('.nav-menu a[href*=' + sectionId + ']')

        if(scrollY> sectionTop && scrollY<= sectionTop+sectionHeight){
            ii.classList.add('active-link')
        }else{
            ii.classList.remove('active-link')
        }
        // console.log(sectionHeight+' ' + sectionTop+' ' + sectionId)
    })
}

window.addEventListener('scroll',()=>{
    scrollActive()
})



// add nav box shadow----------------
function scrollHeader(){
    var nav = document.querySelector('#header')

    if(this.scrollY>= 80) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)


// topup button--------------

function topup(){
    var scrollupk = document.querySelector('#scrollup')

    if(this.scrollY>= 560) scrollupk.classList.add('scroll-up-hidden');else scrollupk.classList.remove('scroll-up-hidden')
}
window.addEventListener('scroll',topup)





// dark theme ------------------
var themeButton = document.querySelector('#theme-button')

var darkTheme = 'dark-theme'
var iconTheme = 'uil-sun'


var selectedThem= localStorage.getItem('selected-theme')
var selectedIcon= localStorage.getItem('selected-icon')

var getCurrentThem = ()=> document.body.classList.contains(darkTheme) ? 'dark' : 'light';

var getCurrentIcon = ()=> themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';


if(selectedThem){
    document.body.classList[selectedThem === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedThem === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentThem())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// mouse over------------------

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const cursor = document.querySelector(".cursor");

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = "white";
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  cursor.style.top = x;
  cursor.style.left = y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 5 + "px";
    circle.style.top = y - 5 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
