
$("#slibarIcon").click(function(){
	if($("#sidebar").hasClass("sidebarMoveToRight")){
		//根据内容高度设置侧边栏高度
		// var clientHeight = document.documentElement.clientHeight;
		// var bodyHeight = $("body").height();
		// if(clientHeight > bodyHeight){
		// 	$("#sidebar").height(clientHeight);
		// }else{
		// 	$("#sidebar").height(bodyHeight);
		// }

		$("#content").removeClass("contentMoveToRight");
		$("#sidebar").removeClass("sidebarMoveToRight"); 
		$("#content").addClass("contentMoveToLeft");
		
		
		$("#sidebar").addClass("sidebarMoveToLeft");
		$("#sidebar").show(); 

		$("#slibarIcon").removeClass("glyphicon glyphicon-menu-hamburger"); 
		$("#slibarIcon").addClass("glyphicon glyphicon-remove"); 
		//获得焦点
		$("#sidebar").focus();
	}else{
		$("#content").removeClass("contentMoveToLeft");
		$("#sidebar").removeClass("sidebarMoveToLeft"); 
		$("#content").addClass("contentMoveToRight");
		$("#sidebar").addClass("sidebarMoveToRight"); 

		$("#slibarIcon").removeClass("glyphicon glyphicon-remove"); 
		$("#slibarIcon").addClass("glyphicon glyphicon-menu-hamburger"); 
		// $("#sidebar").hide(); 
	}
});

$("#sidebar").blur(function(){
	$("#content").removeClass("contentMoveToLeft");
	$("#sidebar").removeClass("sidebarMoveToLeft"); 
	$("#content").addClass("contentMoveToRight");
	$("#sidebar").addClass("sidebarMoveToRight"); 

	$("#slibarIcon").removeClass("glyphicon glyphicon-remove"); 
	$("#slibarIcon").addClass("glyphicon glyphicon-menu-hamburger"); 
});

