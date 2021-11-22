// Used for burger button animation and opening mobile navbar
const menuBtn = document.querySelector('.menu-btn');
const navResp = document.querySelector('.topnav');
const secResp = document.querySelector('#navbar');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    navResp.classList.add('responsive');
    secResp.classList.add('response');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navResp.classList.remove('responsive');
    secResp.classList.remove('response');
    menuOpen = false;
  }
});

// When scrolling past Navbar this will cause the bar to become fixed to top of screen for easy constant access
var height = $('.header').height();
$(window).scroll(function() {
  if($(this).scrollTop() > height){
    $('.topnav').addClass('fixed');
  }else{
    $('.topnav').removeClass('fixed');
  }
});

// Used for porting main, most recent, blog post from the blog page to the main index page, also updates image path and replaces img parent class "fakeimg" with "realimg".
var id = $("#active");
if (id.text().indexOf("Home") !== -1){
  $("#blogs").load("./pages/blog.html #main", function(){
    var newPath = $("#blog").attr("src").replace("..","."); 
    $("#blog").attr("src", newPath);
    var id = $(".fakeimg");
    if (id.has('img').length){
      $('img').closest("div.fakeimg").removeClass('fakeimg').addClass('realimg');
    }
  })
}

// Just the code replacing img parent class code but for general cause it doesn't play well with homepage
var id = $(".fakeimg");
if (id.has('img').length){
  $('img').closest("div.fakeimg").removeClass('fakeimg').addClass('realimg');
}