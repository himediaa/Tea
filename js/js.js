$('.gnb').on('mouseenter mouseleave',function(event){
  console.log(event.type)
  if( event.type == 'mouseenter') {
    $('.sub-bg').stop().slideDown();
    $('.sub').stop().slideDown();
  }
    else {
      $('.sub-bg').stop().slideUp(200);
      $('.sub').stop().slideUp(200);
    }  
})


const swiper = new Swiper('.main_slider', {
  loop: true,
  autoplay: {
    delay:2000,
    pauseOnMouseEnter:true
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



var num;
$('.tab-menu li:first').addClass('select')
$('.best-body > div:gt(0)').hide(); 

$('.tab-menu li').click(function(e){
  num = $(this).index();

  e.preventDefault();
  $('.tab-menu li').removeClass('select')
  $(this).addClass('select')

  $('.best-body > div').hide();
  $('.best-body > div').eq(num-1).show();
})



var $slider = $('#slider ul');

var imgWidth = $('#slider img').width();
console.log('이미지의 가로너비', imgWidth)

var imgNumber = $('#slider img').length
console.log('이미지의 숫자', imgNumber)

$slider.css({ width : imgWidth*imgNumber})



  //  prev
const left = function(){
  $slider.animate({'margin-left': -imgWidth},1000, function(){ 
    $slider.css({'margin-left': 0});
    $slider.find('li:first-child').insertAfter($slider.find('li:last-child'))
  })
}
  //  next
const right = function(){
  $slider.find('li:last-child').insertBefore($slider.find('li:first-child'))
  $slider.css({'margin-left': -imgWidth});
  $slider.animate({'margin-left':0},1000)
}



const move = new Swiper('.move', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay:1400,
    pauseOnMouseEnter:true
  },

  breakpoints: {
    430: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    830: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    940: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})


  $('.prev').click(left)
  $('.next').click(right)
  $('.play').click( function(){
    intervalId = setInterval(left,2000)
    console.log('인터벌아이디', intervalId)
  })
  $('.stop').click( function(){
    clearInterval(intervalId);
  })

$('a').click(function(e){
  e.preventDefault();
})

