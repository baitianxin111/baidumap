(function(){
	function init(){
		var map = new Map("map");
//	map.addControl(new NavigationControl());
	var markerControl = document.querySelector('.addMarker');
//	map.enableScrollWheelZoom();
	markerControl.onclick = function(){
		if (this.textContent == "开启双击添加Marker") {
			map.startAddMarker();
			this.textContent ="关闭";
		} else{
			map.stopAddMarker();
			this.textContent ="开启双击添加Marker";
		}
			}
	}
	init();
	function test(){
		var map = new BMap.Map("map");
		map.centerAndZoom("广州");
		//创建覆盖物类对象
		//23.1123809784,113.3309751406
//		var point = new BMap.Point(113.3309751406,23.1123809784);
//		var marker = new BMap.Marker(point);
//		map.addOverlay(marker);
		map.enableScrollWheelZoom();
		map.addEventListener('click',function(event){
		 var point = new BMap.Point(event.clientX,event.clientY);
		 console.log(event);
		var marker = new BMap.Marker(point);
		console.log(marker);
		map.addOverlay(marker);
		});
		
	}
//	test();
}());
