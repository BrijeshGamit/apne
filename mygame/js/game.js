$(document).ready(function(){
			var div_no = 12;
			var dir = randno(1,5);
			for(var i=1;i<=div_no;i++)
			{
				
				var div = document.createElement("div");
				$(div).addClass("widget");
				$(div).css("top",randno(0,$(window).height()-100)+"px");
				$(div).css("left",randno(0,$(window).width()-100)+"px");
				var img = document.createElement("img");
					$(img).attr("src","img/"+dir+"/"+i+".jpg");
					$(div).append(img);
					$("#canvas").append(div);	
			}
			
			$('.widget').draggable();
		});

		function randno(min,max)
		{
    		return Math.floor(Math.random()*(max-min+1)+min);
		}

