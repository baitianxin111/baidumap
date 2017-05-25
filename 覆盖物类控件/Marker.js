(function(){
	function NavigationControl (){
		this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
		this.defaultOffset = new BMap.Size(0,0);
	}
	//继承父类control
	NavigationControl.prototype = new BMap.Control();
	//重写初始化方法
	NavigationControl.prototype.initialize = function(map){
		var containter = document.createElement('div');
		
		var titles = ["上","下","左","右"];
		for (var i =0;i<titles.length;i++) {
			//button是一个对象
			var button = document.createElement('button');
			button.textContent = titles[i];
			console.log(button.textContent);
			containter.appendChild(button);
			
			button.addEventListener('click',function(){
				//获取中心点，获取的值是经纬度 ,将经纬度转换为像素
				var center = map.pointToPixel(map.getCenter());
				switch (this.textContent){
					case "上":
						center.y -=10;
						break;
					case "下":
						center.y +=10;
						break;
					case "左":
						center.x -=10;
						break;
					case "右":
						center.x +=10;
						break;
					 
				}
				//在移动时候转换成经纬度
				var point = map.pixelToPoint(center);
				map.setCenter(point);
				map.panTo(point);
				
			});
		}

		map.getContainer().appendChild(containter);
		return containter;
	}
	window.NavigationControl = NavigationControl;
}());
