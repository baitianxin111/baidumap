(function(){
	function Map (id){
		this.zoom = 15;
		this.init(id);
	}
	Map.prototype.init = function(id){
		this.map = new BMap.Map(id);

		this.getCurrentPosition().then(function(point){
			this.map.centerAndZoom(point,this.zoom);
		}.bind(this));
	}
	Map.prototype.getCurrentPosition = function(){
		return new Promise (function(success){
			var geo = new BMap.Geolocation();
			geo.getCurrentPosition(function(result){
				if (result&&result.point) {
					success(result.point);
				}  
			});
		});
	}
	Map.prototype.addControl = function(control){
		this.map.addControl(control);
	}
	//监听地图的2个事件，单机双击事件，
	//单机获得起始点，双击判断是否获得单机点
    var dis =	map.getDistance( Point1,  Point2)()
	window.Map = Map;
}());
