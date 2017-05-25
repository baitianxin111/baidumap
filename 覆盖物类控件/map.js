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
	//私有的方法
	
	Map.prototype.startAddMarker = function(){
		//把一个函数当做一个属性，当执行这个属性，就是指行这个函数
		this.map.disableDoubleClickZoom();
		var self = this;
		this.addMarker =function addMarker(event){
		 
		var marker = new BMap.Marker(event.point);
		 self.map.addOverlay(marker);
	}
		this.map.addEventListener('dblclick', this.addMarker)
	};
	Map.prototype.stopAddMarker = function(){
		this.map.enableDoubleClickZoom();
		if (this.addMarker) {
			this.map.removeEventListener("dblclick",this.addMarker)
		}
	};
	window.Map = Map;
}());
