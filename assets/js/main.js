//******VARIABLES******

var gallery = document.getElementById("gallery");
var logo = document.getElementById("logo");
var modal = document.getElementById("modal");
var close = document.getElementById("close1");
var modalDiv = document.getElementById("modalDiv");
var images; //Number of Images to Be Loaded, start at '0'
var place = '0'; //Pointer for Gallery
var color = 'blue'; //BG Color for Gallery
var pageTitle = document.title;
var page; //Page for Image Folder Location


//******LOAD IMAGES******

function directory() {
  if (pageTitle == "KYLE BROWN | PHOTO") {
    page = 'photo/';
    images = 34;
  }
  
  else if (pageTitle == "KYLE BROWN | VIDEO") {
    page = 'video/';
    images = 9;
  }
  
  else if (pageTitle == "KYLE BROWN | DESIGN") {
    page = 'design/';
    images = 8;
  }
}


$(document).ready(function(){
        directory();
        var dir = "../images/" + page + "thumbnail/KB"; // folder location
        var fileextension = ".jpg"; // image format
        var i = "0";
        
        $(function imageloop(){
          if (color == "blue"){color = "red";}
          else if (color == "yellow"){color = "blue";}
          else {color = "yellow";}
          $("<div  />").attr('class', "thumb" ).attr('id', "div" + i ).attr('style', "background-color: var(--" + color + ")" ).appendTo("#gallery");
          $("<figure  />").attr('class', "thumb" ).attr('id', "figure" + i ).appendTo("#div" + i);
          $("<img>").attr('class', "thumb" ).attr('src',  dir + i + fileextension ).attr('onclick', "javascript:firstOpen(" + i + ");").appendTo("#figure" + i);
          if (i < images){
            i++;
            imageloop();
          };
        });   
      });
  

//******MODAL GALLERY******

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function firstOpen(z) {
  place = z;
  var dir = "../images/" + page + "gallery/KB"; // folder location
  var fileextension = ".jpg"; // image format
  modalDiv.style.backgroundImage = "url(" + dir + z + fileextension + ")"; // Change Image Source
  openModal();
}

function changeLeft() {
  var dir = "../images/" + page + "gallery/KB"; // folder location
  var fileextension = ".jpg"; // image format
  place--;
  if(place < 0){place = images;}
  modalDiv.style.backgroundImage = "url(" + dir + place + fileextension + ")"; // Change Image Source
}

function changeRight() {
  var dir = "../images/" + page + "gallery/KB"; // folder location
  var fileextension = ".jpg"; // image format
  place++;
  if(place > images){place = 0;}
  modalDiv.style.backgroundImage = "url(" + dir + place + fileextension + ")"; // Change Image Source
}
