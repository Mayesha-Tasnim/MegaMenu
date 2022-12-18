let cross = document.querySelector(".res-side-bar .cross");
cross.addEventListener("click", function () {
  let hiddenSec = document.querySelector(".res-side-bar");
  let shadow2 = document.querySelector(".shadow2");
  hiddenSec.classList.remove("active");
  shadow2.classList.remove("overlay");
});

let menu = document.querySelector(".burger-menu a");
menu.addEventListener("click", function () {
  let showSec = document.querySelector(".res-side-bar");
  let shadow2 = document.querySelector(".shadow2");
  showSec.classList.add("active");
  shadow2.classList.add("overlay");
});

let item1 = document.querySelector(".item1");
item1.addEventListener("click", function () {
  let showsec = document.querySelector(".res-sub-menu1");
  let closeSubSec = document.querySelector(".close-sub-menu");
  showsec.classList.add("sub-menu1-active");
  closeSubSec.style.visibility = "visible";
});
let closeSubSec1 = document.querySelector(".close-sub-menu");
closeSubSec1.addEventListener("click", function () {
  let showsec = document.querySelector(".res-sub-menu");
  showsec.classList.remove("sub-menu1-active");
  closeSubSec1.style.visibility = "hidden";
});
let item2 = document.querySelector(".item2");
item2.addEventListener("click", function () {
  let showsec = document.querySelector(".res-sub-menu2");
  let closeSubSec = document.querySelector(".close-sub-menu");
  showsec.classList.add("sub-menu1-active");
  closeSubSec.style.visibility = "visible";
});
let closeSubSec2 = document.querySelector(".close-sub-menu");
closeSubSec2.addEventListener("click", function () {
  let showsec = document.querySelector(".res-sub-menu2");
  showsec.classList.remove("sub-menu1-active");
  closeSubSec2.style.visibility = "hidden";
});
let item3 = document.querySelector(".item3");
item3.addEventListener("click", function () {
  let showsec = document.querySelector(".res-sub-menu3");
  let closeSubSec = document.querySelector(".close-sub-menu");
  showsec.classList.add("sub-menu1-active");
  closeSubSec.style.visibility = "visible";
});
let closeSubSec3 = document.querySelector(".close-sub-menu");
closeSubSec3.addEventListener("click", function () {
  let showsec = document.querySelector(".res-sub-menu3");
  showsec.classList.remove("sub-menu1-active");
  closeSubSec3.style.visibility = "hidden";
});
let item4 = document.querySelector(".item4");
item4.addEventListener("click", function () {
  let showsec = document.querySelector(".res-sub-menu4");
  let closeSubSec = document.querySelector(".close-sub-menu");
  showsec.classList.add("sub-menu1-active");
  closeSubSec.style.visibility = "visible";
});
let closeSubSec4 = document.querySelector(".close-sub-menu");
closeSubSec4.addEventListener("click", function () {
  let showsec = document.querySelector(".res-sub-menu4");
  showsec.classList.remove("sub-menu1-active");
  closeSubSec4.style.visibility = "hidden";
});

////////////////////////////////////////////////////////////////////
let show1 = document.querySelectorAll(".sub-menu1-item-head1")[0];
show1.addEventListener("click", function () {
  let showsec1 = document.querySelectorAll(".sub-menu-item-sub-items1")[0];
  let iconDown = document.querySelectorAll(".sub-menu1-item-head1 i")[0];
  let showsec2 = document.querySelectorAll(".sub-menu-item-sub-items2")[0];
  let showsec3 = document.querySelectorAll(".sub-menu-item-sub-items3")[0];
  showsec1.classList.toggle("show");
  iconDown.classList.toggle("point-down");
  showsec2.classList.add("hide");
  showsec3.classList.add("hide");
});
let show2 = document.querySelectorAll(".sub-menu1-item-head2")[0];
show2.addEventListener("click", function () {
  let showsec1 = document.querySelectorAll(".sub-menu-item-sub-items1")[0];
  let iconDown = document.querySelectorAll(".sub-menu1-item-head2 i")[0];
  let showsec2 = document.querySelectorAll(".sub-menu-item-sub-items2")[0];
  let showsec3 = document.querySelectorAll(".sub-menu-item-sub-items3")[0];
  showsec2.classList.toggle("show");
  iconDown.classList.toggle("point-down");
  showsec1.classList.add("hide");
  showsec3.classList.add("hide");
});
let show3 = document.querySelectorAll(".sub-menu1-item-head3")[0];
show3.addEventListener("click", function () {
  let showsec1 = document.querySelectorAll(".sub-menu-item-sub-items1")[0];
  let iconDown = document.querySelectorAll(".sub-menu1-item-head3 i")[0];
  let showsec2 = document.querySelectorAll(".sub-menu-item-sub-items2")[0];
  let showsec3 = document.querySelectorAll(".sub-menu-item-sub-items3")[0];
  showsec3.classList.toggle("show");
  iconDown.classList.toggle("point-down");
  showsec2.classList.add("hide");
  showsec1.classList.add("hide");
});
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
let show11 = document.querySelectorAll(".sub-menu1-item-head1")[1];
show11.addEventListener("click", function () {
  let showsec1 = document.querySelectorAll(".sub-menu-item-sub-items1")[1];
  let iconDown = document.querySelectorAll(".sub-menu1-item-head1 i")[1];
  let showsec2 = document.querySelectorAll(".sub-menu-item-sub-items2")[1];
  let showsec3 = document.querySelectorAll(".sub-menu-item-sub-items3")[1];
  showsec1.classList.toggle("show");
  iconDown.classList.toggle("point-down");
  showsec2.classList.add("hide");
  showsec3.classList.add("hide");
});
let show22 = document.querySelectorAll(".sub-menu1-item-head2")[1];
show22.addEventListener("click", function () {
  let showsec1 = document.querySelectorAll(".sub-menu-item-sub-items1")[1];
  let iconDown = document.querySelectorAll(".sub-menu1-item-head2 i")[1];
  let showsec2 = document.querySelectorAll(".sub-menu-item-sub-items2")[1];
  let showsec3 = document.querySelectorAll(".sub-menu-item-sub-items3")[1];
  showsec2.classList.toggle("show");
  iconDown.classList.toggle("point-down");
  showsec1.classList.add("hide");
  showsec3.classList.add("hide");
});
let show33 = document.querySelectorAll(".sub-menu1-item-head3")[1];
show33.addEventListener("click", function () {
  let showsec1 = document.querySelectorAll(".sub-menu-item-sub-items1")[1];
  let iconDown = document.querySelectorAll(".sub-menu1-item-head3 i")[1];
  let showsec2 = document.querySelectorAll(".sub-menu-item-sub-items2")[1];
  let showsec3 = document.querySelectorAll(".sub-menu-item-sub-items3")[1];
  showsec3.classList.toggle("show");
  iconDown.classList.toggle("point-down");
  showsec2.classList.add("hide");
  showsec1.classList.add("hide");
});
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
let show111 = document.querySelectorAll(".sub-menu1-item-head1")[2];
show111.addEventListener("click", function () {
  let showsec1 = document.querySelectorAll(".sub-menu-item-sub-items1")[2];
  let iconDown = document.querySelectorAll(".sub-menu1-item-head1 i")[2];
  let showsec2 = document.querySelectorAll(".sub-menu-item-sub-items2")[2];
  let showsec3 = document.querySelectorAll(".sub-menu-item-sub-items3")[2];
  showsec1.classList.toggle("show");
  iconDown.classList.toggle("point-down");
  showsec2.classList.add("hide");
  showsec3.classList.add("hide");
});
let show222 = document.querySelectorAll(".sub-menu1-item-head2")[2];
show222.addEventListener("click", function () {
  let showsec1 = document.querySelectorAll(".sub-menu-item-sub-items1")[2];
  let iconDown = document.querySelectorAll(".sub-menu1-item-head2 i")[2];
  let showsec2 = document.querySelectorAll(".sub-menu-item-sub-items2")[2];
  let showsec3 = document.querySelectorAll(".sub-menu-item-sub-items3")[2];
  showsec2.classList.toggle("show");
  iconDown.classList.toggle("point-down");
  showsec1.classList.add("hide");
  showsec3.classList.add("hide");
});
let show333 = document.querySelectorAll(".sub-menu1-item-head3")[2];
show333.addEventListener("click", function () {
  let showsec1 = document.querySelectorAll(".sub-menu-item-sub-items1")[2];
  let iconDown = document.querySelectorAll(".sub-menu1-item-head3 i")[2];
  let showsec2 = document.querySelectorAll(".sub-menu-item-sub-items2")[2];
  let showsec3 = document.querySelectorAll(".sub-menu-item-sub-items3")[2];
  showsec3.classList.toggle("show");
  iconDown.classList.toggle("point-down");
  showsec2.classList.add("hide");
  showsec1.classList.add("hide");
});
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
let show1111 = document.querySelectorAll(".sub-menu1-item-head1")[3];
show1111.addEventListener("click", function () {
  let showsec1 = document.querySelectorAll(".sub-menu-item-sub-items1")[3];
  let iconDown = document.querySelectorAll(".sub-menu1-item-head1 i")[3];
  let showsec2 = document.querySelectorAll(".sub-menu-item-sub-items2")[3];
  let showsec3 = document.querySelectorAll(".sub-menu-item-sub-items3")[3];
  showsec1.classList.toggle("show");
  iconDown.classList.toggle("point-down");
  showsec2.classList.add("hide");
  showsec3.classList.add("hide");
});
let show2222 = document.querySelectorAll(".sub-menu1-item-head2")[3];
show2222.addEventListener("click", function () {
  let showsec1 = document.querySelectorAll(".sub-menu-item-sub-items1")[3];
  let iconDown = document.querySelectorAll(".sub-menu1-item-head2 i")[3];
  let showsec2 = document.querySelectorAll(".sub-menu-item-sub-items2")[3];
  let showsec3 = document.querySelectorAll(".sub-menu-item-sub-items3")[3];
  showsec2.classList.toggle("show");
  iconDown.classList.toggle("point-down");
  showsec1.classList.add("hide");
  showsec3.classList.add("hide");
});
let show3333 = document.querySelectorAll(".sub-menu1-item-head3")[3];
show3333.addEventListener("click", function () {
  let showsec1 = document.querySelectorAll(".sub-menu-item-sub-items1")[3];
  let iconDown = document.querySelectorAll(".sub-menu1-item-head3 i")[3];
  let showsec2 = document.querySelectorAll(".sub-menu-item-sub-items2")[3];
  let showsec3 = document.querySelectorAll(".sub-menu-item-sub-items3")[3];
  showsec3.classList.toggle("show");
  iconDown.classList.toggle("point-down");
  showsec2.classList.add("hide");
  showsec1.classList.add("hide");
});
////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
  $(".li1").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".li1 .shop").stop().slideDown(1000);
      $(".li1 .box").stop().addClass("animated");
      $(".shadow").addClass("overlay").stop().fadeIn(2000);
      $(".li1 .box").stop().fadeIn(2000);
      $(".li1 i").stop().addClass("rotate");
    } else {
      $(".li1 .shop").stop().hide();
      $(".shadow").removeClass("overlay");
      $(".li1 i").removeClass("rotate");
    }
  });
});

$(document).ready(function () {
  $(".li2").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".li2 .shop").stop().slideDown(1000);
      $(".li2 .box").addClass("animated");
      $(".shadow").addClass("overlay").stop().fadeIn(2000);
      $(".li2 i").stop().addClass("rotate");
      $(".li2 .box").slideUp(3000).stop();
    } else {
      $(".li2 .shop").stop().hide();
      $(".shadow").removeClass("overlay");
      $(".li2 i").removeClass("rotate");
    }
  });
});

$(document).ready(function () {
  $(".li3").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".li3 .shop").stop().slideDown(1000);
      $(".li3 .box").addClass("animated");
      $(".shadow").addClass("overlay").stop().fadeIn(2000);
      $(".li3 i").stop().addClass("rotate");
      $(".li3 .box").slideUp(3000).stop();
    } else {
      $(".li3 .shop").stop().hide();
      $(".shadow").removeClass("overlay");
      $(".li3 i").removeClass("rotate");
    }
  });
});

$(document).ready(function () {
  $(".li4").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".li4 .shop").stop().slideDown(1000);
      $(".li4 .box").addClass("animated");
      $(".shadow").addClass("overlay").stop().fadeIn(2000);
      $(".li4 i").stop().addClass("rotate");
      $(".li4 .box").slideUp(3000).stop();
    } else {
      $(".li4 .shop").stop().hide();
      $(".shadow").removeClass("overlay");
      $(".li4 i").removeClass("rotate");
    }
  });
});

$(document).ready(function () {
  $(".li5").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".li5 .shop").stop().slideDown(1000);
      $(".li5 .box").addClass("animated");
      $(".shadow").addClass("overlay").stop().fadeIn(2000);
      $(".li5 i").stop().addClass("rotate");
      $(".li5 .box").slideUp(3000).stop();
    } else {
      $(".li5 .shop").stop().hide();
      $(".shadow").removeClass("overlay");
      $(".li5 i").removeClass("rotate");
    }
  });
});
