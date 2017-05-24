(function(){
	
	function LocationControl (){
		if (arguments.length>0) {
		  var  options = arguments[0];
		  //判断是否使用默认参数
		  //arguments[0]传过来时是一个对象,所以可以这样写options.anchor
		  this.defaultAnchor = options.anchor?options.anchor:BMAP_ANCHOR_TOP_RIGHT;
		  this.defaultOffset = options.offset?options.offset:new BMap.Size(0,0);
		  this.icon = options.icon?options.icon:"timf.jpeg";
		} else{
			//2,定义控件的属性（默认位置）
		this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
		this.defaultOffset = new BMap.Size(0,0);
			
		}
		
	}
	LocationControl.prototype = new BMap.Control();
	//3，重写父类控件类的init方法
	LocationControl.prototype.initialize = function(map){
		var containter = document.createElement('div');
		containter.innerHTML =this.icon? "<imgsrc = '"+this.icon+"' />" :"定位";
		map.getContainer().appendChild(containter);
		//鼠标点击获取定位信息
			containter.addEventListener('click',function(){
				this.getCurrentLocation().then(function(point){
					 //设置中心点
					 map.setCenter(point);
					 //将地图的中心点更改为给定的点
					 map.panTo(point);
					 //设制放大倍数
					 map.setZoom(15);
			}).catch(function(error){
				console.log(error);
			});
		}.bind(this));
		return containter;
	}
	LocationControl.prototype.getCurrentLocation = function(){
//		navigator.geolocation.getCurrentPosition(function(position){
//			console.log(position);
//		})
			return new Promise(function(success,error){
				//获取用户当前位置
				var geo = new  BMap.Geolocation();
				geo.getCurrentPosition(function(result){
		//返回用户当前位置。当定位成功时，回调函数的参数为GeolocationResult对象，否则为null
				if (result &&result.point&&success) {
					success(result.point);
				}
				else{
					error("定位错误！");
				}
			 });
			});
	}
	//1,继承控件类
	
	window.BMap.LocationControl = LocationControl ;
	
//	 var LocationControlOptions = {
//		Anchor : BMAP_ANCHOR_TOP_RIGHT ,
//		Offset : new BMap.Size(0,0) ,
//		icon : "timf.jpeg"
//	}
//LocationControlOptions定位控件的可选参数
//Anchor是控件的位置Offset 是控件的偏移量icon控件图标的路径
	 LocationControlOptions = {}
	 //或者是设置空的字面量
//	 window.BMap.LocationControlOptions = {};
	 window.BMap.LocationControlOptions = LocationControlOptions;
}());
