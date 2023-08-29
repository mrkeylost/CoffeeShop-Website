// Nikolaus Chandra - 2502011404
// Weiner - 2502011455

// Registration Validation  -- Registration Page

function validateCustomer(){
  var fullName = document.getElementById('full-name');
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var address = document.getElementById('address');
  var termcondition = document.getElementById('term');

  if(fullName.value.length < 5){
    alert("username error");
  } else if(!email.value.endsWith("@gmail.com")){
    alert("email format invalid");
  } else if(password.value.length < 8){
    alert("Password invalid");
  } else if(address.value.length < 1){
    alert("Your address not eligible");
  } else if(!termcondition.checked){
    alert("Agree to the term and condition");
  } else{
    alert("Registration Success");
  }
}

// Image slider -- Home Page & Event Page

const changes = document.querySelectorAll('[data-carousel-button]');

changes.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const showimage = button.closest('[data-carousel]').querySelector('[data-slides]');
        const currimage = showimage.querySelector('[data-active]');

        let newIndex = [...showimage.children].indexOf(currimage) + offset;

        if(newIndex < 0){
          newIndex = showimage.children.length - 1;
        }

        if(newIndex >= showimage.children.length){
          newIndex = 0;
        }

        showimage.children[newIndex].dataset.active = true;
        delete currimage.dataset.active;
    })
})

// Sticky navbar  - scroll up -- All Page

const content = document.body;
let temp = 0;

window.addEventListener('scroll', () => {
  const curr = window.pageYOffset;

  if(curr <= 0){
    content.classList.remove('scroll-up');
  }

  if(curr > temp && !content.classList.contains('scroll-down')){
    content.classList.remove('scroll-up');
    content.classList.add('scroll-down');
  }

  if(curr < temp && content.classList.contains('scroll-down')){
    content.classList.remove('scroll-down');
    content.classList.add('scroll-up');
  }

  temp = curr;
})

// Responsive Hamburger  << 1120px -- All Page

const bar = document.getElementsByClassName('nav-icons')[0];
const nav = document.getElementsByClassName('nav-menu')[0];
const carousel_prev = document.getElementsByClassName('carousel-button')[0]; // prev arrow
const carousel_next = document.getElementsByClassName('carousel-button')[1]; // next arrow

bar.addEventListener('click', () => {
  nav.classList.toggle('active');
  carousel_prev.classList.toggle('hid');
  carousel_next.classList.toggle('hide');
})

const close = document.getElementsByClassName('close')[0]

close.addEventListener('click', () => {
    nav.classList.remove('active');
    carousel_prev.classList.toggle('hid');
    carousel_next.classList.toggle('hide');
})

// Show Hide Detail -- Event Page

// event 1
document.getElementById('event-btn1').addEventListener('click', function(){
  var col1 = document.getElementById('detail-1');
  if(col1.style.display == "block"){
    col1.style.display = "none";
  } else{
    col1.style.display = "block";
  }
});

// event 2
document.getElementById('event-btn2').addEventListener('click', function(){
  var col2 = document.getElementById('detail-2');
  if(col2.style.display == "block"){
    col2.style.display = "none";
  } else{
    col2.style.display = "block";
  }
});

// event 3
document.getElementById('event-btn3').addEventListener('click', function(){
  var col3 = document.getElementById('detail-3');
  if(col3.style.display == "block"){
    col3.style.display = "none";
  } else{
    col3.style.display = "block";
  }
});

// event 4
document.getElementById('event-btn4').addEventListener('click', function(){
  var col4 = document.getElementById('detail-4');
  if(col4.style.display == "block"){
    col4.style.display = "none";
  } else{
    col4.style.display = "block";
  }
});

// event 5
document.getElementById('event-btn5').addEventListener('click', function(){
  var col5 = document.getElementById('detail-5');
  if(col5.style.display == "block"){
    col5.style.display = "none";
  } else{
    col5.style.display = "block";
  }
});

// event 6
document.getElementById('event-btn6').addEventListener('click', function(){
  var col6 = document.getElementById('detail-6');
  if(col6.style.display == "block"){
    col6.style.display = "none";
  } else{
    col6.style.display = "block";
  }
});