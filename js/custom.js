

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  /*toggle menu/navbar script*/
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });


});


var typed = new Typed(".typing", {
  strings: ['A man of the People', 'Omo Oba of Ijebuland', 'Philanthropist', 'Serial Enterpreneur'],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});