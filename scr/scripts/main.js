const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

const navResp = document.querySelector('.topnav');
let navSmall = false;
menuBtn.addEventListener('click', () => {
  if(!navSmall) {
    navResp.classList.add('responsive');
    navSmall = true;
  } else {
    navResp.classList.remove('responsive');
    navSmall = false;
  }
});

var height = $('.header').height();

$(window).scroll(function() {
  if($(this).scrollTop() > height){
    $('.topnav').addClass('fixed');
  }else{
    $('.topnav').removeClass('fixed');
  }
});

var id = $("#active");
if (id.text().indexOf("Home") !== -1){
  $("#blogs").load("./pages/blog.html #main", function(){ 
    $("#blog").attr("src", "./docs/waterfall.jpg");
    var id = $(".fakeimg");
    if (id.has('img').length){
    $('img').closest("div.fakeimg").addClass('realimg').removeClass('fakeimg');
    }
  })
}

var id = $(".fakeimg");
if (id.has('img').length){
  $('img').closest("div.fakeimg").addClass('realimg').removeClass('fakeimg');
}