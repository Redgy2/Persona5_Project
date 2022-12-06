//Point de départ
var i = 0;
var imga = [];
var time = 3500;

//Liste d'images lors du slideshow
imga[0] = 'Images/Cover.png';
imga[1] = 'Images/persona4.jpg';
imga[2] = 'Images/persona3.png';
imga[3] = 'Images/persona2.png';
imga[4] = 'Images/persona1.jpg';
imga[5] = 'Images/games.jpg';

//Fonction pour change l'image
function changeImg(){
    document.slide.src = imga[i];
    if(i < imga.length -1){
        i++;
    }else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}
window.onload = changeImg;