$(".faq-head").on("click", function () {
  //タイトル要素をクリックしたら
  var findElm = $(this).next(".faq-body"); //直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle(); //アコーディオンの上下動作
  jQuery(this).children(".faq-icon").toggleClass("close");
  
});
