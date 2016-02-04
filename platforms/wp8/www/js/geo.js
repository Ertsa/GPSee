
            window.onload = function(){
                   //document.addEventListener("deviceready", init, false);
                //init();
            }

            function init()
            {
                navigator.geolocation.getCurrentPosition(positionSuccess, positionError,{maximumAge : 300000, timeout:1000,
				enableHighAccuracy:true});
            }

            function positionSuccess(position){
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;

                document.getElementById("mlat").innerHTML = latitude;
                document.getElementById("mlng").innerHTML = longitude;
				
				var elem1 = document.getElementById("lat");
				elem1.value = latitude;
				var elem2 = document.getElementById("lng");
				elem2.value = longitude;
            }

            function positionError(error){
                alert(error.message)
				// on error you get coordinates from my local town
				//old way
				 var latitude = 60.274502;
				var longitude = 25.033648;
				//Now it gets location from your ip using separate api so you will never get a problem with permissions.
					$.get("http://ipinfo.io", function(response) {
						var cit = response.city;
						var location =response.loc;
						
						console.log(location);
						var res = location.split(",");	
						console.log(res);	
						var one = res[0],
						two = res[1];
						
						
						document.getElementById("mlat").innerHTML = one;
                document.getElementById("mlng").innerHTML = two;
				document.getElementById("city").innerHTML = cit;
				
				var elem1 = document.getElementById("lat");
				elem1.value = one;
				var elem2 = document.getElementById("lng");
				elem2.value = two;
						
					}, "jsonp");
				
				
				
			
		
		
   		
				
            }