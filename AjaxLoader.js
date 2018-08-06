 /**
 * @name AjaxLoader.js
 * @version 
 * @author Szymon Domanski <szymon.domanski.2011@gmail.com>
 */
<<<<<<< HEAD
 var step = 1;

 function GetExternalPageContnetJquery(url,cmd,data){
=======
 
 function _prototypeGetExternalPageContnetJquery(url,cmd,data = false){
   console.log('GetExternalPageContnetJquery > url: ' + url);
>>>>>>> a4d70a38828279eca5c638bfa2bb0529b97d2624
   var counter = 10;
   var result;
   switch(cmd) {
      case 'sendPost':
         $.ajax({
            url: url,
            contentType: "text/xml",
            data : data,
            dataType: "text",
            type: 'POST',
            async: false,
            error: function() {
                if(!$.trim(data) && step < 10){
                  step++;
                  GetExternalPageContnetJquery(url,cmd,data);
               } else {
                  alert('system error post data contact admin');
               }
            },
            success: function(data) {
               if(!data && step < 10){
                  step++;
                  GetExternalPageContnetJquery(url,cmd,data);
               } else {
                  result = data;
               }
            }
         });
         return result;
         break;
      case 'sendPostSoap':
        // preper  
         break;
<<<<<<< HEAD
      case 'sendGet':
=======
      case 'sendGet' :
>>>>>>> a4d70a38828279eca5c638bfa2bb0529b97d2624
         $.ajax({
            url: url,
            contentType: "text/xml",
            dataType: "text",
            type: 'GET',
            async: false,
            error: function() {
               if(step < 10){
                  step++;
                  GetExternalPageContnetJquery(url,cmd,data);
                  
               } else {
                  alert('system error');
               }
            },
            success: function(data) {
               //console.log('This is success start if')
                if(!$.trim(data) && step < 10){
                  step++;
                  GetExternalPageContnetJquery(url,cmd,data);
                  
               } else {
                  result = data;
               }
            }
         });
         return result;
         break;
      case 'sendGetXml':
         $.ajax({
            url: url,
            contentType: "text/xml",
            dataType: "xml",
            type: 'GET',
            async: false,
            error: function() {
               if(step < 10){
                  step++;
                  GetExternalPageContnetJquery(url,cmd,data);
               } else {
                  alert('system error');
               }
            },
            success: function(data) {
               console.log(data);
               if( data.xmlStandalone === false && step < 10){
                  step++;
                  GetExternalPageContnetJquery(url,cmd,data);
               } else {
                  result = data;
               }
            }
         });
         return result;
         break;
   }
}