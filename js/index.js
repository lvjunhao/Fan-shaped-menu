$(function(){
	var inow=true;
	var Timers=null;
	var inum=0;
	
	var lengths=$('li').not('.Bg').length;
	var degs=360/lengths;
	var degsCir=Math.abs(degs-90);
	$('.ball').on('mouseenter',function (e) {
		e.stopPropagation();
		$('.pop').fadeIn();
		$('.out-enter').css('z-index',1)
		$(this).addClass('active');
		setTimeout(function () {
			$('.ball').fadeOut();
			$('.box').fadeIn();
			$('.cirOut').addClass('active');
		},1000);
	});
	$('.box').on('mouseleave',function (e) {
		e.stopPropagation();
		$(this).fadeOut(800,function () {
			$('.cirOut').removeClass('active');
			
		});
		$('.pop').fadeOut();
		$('.out-enter').css('z-index',-1)
		$('.ball').fadeIn().removeClass('active');
	});
	$('.cirOut').on('mouseover','li',function () {
		$(this).addClass('bg').siblings().removeClass('bg');
	})
	//移动的背景
	// $('.Bg').css({'webkitTransform':'rotateZ('+360+'deg) skew('+degsCir+'deg)'});
	//每一个li绑定事件
	$('li').each(function(index, element) {
		$(element).find('a').children('span').css({ 'webkitTransform': 'rotateZ(-' + index * degs + 'deg)' })
		$(element).css({'webkitTransform':'rotateZ('+index*degs+'deg) skew('+degsCir+'deg)'});//每个li的旋转角度    //li下的a标签反向旋转到垂直位置
		$(element).find('a').css({'webkitTransform':'skew(-'+degsCir+'deg) rotateZ(-'+(90-(90-degsCir)/2)+'deg)'});       
        // $(element).on('mouseover',function(){//每一个li绑定事件
		// 	console.log(index)
		// 	$('.Bg').css({'webkitTransition':'0s'})//移动的背景清除动画事件
		// 	$('.Bg').addClass('hover');
		// 	if(inum==0&&index==(lengths-1)){ //如果是从第一个li移到最个后一li
		// 		console.log(degs+',,,,'+degsCir)
		// 		$('.Bg').css({'webkitTransform':'rotateZ('+360+'deg) skew('+degsCir+'deg)'});
		// 	}
		// 	if(inum==(lengths-1)&&index==0){//如果是从最后一个li移到第一个li
		// 		console.log(degs+',,,,'+degsCir)
		// 		$('.Bg').css({'webkitTransform':'rotateZ(-'+degs+'deg) skew('+degsCir+'deg)'});
		// 	}
		// 	setTimeout(function(){//延迟10毫秒执行
		// 		$('.Bg').css({'webkitTransform':'rotateZ('+index*degs+'deg) skew('+degsCir+'deg)','webkitTransition':'0.3s'});
		// 	},10)
			
		// 	inum=index;
					
		// })
        // $(element).on('mouseout',function(){
		// 	  $('.Bg').removeClass('hover');
		// })
		
    });
 
	function circleshow(){
		$('.circle').addClass('active');
		$('.circle').on('webkitTransitionEnd',delayshow);
		function delayshow(){
			$('.circle').unon('webkitTransitionEnd',delayshow);
			$('.cirOut').css({'webkitTransform':'scale(1)'});
		}	
	}
})