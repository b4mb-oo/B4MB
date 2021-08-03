function menuOpen() {
    $(".menuWrap").toggleClass("none");
}

$(document).load(function () {
  $("li#btnMenu").click(function () {
    $(".menuWrap").toggleClass("none");
  });

  $(".menu-inner-container li").click(function () {
    alert("준비 중 입니다.");
  });
});
