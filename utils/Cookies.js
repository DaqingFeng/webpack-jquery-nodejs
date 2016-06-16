define([],function(){
   var Cookies={
       add:function(key,value,expire,domain){
            var life = new Date().getTime();
                life += expire * 1000 * 60;
                if(domain){
                    var cookieStr = key + "=" + escape(value) + ";expires=" + new Date(life).toGMTString()+ ";path=/;domain=" + domain;
                }else{
                    var cookieStr = key + "=" + escape(value) + ";expires=" + new Date(life).toGMTString();
                }
                document.cookie = cookieStr;
                },
        get:function(key)
                {
                  var cookies = document.cookie.split("; ");
                  for(var i = 0, len = cookies.length; i < len; i++) {
                        var cookie = cookies[i].split("=");
                        if(cookie.length > 0 && cookie[0] == key){
                            return unescape(cookie[1]);
                        }
                   }
	               return null;
                },
         remove:function(key) {
               	var cookieStr = key + "=" + escape('null') + ";expires=" + new Date().toGMTString();
		         document.cookie = cookieStr; 
               },
         clear: function() {
		     document.cookie = "";
	     },      
   }
   return Cookies;
});