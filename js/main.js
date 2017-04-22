//分类内容全局变量
var categoriesDatas;

//设置全局分类对象指
function setCategoriesDatas(categoriesDatasStr){
	if(!categoriesDatas){
		categoriesDatas = JSON.parse(categoriesDatasStr);
		console.info(categoriesDatas);
	}
}
//根据分类名称获得具体内容
function getDataObj(categorie){
	if(!categoriesDatas){
		return categoriesDatas[categorie];
	}
	return [];
}

$(function(){
	//个人标签遍历效果
	var personalLablesB = $("#personalLabel").children();
	var personalLablesBLength = personalLablesB.length;
	var personalLablesBIndex = 0
	$(personalLablesB[personalLablesBIndex]).removeClass("hiddenB");
	$(personalLablesB[personalLablesBIndex]).addClass("showB");
	setInterval(function(){
		$(personalLablesB[personalLablesBIndex]).removeClass("showB");
        $(personalLablesB[personalLablesBIndex]).addClass("hiddenB");
        personalLablesBIndex = personalLablesBIndex < (personalLablesBLength - 1) ? ++personalLablesBIndex: 0;
        $(personalLablesB[personalLablesBIndex]).removeClass("hiddenB");
        $(personalLablesB[personalLablesBIndex]).addClass("showB");
    }, 2000);

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


	var toggle = document.querySelector('#slibarIcon');
    var sidebar = document.querySelector('#sidebar');
    document.addEventListener('click', function(e) {
      var target = e.target;

      if (target === toggle) {
        
        e.preventDefault();
      } else if (!$("#sidebar").hasClass("sidebarMoveToRight") && !sidebar.contains(target)) {
        $("#content").removeClass("contentMoveToLeft");
		$("#sidebar").removeClass("sidebarMoveToLeft"); 
		$("#content").addClass("contentMoveToRight");
		$("#sidebar").addClass("sidebarMoveToRight"); 

		$("#slibarIcon").removeClass("glyphicon glyphicon-remove"); 
		$("#slibarIcon").addClass("glyphicon glyphicon-menu-hamburger");
      }
    }, false);  


	function isMobileWeb() {  
	    var sUserAgent = navigator.userAgent.toLowerCase();  
	    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";  
	    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";  
	    var bIsMidp = sUserAgent.match(/midp/i) == "midp";  
	    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";  
	    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";  
	    var bIsAndroid = sUserAgent.match(/android/i) == "android";  
	    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";  
	    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";  
	    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM){  
	        return true;  
	    }
	    return false;  
	}

})






