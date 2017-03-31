//避免DOM元素未加载导致监听无法正常工作
$("body").delegate("#slibarIcon", "click", function () {  
	if($("#sidebar").hasClass("sidebarMoveToRight")){
		$("#content").removeClass("contentMoveToRight");
		$("#sidebar").removeClass("sidebarMoveToRight"); 
		$("#content").addClass("contentMoveToLeft");
		$("#sidebar").show(); 
		$("#sidebar").addClass("sidebarMoveToLeft");

		$("#slibarIcon").removeClass("glyphicon glyphicon-menu-hamburger"); 
		$("#slibarIcon").addClass("glyphicon glyphicon-remove"); 
	}else{
		$("#content").removeClass("contentMoveToLeft");
		$("#sidebar").removeClass("sidebarMoveToLeft"); 
		$("#content").addClass("contentMoveToRight");
		$("#sidebar").addClass("sidebarMoveToRight"); 

		$("#slibarIcon").removeClass("glyphicon glyphicon-remove"); 
		$("#slibarIcon").addClass("glyphicon glyphicon-menu-hamburger"); 
		
	}
	
})