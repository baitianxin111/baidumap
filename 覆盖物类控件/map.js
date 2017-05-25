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
		 var coder = new BMap.Geocoder();
		 //对指定的地址进行解析。
//		 如果解析成功，则回调函数的参数为GeocoderResult对象，否则回调函数的参数为nul
		 coder.getPoint( "广州塔",  function(result){
		 	console.log(result);	 
		 });
		 			 		
		 	//对指定的坐标点进行反地址解析
		 	coder.getLocation(event.point,function(result){		 	
		 	console.log(result);	
		 	var message = "<div><img width='20' src='1.PNG'/><p>"+result.address+"</p><a href='http://www.baidu.com'>点击我</a></div>";
		 	//创建信息窗口
		 	var infoWindow = new BMap.InfoWindow(message,{
		 		//设置弹出框的位置
		 		offset:new BMap.Size( 0,-20)
		 	});	
		 	//显示出弹框
		 	self.map.openInfoWindow(infoWindow, event.point);
		 	//当单击位置图标时时关闭地理信息弹框
		 	marker.addEventListener('click',function(){
		 		if (infoWindow.isOpen()) {
		 			self.map.closeInfoWindow();
		 		} else{
		 			self.map.openInfoWindow(infoWindow,event.point);
		 		}
		 	});
		 });
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
