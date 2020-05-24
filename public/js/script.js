let i =0;
let images = [];
let time = 3000;
let img3 = document.querySelector('.img3');
let img4 = document.querySelector('.img4');
let img5 = document.querySelector('.img5');
let img = document.querySelector('.img')


// image list
images[0] = 'pexels-photo-236900.jpg';
images[1] = 'pexels-photo-262484.jpeg';
images[2] = 'pexels-photo-280250.jpeg';
images[3] = 'pexels-photo-296951.jpg';
images[4] = '4.jpg';
images[5] = '7.jpg';
images[6] = '13.jpg';
images[7] = '18.jpg';
images[8] = '14.jpg';
images[9] = '12.jpg';
images[10] = '9.jpg';



// change image
function changeImg(){
     document.slide.src = '../public/images/'+images[i];

     if(i<images.length -1){
         i+=1;
     }else{
         i=0;
     }
     setTimeout('changeImg()', time);

     console.log(i)
}

window.onload = changeImg;