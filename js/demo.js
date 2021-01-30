$(function () {
    $('.imgbody .demojs').isotope({
      itemSelector: 'a'
    })
    $('.discover-img ul li a').click(function (e) {
      e.preventDefault();
      console.log(this);
      var danhmuc = $(this).data('danhmucanh');
      var ten = $(this).text();
      if (danhmuc === 'all') {
        $(".imgbody .demojs").isotope({ filter: "*" });
      } else {
        danhmuc = "." + danhmuc;
        $('.imgbody .demojs').isotope({ filter: danhmuc });
      }
    });
  });
