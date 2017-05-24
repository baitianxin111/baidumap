(function(){
	function moveControl (){
		if(arguments.length >0){
		 var options = arguments[0];
		this.defaultAnchor = options.anchor? options.anchor:BMAP_ANCHOR_TOP_LEFT
		this.defaultOffset = options.offset ?options.offset :new BMap.Size(0,0);
		this.defaultType = options.type ?options.type :BMAP_NAVIGATION_CONTROL_LARGE;
		this.defaultIcon = options.icon?options.icon:"timf.jpg";
		}else{
		this.defaultAnchor =  BMAP_ANCHOR_TOP_LEFT
		this.defaultOffset =  new BMap.Size(0,0);
		this.defaultType =  BMAP_NAVIGATION_CONTROL_LARGE;
		this.defaultIcon = "timf.jpg";
		}
		 
	}
	moveControl.prototype = new BMap.Control();
	moveControl.prototype.initialize = function(map){
		this.containter = document.createElement('div');
		//左边
		this.left = document.createElement('span');
		this.left.innerHTML ="<span> 左</span>";
		//右边	 
		 
		this.right = document.createElement('span');
		this.right.innerHTML ="<span> 右</span>";
		
		 //上边
		this.top = document.createElement('span');
		this.top.innerHTML ="<span> 上</span>";
		//下边
		this.down = document.createElement('span');
		this.down.innerHTML ="<span> 下</span>";
		
		this.containter.innerHTML = "定位:";
		this.containter.appendChild(this.left);
		this.containter.appendChild(this.right);
		this.containter.appendChild(this.top);
		this.containter.appendChild(this.down);
		map.getContainer().appendChild(this.containter);
		//x 正数 向右，负数向左，
		//y 正数 向下，负数向上
		this.left.addEventListener('click',function(){
			map.panBy( 100,0);
		});
		this.right.addEventListener('click',function(){
			map.panBy( -110,0);
		});
		this.top.addEventListener('click',function(){
			map.panBy( 0,100);
		});
		this.down.addEventListener('click',function(){
			map.panBy( 0,-100);
		});
		return this.containter;
		 
	}
	 
	moveControlOptions = {};
	window.BMap.moveControlOptions = moveControlOptions;
	window.BMap.moveControl = moveControl;
}());