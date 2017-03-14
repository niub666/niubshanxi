
// 选项卡
	var btn=$(".yxm-demo1");
	btn.click(function(){
		btn.css({
			background:"#2b5eff",
			color:"#000"
		}).filter(this).css({
			background:"#4280ff",
			color:"#fff"
		})
	  // var index=$(this).index()
	  // $(".f-item").css("z-index","0")
	  // .eq(index).css("z-index","1")
	})