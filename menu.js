var isiMenu= document.getElementById("isiMenu");
var listNama = ["Geprek Sambal Korek","Geprek Spicy Saos Keju","ketiga","keempat"];

for(i=1;i<=4;i++){
isiMenu.innerHTML=isiMenu.innerHTML+ '  <a>\
<li class=\'menu\'  onclick=\'index='+(i-1)+';klik()\'>\
<div\
 \
 id=\'gambar'+ i +'\'\
   style=\'\
   padding: 10%;\
   background-image: url(img/menu'+i+'.jpeg);\
   background-size: 100%;\
   border-radius: 50%;\
 \'\
>\
</div>\
<div\
 style=\'\
   width: 100%;\
\
   text-align: left;\
   justify-content: center;\
   display: flex;\
   align-items: center;\
   \
 \'\
>\
<div style=\'width: 90%;\'>\
 <h4 id=\'nama'+i+'\'>'+listNama[i-1]+'</h4>\
\
</div>\
\
</div>\
</li></a>'
}