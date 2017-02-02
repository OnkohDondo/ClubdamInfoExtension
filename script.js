// 読み込みがいつ終わるかわからないので、
// 表が表示されるまで繰り返す
var doFillColor = setInterval("fillColor()", 500); 

function fillColor(){
	var cnt=0;
	$('.table_chart').each(function(i){
		cnt++;
		toElem($(this));
	});
	if(cnt>0){
		console.log("done");
	 	clearInterval(doFillColor);
	}
}

function toElem(elem){
	// elem = $(this);
	val = parseInt(elem.text());
	if(val==100){
		elem.addClass("total_100"); // for DX
		elem.addClass("true_100"); // for DX-G
	}else if(val>=99){
		elem.addClass("total_over99");
	}else if(val>=98){
		elem.addClass("total_over98");
	}else if(val>=95){
		elem.addClass("total_over95");
	}else if(val>=90){
		elem.addClass("total_over90");
	}else if(val>=80){
		elem.addClass("total_over80");
	}
}
