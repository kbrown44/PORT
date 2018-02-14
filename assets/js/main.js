//******VARIABLES******

var images = 22; //Number of Images to Be Loaded, start at '0'
var place = '0'; //Pointer for Gallery


//******LOAD IMAGES******

$(document).ready(function(){
        var dir = "../images/thumbnail/"; // folder location
        var fileextension = ".jpg"; // image format
        var i = "0";
        
        $(function imageloop(){
          $("<div  />").attr('class', "thumb" ).attr('id', "div" + i ).appendTo("#gallery");
          $("<figure  />").attr('class', "thumb" ).attr('id', "figure" + i ).appendTo("#div" + i);
          $("<img>").attr('class', "thumb" ).attr('src',  dir + i + fileextension ).appendTo("#figure" + i);
          if (i < images){
            i++;
            imageloop();
          };
        });   
      });