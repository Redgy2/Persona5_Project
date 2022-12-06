//Stock les images des personnages et les change dépendamment du boutton cliqué
var i = 0,Images = ["../Images/futaba.png","../Images/navi.png"];

function mySlide(param){
    if(param === 'next'){
        i++;
        if(i === Images.length){
            i = Images.length - 1;
        }
    }
    else {
        i--;
        if(i < 0){
            i = 0;
        }
    }
    document.getElementById('slide').src = Images[i];
}