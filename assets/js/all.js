"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
$(document).ready(function () {
  $('.p1').click(function (event) {
    $('.good1').removeClass('d-none');
    $('.good1').parent().find('.good2').addClass('d-none');
    $('.good1').parent().find('.good3').addClass('d-none');
  });
  $('.p2').click(function (event) {
    $('.good2').removeClass('d-none');
    $('.good2').parent().find('.good1').addClass('d-none');
    $('.good2').parent().find('.good3').addClass('d-none');
  });
  $('.p3').click(function (event) {
    $('.good3').removeClass('d-none');
    $('.good3').parent().find('.good1').addClass('d-none');
    $('.good3').parent().find('.good2').addClass('d-none');
  });
}); // iphone swiper

var swiper = new Swiper(".iphoneSwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  // autoplay: {
  //   delay:3000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination"
  },
  mousewheel: true,
  keyboard: true
}); //laptop swiper

var swiper = new Swiper(".laptopSwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  thumbs: {
    swiper: swiper
  }
}); // iphone artCraftSwiper

var swiper = new Swiper(".artCraftSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
//# sourceMappingURL=all.js.map
