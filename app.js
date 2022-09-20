let navExpand = 0;

const navToggle = () => {
  if (!navExpand) {
    //jquary
    $(".main__div").css("width", "100%");
    $("li").css("display", "block");
    navExpand = 1;
  } else {
    $(".main__div").css("width", "0%");
    $("li").css("display", "none");
    navExpand = 0;
  }
};
