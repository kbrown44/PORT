


$(document).ready(function(){
        var dir = "images/thumbnail/"; // folder location
        var fileextension = ".jpg"; // image format
        var i = "0";
        
        $(function imageloop(){
          $("<div  />").attr('class', "picDiv" ).attr('style', "background-image:url(" + dir + i + fileextension + ")" ).attr('onclick', "javascript:firstOpen(" + i + ");").appendTo("#gallery");
          //$("<img />").attr('src', dir + i + fileextension ).appendTo("#testDiv" + i);
          if (i < images){
            i++;
            imageloop();
          };
        });   
      });