$(function(){
	$(".shop").hover(function(){
		$("#tan").toggleClass("active");
	});
	$("#left>ul>li").mouseenter(function(){
	   let index = $(this).index();
	   $(this).css("background","white");
	   $(this).find(".left-2-1").css("color","black");  
	   $($(".left-2-1")[index]).siblings(".game1").css("display","block");
	});
	$("#left>ul>li").mouseout(function(){
	   let index = $(this).index();
	   $(this).css("background","#f55656");
	   $(this).find(".left-2-1").css("color","white");
	    $($(".left-2-1")[index]).siblings(".game1").css("display","none");
	});

})
