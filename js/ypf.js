$(document).ready(function(){
  
  $("#fullpage").fullpage({
    //sectionsColor:["hotpink", "gold", "royalblue"]
    menu: "#menu", //active스타일이 현재 선택된 섹션의 메뉴와 연동되게 한다
    navigation:true, //섹션의 컨트롤러 여부
    navigationPosiiton:"left", // 섹션의 컨트롤러 위치
    keyboardScrolling:true, //키보드 화살표 사용
    navigationTooltips:["HOME", "ABOUT", "PORTFOLIO", "CONTACT"],
    showActiveTooltip:false
  });

  
  $(window).on("scroll",function(){

    $("#info").text($("html").scrollTop());
    
  });

});


