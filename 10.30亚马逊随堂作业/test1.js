// var img4=document.querySelector('#images>a:nth-child(4)');
// var img4=document.getElementById('images').children[4];
// var img4=document.getElementsByClassName('hiddenImg');
// console.log(img4);
var imagesA= document.getElementById("images").children;
// imagesA[0].style.display='none';
// imagesA[4].style.display='block';
// imagesA[4].style.border="1px solid "

//通过更换CSS类名来实现更换样式。
//26行元素隐藏
// imagesA[0].className="hiddenImg";
//30行元素显示
// imagesA[4].className="displayImg";
 console.log(imagesA);
 //定时器间隔一秒，显示1张图像，其余图像隐藏。
 var currentNo=0;
 function changeImg(){
     //排他原理，先去掉同类
     for(var i=0;i<imagesA.length;i++){
         imagesA[i].className="hiddenImg";
           console.log(imagesA[i]);
     }
     //或者
     //再突破自己
     imagesA[currentNo].className= "displayImg";
     if(currentNo<7){currentNo++;}
     else{
         currentNo=0;
     }
     console.log(currentNo);
 }
 
 var timer = window.setInterval(changeImg,1000)

 function StaticRange(){
    window.clearInterval(timer);
    
    }

 function stopChange(){
    timer = window.setInterval(changeImg,1000)


}


  var imagesDiv = document.getElementById('images');
  console.log(imagesDiv);


 images.addEventListener('mouseover',StaticRange);
 images.addEventListener('mouseout',stopChange);

//  console.log(images);

 
