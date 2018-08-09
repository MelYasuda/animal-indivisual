$(document).ready(function(){
	$("h2").click(function(){
  if ($(this).hasClass('panda')) {
      $("p#panda").show();
    } else {
    	$("p#panda").hide();
    }

     if ($(this).hasClass('dog')) {
      $("p#dog").show();
    } else {
    	$("p#dog").hide();
    }

        if ($(this).hasClass('bear')) {
      $("p#bear").show();
    } else {
    	$("p#bear").hide();
    }
  });
});
