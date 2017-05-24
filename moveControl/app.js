(function(){
	var map = new BMap.Map("map");
	map.centerAndZoom("北京",15);
	var move = new BMap.moveControl();
	map.addControl(move);
 
}());
