 /**
 * @name AjaxLoader.js
 * @version 0.1
 * @author Szymon Domanski <szymon.domanski.2011@gmail.com>
 */
 
 function _prototypeGetExternalPageContnetJquery(url,cmd,data == null){
   console.log('GetExternalPageContnetJquery > url: ' + url);
   var counter = 10;
   var step = 0;
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
               if(step < 10){
                  _prototypeGetExternalPageContnetJquery(url,cmd,data);
                  step++;
               } else {
                  alert('system error post data contact admin');
               }
            },
            success: function(data) {
               console.log('GetExternalPageContnetJquery > url: ')
               if(!data && step < 10){
                  _prototypeGetExternalPageContnetJquery(url,cmd,data);
                  step++;
                  console.log(step);
                  console.log(data);
               } else {
                  console.log(data);
                  result = data;
               }
            }
         });
         return result;
         break;
      case 'sendPostSoap':
        // preper  
         break;
      case 'sendGet'
         $.ajax({
            url: url,
            contentType: "text/xml",
            dataType: "text",
            type: 'GET',
            async: false,
            error: function() {
               if(step < 10){
                  GetExternalPageContnetJquery(url);
                  step++;
               } else {
                  alert('system error');
               }
            },
            success: function(data) {
               console.log('This is success start if')
               if(!data && step < 10){
                  GetExternalPageContnetJquery(url);
                  step++;
                  console.log(step);
                  console.log(data);
               } else {
                  console.log(data);
                  result = data;
               }
            }
         });
         return result;
         break;
 }