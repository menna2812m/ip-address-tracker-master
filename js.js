


var btn = document.getElementById('ipbtn');

var IP , Location , time , isp  ;

btn.addEventListener("click", function(){
    var IpAdd = document.getElementById('ipaddress').value;
   

    axios.get('https://geo.ipify.org/api/v1?apiKey=at_FltvOZLhNji9wsOHga0QXX0jF0pxo&ipAddress='+IpAdd)
    .then((response) => {
        // console.log(response.status);
        console.log(response.data);

        // if(response.data.code != 200){
        //     $("#errormodal").modal('show');
        //     $("#Errormessage").html(response.data.message)

       
        // }
        // var lat=response.data.location.lat;
        // var lng=response.data.location.lng;

        // var urlbeg="https://maps.google.com/maps?q='+lat+','+lng+'&hl=es&z=14&amp;output=embed";
        // var urlend="&zoom=18&maptype=roadmap";
      
        // console.log(lat);
        // console.log(lng);
        // $("iframe").attr("src",urlbeg);


        isp = response.data.isp;
        time=response.data.location.timezone;
        Location= response.data.location.city +', '+ response.data.location.country + ', '+ response.data.location.region;
       
        $("#IPadd").html(IpAdd);
        $("#Loc").html(Location);
        $("#time").html(time);
        $("#isp").html(isp);
    
   
      
    });
});


