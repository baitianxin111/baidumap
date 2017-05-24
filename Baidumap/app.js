(function(){
	function init(){
		//第二个参数为可选参数，用字面量的方式写
		var map = new  BMap.Map("map",{minZoom:3,maxZoom:17,mapType:BMAP_NORMAL_MAP,enableHighResolution:true});
//		var point = new BMap.Point(113.27,23.11);
//		map.centerAndZoom( point,17);
		//也可以这样写，扩大倍数为3-18
		map.centerAndZoom('珠江新城',10);
		
		var pixel = new BMap.Pixel(113.27,23.11);
		var p = map.pixelToPoint(pixel);
//		 var timer1 = setInterval(function(){
//		 	//设置放大倍数
//		 	map.setZoom(10);
//		 	//设置地图的类型
////		 	map.setMapType(BMAP_NORMAL_MAP);
//		 },3000);
		 //可用鼠标轮滚时候放大缩小
		map.enableScrollWheelZoom();
		//右击事件触发
//		 map.addEventListener('rightclick',function(event){
//		 	console.log(event.point.lng,event.point.lat);
//		 });
//		 //拖拽地图时候触发
//		 map.addEventListener('dragstart',function(event){
//		 	alert(event.point.lng,event.point.lat);
//		 	console.log(event.point.lng,event.point.lat);
//		 });
		 //自定义控件,设置偏移量，2种写法
		 function offset(){
		 	
		 }
		 offset.prototype = new BMap.Size();
		 var navigationConfig = {
		 	type:BMAP_NAVIGATION_CONTROL_LARGE,
		 	//设置偏移量，第一种写法
//		 	offset: new BMap.Size(0,300)
		 };
		 var navigationControl = new BMap.NavigationControl(navigationConfig);
		 
		 setTimeout(function(){
		 	navigationControl.setType(BMAP_NAVIGATION_CONTROL_PAN);
		 },2000);
		 //设置偏移量的第二种方法,BMap.Size
		 var size = new BMap.Size(300,100);
		 
		navigationControl.setOffset(size);
		map.addControl(navigationControl);
		//拖拽时导航隐藏拖拽完显示
		map.addEventListener('dragging',function(){
			navigationControl.hide();
		});
		map.addEventListener('dragend',function(){
			navigationControl.show();
		});
		//x 正数 向右，负数向左，
		//y 正数 向下，负数向上
		//设置导航类型
//		navigationControl.setType(BMAP_NAVIGATION_CONTROL_SMALL);
//设置导航在左下角
//		navigationControl.setAnchor(BMAP_ANCHOR_BOTTOM_LEFT);
		//定位功能的类
		var geo = new BMap.GeolocationControl({
			anchor :BMAP_ANCHOR_BOTTOM_LEFT,
			offset : new BMap.Size(200,0),
			localtionIcon : new BMap.Icon("篮球.jpg", new BMap.Size(200,100))
		});
		map.addControl(geo);
		console.log(geo);
		//创建切换地图类型的 ,ScaleControl比例尺
		var mapTypeControl = new BMap.MapTypeControl();
		//自定义控件
		 var loc = new BMap.LocationControl();
		 map.addControl(loc);
	}
	init();
}());
